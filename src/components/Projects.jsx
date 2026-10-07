import { m } from 'framer-motion';
import { SITE, PROJECTS } from '../data/site';
import Reveal from './Reveal';

const Project = ({ p }) => (
  <m.article
    className="project-card"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="project-number" aria-hidden="true">{p.number}</div>

    <div className="project-content">
      <p className="project-type">{p.type}</p>
      <h3>{p.title}</h3>
      <p className="project-description">{p.description}</p>
      <ul className="project-points">
        {p.points.map((pt) => <li key={pt}>{pt}</li>)}
      </ul>
      <ul className="tag-list" aria-label="Tech stack">
        {p.stack.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div className="project-links">
        <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
          View live project <span aria-hidden="true">↗</span>
          <span className="sr-only"> ({p.title}, opens in a new tab)</span>
        </a>
        {p.code && (
          <a className="project-link is-secondary" href={p.code} target="_blank" rel="noopener noreferrer">
            Code <span aria-hidden="true">↗</span>
            <span className="sr-only"> ({p.title} on GitHub, opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>

    <a className="project-visual" href={p.link} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
      <div className="visual-window">
        <div className="window-bar"><i /><i /><i /><span>{p.label}</span></div>
        <div className="visual-body" style={{ background: p.tone }}>
          <span className="visual-label">{p.headline[0]}<br /><b>{p.headline[1]}</b></span>
          <div className="visual-circle">{p.visual}</div>
          <div className="visual-line" />
        </div>
      </div>
    </a>
  </m.article>
);

const Projects = () => (
  <section id="work" className="section container">
    <Reveal className="section-heading" y={24} amount={0.35}>
      <p className="eyebrow">01 / Selected work</p>
      <h2>Small team energy.<br /><em>Production-grade</em> output.</h2>
    </Reveal>

    {PROJECTS.map((p) => <Project key={p.number} p={p} />)}

    <Reveal className="more-work">
      <p>More experiments and source code live on GitHub.</p>
      <a className="button button-ghost" href={SITE.github} target="_blank" rel="noopener noreferrer">
        GitHub profile <span aria-hidden="true">↗</span>
      </a>
    </Reveal>
  </section>
);

export default Projects;
