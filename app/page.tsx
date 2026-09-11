"use client";

import { useEffect } from "react";

const experience = [
  {
    eyebrow: "2022 — Aug 2026",
    company: "Solera",
    role: "QA Automation & AI Engineer",
    summary:
      "Built quality, automation and AI delivery systems across testing, reporting and CI/CD workflows.",
    metrics: [
      { value: "~85%", label: "test coverage" },
      { value: "Days → hours", label: "report preparation" },
      { value: "+20%", label: "Jenkins execution efficiency" },
      { value: "AWS + Azure", label: "AI automation agents" },
    ],
  },
  {
    eyebrow: "2019 — Present",
    company: "UNAM · Faculty of Sciences",
    role: "Teaching Assistant · Analytical Geometry",
    summary:
      "Teach mathematical reasoning, design exercises and adapt assessment for a classroom increasingly shaped by generative AI.",
    metrics: [
      { value: "7+ years", label: "technical teaching" },
      { value: "60+", label: "students per group" },
    ],
  },
  {
    eyebrow: "2025",
    company: "Bootcamp Institute",
    role: "Python Instructor",
    summary:
      "Delivered project-based Python training focused on automation, testing, debugging and practical business tools.",
    metrics: [
      { value: "Python", label: "automation & testing" },
      { value: "Project-based", label: "hands-on delivery" },
    ],
  },
];

const credentials = [
  {
    name: "Google Cloud Certified — Associate Cloud Engineer",
    meta: "Issued Aug 17, 2026 · Expires Aug 17, 2029",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    logoAlt: "Google Cloud",
  },
  {
    name: "AWS Certified — Cloud Practitioner",
    meta: "Mar 2025",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    logoAlt: "AWS",
  },
  {
    name: "Microsoft Certified — Azure AI Fundamentals",
    meta: "May 2026",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    logoAlt: "Microsoft Azure",
  },
  {
    name: "Google Cloud Computing Foundations Certificate",
    meta: "Mar 2026",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    logoAlt: "Google Cloud",
  },
  {
    name: "Oracle Cloud Infrastructure Foundations & AI Foundations",
    meta: "2025",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    logoAlt: "Oracle",
  },
];

