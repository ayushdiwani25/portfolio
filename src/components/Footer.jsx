import { SITE, SOCIALS } from '../data/site';
import SocialIcons from './SocialIcons';

const Footer = () => (
  <footer className="site-footer container">
    <span>© {new Date().getFullYear()} {SITE.name}</span>
    <SocialIcons items={SOCIALS} />
    <a href="#top" className="to-top">Back to top ↑</a>
  </footer>
);

export default Footer;
