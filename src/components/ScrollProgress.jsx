import { m, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

export default ScrollProgress;
