import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { SITE, PROJECTS } from '../data/site';
import Reveal from './Reveal';

const ProjectVisual = ({ p }) => {
  const images = p.images && p.images.length > 0 ? p.images : (p.image ? [p.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <a
      className="project-visual"
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${p.title} live demo in a new tab`}
    >
      <div className="visual-window">
        <div className="window-bar">
          <div className="window-dots" aria-hidden="true">
            <i className="dot dot-red" />
            <i className="dot dot-yellow" />
            <i className="dot dot-green" />
          </div>
          <span className="window-url">{p.label}</span>
          <span className="window-badge" aria-hidden="true">
            <span className="live-dot" /> Live
          </span>
        </div>

        {p.video ? (
          <div className="visual-media-container">
            <video
              className="visual-media"
              src={p.video}
              poster={p.image}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ) : images.length > 0 ? (
          <div className="visual-media-container">
            {images.map((img, idx) => (
              <img
                key={img}
                className={`visual-media visual-slide ${idx === currentIndex ? 'is-active' : ''}`}
                src={img}
                alt={`${p.title} preview screenshot ${idx + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            ))}
            {images.length > 1 && (
              <div className="slider-indicators" aria-hidden="true">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`slider-dot ${idx === currentIndex ? 'is-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentIndex(idx);
                    }}
                    tabIndex={-1}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="visual-body" style={{ background: p.tone }}>
            <span className="visual-label">
              {p.headline[0]}<br /><b>{p.headline[1]}</b>
            </span>
            <div className="visual-circle">{p.visual}</div>
            <div className="visual-line" />
          </div>
        )}
      </div>
    </a>
  );
};

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
        <a className="button button-primary" href={p.link} target="_blank" rel="noopener noreferrer">
          Live Demo <span aria-hidden="true">↗</span>
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

    <ProjectVisual p={p} />
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
