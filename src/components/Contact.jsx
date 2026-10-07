import { useEffect, useRef} from 'react';
import { SITE } from '../data/site';
import Reveal from './Reveal';

const Contact = () => {
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

 

  const subject = encodeURIComponent('Project enquiry from your portfolio');

  return (
    <section id="contact" className="contact-section">
      <div className="section container">
        <Reveal as="p" className="eyebrow" amount={0.5}>05 / Contact</Reveal>
        <Reveal as="h2" delay={0.08} amount={0.5}>
          Have a good project<br /><em>in mind?</em>
        </Reveal>
        <Reveal as="p" className="contact-lede" delay={0.12}>
          I&apos;m open to front-end and React roles, internships and freelance work. Email is the fastest way to reach me.
        </Reveal>

        <Reveal className="contact-actions" delay={0.16}>
          <a className="contact-email" href={`mailto:${SITE.email}?subject=${subject}`}>
            {SITE.email} <span aria-hidden="true">↗</span>
          </a>

        </Reveal>

        <div className="contact-meta">
          <span>{SITE.location}</span>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <a href={SITE.resume} target="_blank" rel="noopener noreferrer">Download resume ↓</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