const skills = [
  {
    title: "AI & GenAI",
    items: [
      "RAG",
      "LLMs",
      "Vertex AI",
      "Gemini",
      "Embeddings",
      "Semantic Retrieval",
      "pgvector",
      "Grounding",
      "Evaluation",
      "LangChain / LangGraph",
    ],
  },
  {
    title: "Cloud",
    items: [
      "Google Cloud",
      "Cloud Run",
      "Cloud SQL",
      "Cloud Storage",
      "Cloud Build",
      "Artifact Registry",
      "IAM",
      "IAP",
      "Secret Manager",
      "GKE",
      "Terraform",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Pydantic",
      "SQLAlchemy",
      "pytest",
      "Ruff",
      "mypy",
      "Git / GitHub",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M8 5h7v7" />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    let disposed = false;

    async function initLiquidGlass() {
      try {
        const { default: liquidGL } = await import("liquid-gl");
        if (disposed) return;

        liquidGL({
          target: ".liquidGL",
          snapshot: "body",
          resolution: 1.25,
          refraction: 0.008,
          aberration: 0,
          bevelDepth: 0.052,
          bevelWidth: 0.18,
          frost: 1.2,
          shadow: true,
          specular: true,
          reveal: "fade",
          tilt: false,
          magnify: 1,
        });
      } catch (error) {
        console.warn("liquidGL unavailable; CSS glass fallback remains active.", error);
      }
    }

    initLiquidGlass();
    return () => {
      disposed = true;
    };
  }, []);

  return (
    <main>
      <div className="spaceWash" aria-hidden="true" />
      <div className="orb orbOne" aria-hidden="true" />
      <div className="orb orbTwo" aria-hidden="true" />

      <nav className="navShell liquidGL">
        <div className="liquidContent navContent">
          <a className="brand" href="#top" aria-label="Arturo Espinosa Vargas home">
            AEV
          </a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#credentials">Credentials</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="heroCopy">
          <div className="eyebrowPill">
            <span className="statusDot" /> AI & Cloud Engineer · Mexico
          </div>
          <h1>
            Reliable AI systems,
            <span> engineered end to end.</span>
          </h1>
          <p className="heroLead">
            Physics-trained software engineer focused on Google Cloud, RAG,
            backend engineering and production-oriented AI architecture.
          </p>
          <a className="primaryAction" href="#work">
            View selected work <ArrowIcon />
          </a>

          <div className="heroProof">
            <div>
              <strong>Google Cloud</strong>
              <span>Associate Cloud Engineer</span>
            </div>
            <div>
              <strong>AI + Cloud</strong>
              <span>Architecture, evaluation & delivery</span>
            </div>
            <div>
              <strong>7+ years</strong>
              <span>Technical teaching</span>
            </div>
          </div>
        </div>

        <div className="portraitStage">
          <div className="portraitHalo" />
          <div className="glassSurface portraitCard">
            <img
              src="/arturo-espinosa.png"
              alt="Arturo Espinosa Vargas"
              className="portrait"
            />
            <div className="portraitCaption">
              <span>Arturo Espinosa Vargas</span>
              <small>AI · Cloud · Software Engineering</small>
            </div>
          </div>
        </div>
      </section>

      <div className="portfolioGrid sectionFrame">
        <aside className="sidebar">
          <div className="contactPanel liquidGL">
            <div className="liquidContent contactPanelContent">
              <p className="railEyebrow">Contact</p>
              <a className="emailLink" href="mailto:arturo.espinova@gmail.com">
                arturo.espinova@gmail.com
              </a>
              <div className="contactDivider" />
              <a href="https://www.linkedin.com/in/arturo-espinosa-vargas-694a70239/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon />
              </a>
              <a href="https://github.com/R2D2EV" target="_blank" rel="noreferrer">
                GitHub <ArrowIcon />
              </a>
              <a href="/arturo-espinosa-resume.pdf" target="_blank">
                Resume <ArrowIcon />
              </a>
              <a href="/arturo-espinosa-cv.pdf" target="_blank">
                Full CV <ArrowIcon />
              </a>
            </div>
          </div>
        </aside>

        <div className="contentColumn">
          <section className="contentSection" id="work">
            <div className="sectionHeading">
              <span className="sectionIndex">01</span>
              <div>
                <p className="kicker">Selected work</p>
                <h2>AI engineering that survives contact with production.</h2>
              </div>
            </div>

            <article className="glassSurface flagship">
              <div className="flagshipIntro">
                <div>
                  <div className="projectLabel">Flagship project · v1.0</div>
                  <h3>RAG Anywhere</h3>
                  <p>
                    A multilingual document question-answering system with
                    grounded generation, verifiable citations, deterministic
                    abstention and cloud-portable architecture.
                  </p>
                </div>
                <div className="projectMark">RA</div>
              </div>

              <figure className="architectureFigure">
                <img
                  src="/projects/rag-anywhere-architecture.png"
                  alt="RAG Anywhere master architecture"
                />
                <figcaption>
                  Local and Google Cloud adapters preserve the same application core.
                </figcaption>
              </figure>

              <div className="projectStats">
                <div><strong>EN ↔ ES</strong><span>Cross-language retrieval</span></div>
                <div><strong>1.00*</strong><span>Recall@K</span></div>
                <div><strong>1.00*</strong><span>MRR</span></div>
                <div><strong>CI/CD</strong><span>GitHub → Cloud Build → Cloud Run</span></div>
              </div>

              <p className="benchmarkNote">
                *Controlled multilingual benchmark; not a claim of universal production accuracy.
              </p>

              <div className="tagRow">
                {[
                  "Python", "FastAPI", "Vertex AI", "Gemini", "Cloud Run",
                  "Cloud SQL", "pgvector", "Cloud Storage", "IAP", "Cloud Build",
                  "Docker", "Hexagonal Architecture",
                ].map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <div className="projectFooter">
                <span>Source available on request</span>
                <span>Grounded answers · Citations · Abstention</span>
              </div>
            </article>

            <div className="secondaryProjects">
              <article className="glassSurface miniProject">
                <span className="projectOrdinal">02</span>
                <h3>Cloud-Native Task App</h3>
                <p>
                  Full-stack FastAPI application moved from local Docker development
                  to Cloud Run with persistent Cloud SQL PostgreSQL.
                </p>
              </article>

              <article className="glassSurface miniProject">
                <span className="projectOrdinal">03</span>
                <h3>AI Daily Brief & Quiz</h3>
                <p>
                  n8n workflow that turns AI news into concise learning briefs and
                  quiz questions with Gemini-powered automation.
                </p>
              </article>
            </div>
          </section>

          <section className="contentSection" id="experience">
            <div className="sectionHeading">
              <span className="sectionIndex">02</span>
              <div>
                <p className="kicker">Experience</p>
                <h2>Systems, teaching & measurable impact.</h2>
              </div>
            </div>

            <div className="careerMosaic">
              {experience.map((item, index) => (
                <article className={`glassSurface careerCard career${index + 1}`} key={item.company}>
                  {index === 1 && (
                    <img
                      className="unamWatermark"
                      src="/projects/unam-watermark.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  )}

                  <div className="careerHeader">
                    <span>{item.eyebrow}</span>
                    <span className="careerNumber">0{index + 1}</span>
                  </div>

                  <div className="careerBody">
                    <h3>{item.company}</h3>
                    <p className="careerRole">{item.role}</p>
                    <p className="careerSummary">{item.summary}</p>
                  </div>

                  <div className="impactGrid">
                    {item.metrics.map((metric) => (
                      <div className="impactTile" key={`${item.company}-${metric.label}`}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {index === 0 && (
                    <figure className="soleraVisual">
                      <img
                        src="/projects/solera-analytics-etl.png"
                        alt="ETL and Power BI dashboard visualization"
                      />
                    </figure>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="contentSection" id="credentials">
            <div className="sectionHeading">
              <span className="sectionIndex">03</span>
              <div>
                <p className="kicker">Credentials</p>
                <h2>Cloud foundations backed by hands-on systems.</h2>
              </div>
            </div>

            <div className="credentialGrid">
              {credentials.map((credential) => (
                <article className="glassSurface credentialCard" key={credential.name}>
                  <div className="brandIconWrap">
                    <img src={credential.logo} alt={credential.logoAlt} />
                  </div>
                  <div>
                    <h3>{credential.name}</h3>
                    <p>{credential.meta}</p>
                  </div>
                </article>
              ))}
            </div>

            <a className="credlyLink" href="https://www.credly.com/users/arturo-espinosa-vargas" target="_blank" rel="noreferrer">
              View credential profile on Credly <ArrowIcon />
            </a>
          </section>

          <section className="contentSection" id="technical-focus">
            <div className="sectionHeading">
              <span className="sectionIndex">04</span>
              <div>
                <p className="kicker">Technical focus</p>
                <h2>AI systems meet software and cloud engineering.</h2>
              </div>
            </div>

            <div className="skillGrid">
              {skills.map((group) => (
                <article className="glassSurface skillCard" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skillCloud">
                    {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="contentSection" id="about">
            <article className="aboutUniverse">
              <div className="starLayer starLayerOne" aria-hidden="true" />
              <div className="starLayer starLayerTwo" aria-hidden="true" />
              <div className="nebula" aria-hidden="true" />
              <div className="aboutContent">
                <p className="kicker darkKicker">About</p>
                <h2>Physics gave me the foundations. Engineering made them useful.</h2>
                <p>
                  I studied Physics at UNAM and built my professional path through
                  software automation, data workflows, technical teaching and cloud
                  engineering. Today I am especially interested in the point where AI
                  behavior, software architecture and cloud infrastructure become one
                  reliable system.
                </p>
                <p>
                  My work emphasizes reproducibility, measurable quality and clear
                  technical communication — from retrieval evaluation and typed Python
                  services to CI/CD and production cloud deployment.
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>

      <footer>
        <span>© 2026 Arturo Espinosa Vargas</span>
        <span>Next.js · liquidGL-inspired glass · AI & Cloud Engineering</span>
      </footer>
    </main>
  );
}
