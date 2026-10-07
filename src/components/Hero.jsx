import { m } from 'framer-motion';
import { SITE, TICKER } from '../data/site';

const Hero = () => (
  <>
    <section id="top" className="hero container">
      <div className="hero-main">
        {SITE.available && (
          <m.p
            className="status-pill"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" aria-hidden="true" /> Available for front-end roles
          </m.p>
        )}
        <m.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {SITE.role}
        </m.p>
        <m.h1 className="hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          Interfaces with <em>purpose.</em>
        </m.h1>
        <m.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          I&apos;m {SITE.name}, a front-end developer who turns thoughtful systems into fast, responsive,
          accessible digital experiences.
        </m.p>
        <m.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}>
          <a className="button button-primary" href="#work">See selected work <span aria-hidden="true">↘</span></a>
          <a className="button button-ghost" href={SITE.resume} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↓</span></a>
          <a className="text-link" href={`mailto:${SITE.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </m.div>
      </div>

      <m.figure IN
        className="hero-card"
        initial={{ opacity: 0, rotate: 5, scale: 0.94 }}
        animate={{ opacity: 1, rotate: 3, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, type: 'spring' }}
      >
        <div className="hero-card-top"><span>OPEN TO</span><span>FRONT-END ROLES</span></div>
        <img
          className="profile-image"
          src={SITE.photo}
          srcSet={`${SITE.photoSmall} 420w, ${SITE.photo} 640w`}
          sizes="(max-width: 700px) 60vw, 240px"
          width="640"
          height="800"
          alt={`Portrait of ${SITE.name}`}
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="hero-card-bottom"><span>BHUJ</span></figcaption>
      </m.figure>
    </section>

    <div className="ticker" aria-hidden="true">
      <div>
        {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
          <span key={i}>{t.toUpperCase()}<b>✳</b></span>
        ))}
      </div>
    </div>
  </>
);

export default Hero;
