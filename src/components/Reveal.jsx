import { m } from 'framer-motion';

/** Fade/slide-in once when scrolled into view. */
const Reveal = ({ as = 'div', y = 24, x = 0, delay = 0, amount = 0.25, children, ...rest }) => {
  const Tag = m[as];
  return (
    <Tag
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
