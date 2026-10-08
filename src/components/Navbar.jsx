import { useEffect, useState } from 'react';
import { SITE, NAV_LINKS } from '../data/site';
import useActiveSection from '../hooks/useActiveSection';
import NavbarLogo from './NavbarLogo';
import ThemeToggle from './ThemeToggle';

const IDS = NAV_LINKS.map((l) => l.id);

const Navbar = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 760 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}${open ? ' is-menu-open' : ''}`}>
      <nav className="site-nav container" aria-label="Main navigation">
        <NavbarLogo onClick={close} />

        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="nav-cta" href={SITE.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger${open ? ' is-open' : ''}`} aria-hidden="true"><i /><i /><i /></span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
        <ul className="container">
          {NAV_LINKS.map((l) => (
            <li key={l.id}><a href={`#${l.id}`} onClick={close}>{l.label}</a></li>
          ))}
          <li><a href={SITE.resume} target="_blank" rel="noopener noreferrer" onClick={close}>Resume ↗</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
