import { SKILLS, PRACTICES } from '../data/site';
import Reveal from './Reveal';

const Skills = () => (
  <section id="skills" className="section container skills-layout">
    <Reveal className="section-heading" amount={0.35}>
      <p className="eyebrow">04 / Toolkit</p>
      <h2>Curious by<br /><em>default.</em></h2>
    </Reveal>

    <div className="skills-grid">
      {SKILLS.map((group, i) => (
        <Reveal key={group.label} className="skill-row" x={24} y={0} delay={i * 0.08}>
          <span className="skill-index" aria-hidden="true">0{i + 1}</span>
          <div>
            <h3>{group.label}</h3>
            <ul className="chips">
              {group.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        </Reveal>
      ))}

      <Reveal className="skill-row" x={24} y={0} delay={SKILLS.length * 0.08}>
        <span className="skill-index" aria-hidden="true">0{SKILLS.length + 1}</span>
        <div>
          <h3>How I work</h3>
          <ul className="chips is-outline">
            {PRACTICES.map((it) => <li key={it}>{it}</li>)}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Skills;
