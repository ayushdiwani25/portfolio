import { ABOUT, STATS, EDUCATION, LANGUAGES } from '../data/site';
import Reveal from './Reveal';

const About = () => (
  <section id="about" className="section container">
    <div className="about-grid">
      <Reveal className="section-heading" amount={0.35}>
        <p className="eyebrow">02 / About</p>
        <h2>Engineer first,<br /><em>designer</em> at heart.</h2>
      </Reveal>

      <div className="about-body">
        <Reveal>
          {ABOUT.map((para) => <p key={para} className="about-text">{para}</p>)}
        </Reveal>

        <dl className="stats">
          {STATS.map((s, i) => (
            <Reveal as="div" key={s.label} className="stat" delay={i * 0.07} y={16}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal>
          <h3 className="mini-heading">Education</h3>
          <ul className="edu-list">
            {EDUCATION.map((e) => (
              <li key={e.degree}>
                <div>
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-place">{e.place}</p>
                </div>
                <div className="edu-meta">
                  <span>{e.period}</span>
                  <span>{e.score}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="langs"><span>Languages</span> {LANGUAGES.join(' · ')}</p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
