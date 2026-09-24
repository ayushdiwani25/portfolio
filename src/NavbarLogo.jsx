import { motion } from "framer-motion";

export default function NavbarLogo() {
  return (
    <motion.a
      href="#top"
      className="custom-navbar-logo"
      aria-label="Aayush Divani — Front-end Developer Portfolio Home"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Visual Emblem Badge with Orbital Motion & Sheen */}
      <div className="logo-badge-container">
        {/* Orbital Track with Revolving Node */}
        <svg
          className="logo-orbit-ring"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="27"
            cy="27"
            r="25"
            stroke="url(#orbitTrackGrad)"
            strokeWidth="1.4"
            strokeDasharray="6 10 18 8"
            className="orbit-circle"
          />
          <circle cx="27" cy="2" r="2.4" fill="#f06449" className="orbit-node" />
          <defs>
            <linearGradient id="orbitTrackGrad" x1="0" y1="0" x2="54" y2="54">
              <stop offset="0%" stopColor="#f06449" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#17221f" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f06449" stopOpacity="0.75" />
            </linearGradient>
          </defs>
        </svg>

        {/* Tactile Dark Squircle Shield */}
        <div className="logo-shield">
          {/* Shimmer Sheen Sweep */}
          <div className="logo-sheen" aria-hidden="true" />

          {/* Background Ambient Radial Glow */}
          <div className="logo-shield-glow" aria-hidden="true" />

          {/* SVG Monogram (Interlocking A + D) */}
          <svg
            className="logo-monogram-svg"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="monoGradA"
                x1="6"
                y1="8"
                x2="20"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#f7f5f0" />
                <stop offset="100%" stopColor="#d5cfbf" />
              </linearGradient>

              <linearGradient
                id="monoGradD"
                x1="18"
                y1="8"
                x2="32"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#ff8a6f" />
                <stop offset="50%" stopColor="#f06449" />
                <stop offset="100%" stopColor="#d6492e" />
              </linearGradient>

              <filter id="monogramGlow" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow
                  dx="0"
                  dy="1"
                  stdDeviation="2"
                  floodColor="#f06449"
                  floodOpacity="0.45"
                />
              </filter>
            </defs>

            {/* Subtle Code Brackets in background */}
            <path
              d="M 5 18 L 3 15 M 5 18 L 3 21"
              stroke="#f06449"
              strokeWidth="1.3"
              strokeOpacity="0.3"
              strokeLinecap="round"
            />
            <path
              d="M 31 18 L 33 15 M 31 18 L 33 21"
              stroke="#f06449"
              strokeWidth="1.3"
              strokeOpacity="0.3"
              strokeLinecap="round"
            />

            {/* Letter 'A' Geometric Glyph */}
            <path
              className="glyph-a"
              d="M 13.5 9.5 L 7.5 26.5 M 13.5 9.5 L 19.5 26.5 M 9.8 21 H 17.2"
              stroke="url(#monoGradA)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Letter 'D' Geometric Curved Arc */}
            <path
              className="glyph-d"
              d="M 19 9.5 H 22.8 C 27.6 9.5 30 13.5 30 18 C 30 22.5 27.6 26.5 22.8 26.5 H 19 Z"
              stroke="url(#monoGradD)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="rgba(240, 100, 73, 0.18)"
              filter="url(#monogramGlow)"
            />

            {/* Signature Accent Dot */}
            <circle cx="31" cy="26" r="1.6" fill="#f06449" className="glyph-dot" />
          </svg>
        </div>
      </div>

      {/* Brand Typography & Status Lockup */}
      <div className="logo-info">
        <div className="logo-title-row">
          <span className="logo-name-first">Aayush</span>
          <span className="logo-name-last">Divani</span>
          <span className="logo-accent-dot">.</span>
        </div>

        <div className="logo-meta-row">
          <span className="logo-role-pill">
            <span className="role-indicator-dot" />
            <span className="role-text-slider">
              <span className="role-text-primary">React.js Developer</span>
              <span className="role-text-hover">Frontend Specialist ↗</span>
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
