import { EXPERIENCE } from '../data/site';
import Reveal from './Reveal';

const Experience = () => (
  <section id="experience" className="dark-section">
    <div className="section container">
      <Reveal className="section-heading light" amount={0.35}>
        <p className="eyebrow">03 / Experience</p>
        <h2>Learning in public.<br /><em>Building for real.</em></h2>
      </Reveal>

      <div className="experience-list">
        {EXPERIENCE.map((item) => (
          <Reveal key={item.company} className="experience-item" x={-24} y={0}>
            <div className="experience-period">{item.period}</div>
            <div>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <ul>{item.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
