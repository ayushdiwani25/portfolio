import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./App.css";

const skills = [
  { label: "Languages", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3" },
  {
    label: "Frameworks",
    value:
      "React.js, Redux Toolkit, React Router, Context API, Framer Motion, Tailwind CSS",
  },
  {
    label: "Backend & data",
    value: "Firebase Authentication, Firestore, REST API integration, Axios",
  },
  {
    label: "Tools",
    value:
      "Git, GitHub, Vite, Webpack, NPM, ESLint, Prettier, VS Code, Chrome DevTools",
  },
];

const experience = [
  {
    period: "Jan 2026 — Apr 2026",
    role: "Front-end Developer Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    points: [
      "Built responsive, production-ready web pages using semantic HTML5, CSS3, and modular JavaScript.",
      "Developed custom front-end UI components and optimized interface styling using Tailwind CSS.",
      "Debugged rendering issues and asynchronous data-state bugs to improve application stability.",
      "Managed Git and GitHub workflows, including branching and deployment tracking.",
    ],
  },
  {
    period: "7th Semester",
    role: "React.js Developer Intern",
    company: "InfoLabz IT Services Pvt. Ltd.",
    points: [
      "Applied React component architecture, props, and state management to build functional UI modules.",
      "Integrated live REST APIs using JavaScript and Axios to fetch and render dynamic data.",
      "Structured fetched API data into clean, organized, user-friendly application views.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "FoodRush",
    type: "Online food ordering platform",
    description:
      "A responsive single-page experience for browsing menus, managing a live cart, and checking out with a persistent session.",
    stack: [
      "React.js",
      "Redux Toolkit",
      "TypeScript",
      "Firebase",
      "Framer Motion",
    ],
    link: "https://food-ordering-two-omega.vercel.app",
    label: "foodrush / menu",
    visual: "FR",
  },
  {
    number: "02",
    title: "WorkSphere",
    type: "Real-time workflow management",
    description:
      "A collaborative workspace for organizing task pipelines, monitoring live team analytics, and managing role-based access across growing teams.",
    stack: ["React.js", "Firebase", "Firestore", "RBAC", "Live analytics"],
    link: "https://workflow-management-cc363.web.app/",
    label: "worksphere / board",
    visual: "WS",
  },
  {
    number: "03",
    title: "WolfSite",
    type: "Modern brand and landing page",
    description:
      "A cinematic interactive landing page that blends 3D motion, motion graphics, and storytelling to create a bold creative studio experience. Built with React, Three.js, and GSAP, the project showcases immersive visuals, scroll-based animation, and experimental web design.",
    stack: ["React.js", "Vite", "Responsive UI", "Three.js", "GSAP"],
    link: "https://wolfsite-eosin.vercel.app/",
    label: "wolfsite / brand",
    visual: "WS",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aayush-patel-520204368",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3Zm-1.25 1.75h2.5v8.25h-2.5V10.25Zm4.25 0h2.39v1.13h.03c.33-.64 1.15-1.31 2.37-1.31 2.52 0 2.98 1.66 2.98 3.82v4.61h-2.5v-4.31c0-1.03-.02-2.35-1.43-2.35-1.44 0-1.66 1.12-1.66 2.28v4.38h-2.5V10.25Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "https://github.com/ayushdiwani25",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.55 2.35 1.1 2.92.84.09-.66.35-1.1.64-1.35-2.2-.25-4.51-1.1-4.51-4.89 0-1.08.38-1.97 1.02-2.66-.1-.25-.44-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.9-1.29 2.74-1.02 2.74-1.02.54 1.4.2 2.45.1 2.7.64.69 1.02 1.58 1.02 2.66 0 3.8-2.32 4.63-4.53 4.88.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/ayush_diwani_25/?hl=en",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      gsap.to(progressRef.current, {
        scaleX: progress,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <nav
        className="site-nav mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10"
        aria-label="Main navigation"
      >
        <a className="brand" href="#top" aria-label="Aayush Divani home">
          AD<span>.</span>
        </a>
        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.16em] text-ink/60 sm:flex">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-cta"
          href="/portfolio/Aayush_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </nav>
      <section
        id="top"
        className="hero-wrap mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:pb-32 lg:pt-24"
      >
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Front-end developer · React.js specialist
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Interfaces with <em>purpose.</em>
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I&apos;m Aayush Divani, a front-end developer who turns thoughtful
            systems into fast, responsive digital experiences.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a className="button button-primary" href="#work">
              See selected work <span>↘</span>
            </a>
            <a className="text-link" href="mailto:ayushdiwani25@gmail.com">
              Let&apos;s talk <span>↗</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, rotate: 5, scale: 0.94 }}
          animate={{ opacity: 1, rotate: 3, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, type: "spring" }}
        >
          <div className="hero-card-top">
            <span>AVAILABLE FOR</span>
          
            <span>FRONT-END ROLES</span>
          </div>
          <img
            className="profile-image"
            src="/portfolio/myimage.jpeg"
            alt="Portrait of Aayush Divani"
          />
          <div className="hero-card-bottom">
            <span>AHMEDABAD, IN</span>
          </div>
        </motion.div>
      </section>
      <div className="ticker border-y border-ink/10" aria-hidden="true">
        <div>
          REACT.JS <span>✳</span> RESPONSIVE UI <span>✳</span> CLEAN SYSTEMS{" "}
          <span>✳</span> REAL-WORLD PRODUCTS <span>✳</span> REACT.JS{" "}
          <span>✳</span>
        </div>
      </div>
      <section
        id="work"
        className="section-wrap mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">01 / Selected work</p>
          <h2>
            Small team energy.
            <br />
            <em>Production-grade</em> output.
          </h2>
        </motion.div>
        {projects.map((project) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
          >
            <div className="project-number">{project.number}</div>
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View live project <span>↗</span>
              </a>
            </div>
            <div className="project-visual">
              <div className="visual-window">
                <div className="window-bar">
                  <i />
                  <i />
                  <i />
                  <span>{project.label}</span>
                </div>
                <div className="visual-body">
                  <span className="visual-label">
                    {project.title === "WorkSphere"
                      ? "MOVE WORK,<br /><b>FORWARD.</b>"
                      : project.title === "WolfSite"
                        ? "BUILD<br /><b>ONLINE.</b>"
                        : "GOOD FOOD,<br /><b>GOOD MOOD.</b>"}
                  </span>
                  <div className="visual-circle">{project.visual}</div>
                  <div className="visual-line" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
      <section id="experience" className="dark-section">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <motion.div
            className="section-heading light"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow">02 / Experience</p>
            <h2>
              Learning in public.
              <br />
              <em>Building for real.</em>
            </h2>
          </motion.div>
          <div className="experience-list">
            {experience.map((item) => (
              <motion.div
                className="experience-item"
                key={item.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="experience-period">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">03 / Toolkit</p>
          <h2>
            Curious by
            <br />
            <em>default.</em>
          </h2>
        </motion.div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-row"
              key={skill.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{skill.label}</h3>
                <p>{skill.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            04 / Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          >
            Have a good project
            <br />
            <em>in mind?</em>
          </motion.h2>
          <a className="contact-email" href="mailto:ayushdiwani25@gmail.com">
            ayushdiwani25@gmail.com <span>↗</span>
          </a>
          <div className="contact-meta">
            <span>Ahmedabad, Gujarat, India</span>
            <span>+91 7861934655</span>
          </div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs font-bold uppercase tracking-[0.14em] text-ink/50 lg:px-10">
        <span>© 2026 Aayush Divani</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={`${label}-footer`}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "1.9rem",
                height: "1.9rem",
                borderRadius: "9999px",
                border: "1px solid rgba(23,34,31,0.25)",
                background: "rgba(23,34,31,0.03)",
                color: "#17221f",
                textDecoration: "none",
              }}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                {icon.props.children}
              </svg>
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default App;
