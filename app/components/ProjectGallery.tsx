"use client";

import { useEffect, useRef, useState } from "react";

type ProjectGalleryImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  images: ProjectGalleryImage[];
};

type LiquidGlassInstance = {
  destroy: () => void;
  markChanged: (element?: HTMLElement) => void;
};

const GLASS_MOTION_MS = 800;

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackGlassRef = useRef<HTMLDivElement | null>(null);
  const thumbGlassRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<LiquidGlassInstance | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function initializeGlass() {
      const root = rootRef.current;
      const trackGlass = trackGlassRef.current;
      const thumbGlass = thumbGlassRef.current;

      if (!root || !trackGlass || !thumbGlass) {
        return;
      }

      /*
      Official demo style: Frosted Glass.
      Docs example:
      blurAmount: 0.25
      cornerRadius: 30
      */
      trackGlass.dataset.config =
        JSON.stringify({
            blurAmount: 0,
            refraction: 0.69,
            chromAberration: 0.05,
            edgeHighlight: 0.05,
            specular: 0,
            fresnel: 1,
            distortion: 0,

            cornerRadius: 28,
            zRadius: 32,

            opacity: 0.82,

            saturation: 0,
            tintStrength: 0,
            brightness: 0,

            shadowOpacity: 0.16,
            shadowSpread: 7,
            shadowOffsetY: 1,

            floating: false,
            button: false,
        });

      /*
      Official demo style: Dark Glass.
      Docs example:
      brightness: -0.3
      blurAmount: 0.25
      cornerRadius: 50
      */
      thumbGlass.dataset.config =
        JSON.stringify({
            blurAmount: 0,
            refraction: 0.69,
            chromAberration: 0.05,
            edgeHighlight: 0.05,
            specular: 0,
            fresnel: 1,
            distortion: 0,

            cornerRadius: 50,
            zRadius: 40,

            opacity: 1,

            saturation: 0,
            tintStrength: 0,
            brightness: 0,

            shadowOpacity: 0.22,
            shadowSpread: 8,
            shadowOffsetY: 1,

            floating: false,
            button: false,
        });

      try {
        const { LiquidGlass } = await import("@ybouane/liquidglass");

        const instance = await LiquidGlass.init({
          root,
          glassElements: [
            trackGlass,
            thumbGlass,
          ],
        });

        if (cancelled) {
          instance.destroy();
          return;
        }

        instanceRef.current = instance as LiquidGlassInstance;
        root.classList.add("liquidglass-ready");
      } catch (error) {
        console.warn(
          "LiquidGlass could not initialize. Using CSS fallback.",
          error,
        );

        root.classList.add("liquidglass-fallback");
      }
    }

    void initializeGlass();

    return () => {
      cancelled = true;
      instanceRef.current?.destroy();
      instanceRef.current = null;
    };
  }, []);

  /*
  Keep the tiny WebGL scene refreshed only during the
  380 ms thumb movement. This makes the lens movement
  feel connected to the refraction rather than delayed.
  */
  useEffect(() => {
    const instance = instanceRef.current;

    if (!instance) {
      return;
    }

    const start = performance.now();
    let frame = 0;

    const refresh = (time: number) => {
      instance.markChanged();

      if (time - start < GLASS_MOTION_MS + 40) {
        frame = window.requestAnimationFrame(refresh);
      }
    };

    frame = window.requestAnimationFrame(refresh);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [currentIndex]);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="projectGallery">
      <div className="projectGalleryViewport">
        <img
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          className="projectGalleryImage"
        />
      </div>

      {images.length > 1 && (
        <div
          ref={rootRef}
          className={`galleryGlassRoot ${
            currentIndex === 1 ? "is-second" : ""
          }`}
          aria-label="AI Daily Brief project gallery"
        >
          {/*
          LiquidGlass never captures the root itself.
          This sibling scene provides something visible
          for the two glass layers to refract.
          */}
          <div
            className="galleryGlassScene"
            aria-hidden="true"
          >
            <span className="sceneGlow sceneGlowOne" />
            <span className="sceneGlow sceneGlowTwo" />
            <span className="sceneLine sceneLineOne" />
            <span className="sceneLine sceneLineTwo" />
          </div>

          {/* Frosted Glass track */}
          <div
            ref={trackGlassRef}
            className="galleryFrostedTrack"
            aria-hidden="true"
          />

          {/* Dark Glass active lens */}
          <div
            ref={thumbGlassRef}
            className="galleryDarkThumb"
            aria-hidden="true"
          />

          {/* Crisp labels stay above both WebGL elements */}
          <div
            className="gallerySwitchControls"
            role="tablist"
          >
            <button
              type="button"
              role="tab"
              aria-selected={currentIndex === 0}
              className={
                currentIndex === 0
                  ? "gallerySwitchButton is-active"
                  : "gallerySwitchButton"
              }
              onClick={() => setCurrentIndex(0)}
            >
              WF
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={currentIndex === 1}
              className={
                currentIndex === 1
                  ? "gallerySwitchButton is-active"
                  : "gallerySwitchButton"
              }
              onClick={() => setCurrentIndex(1)}
            >
              OUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
