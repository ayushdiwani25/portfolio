import { useEffect, useState } from 'react';

/** Returns the id of the section currently crossing the middle of the viewport. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    const onScroll = () => window.scrollY < 120 && setActive('');
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [ids]);

  return active;
}
