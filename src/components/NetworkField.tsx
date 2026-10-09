import { useReducedMotion } from "framer-motion";

/** Soft network of solid curves + traveling glow dots. No dashed strokes. */
const NetworkField = () => {
  const reduceMotion = useReducedMotion();

  const paths = [
    "M80 220 C 220 80, 420 90, 560 210",
    "M140 320 C 280 240, 480 260, 640 180",
    "M60 160 C 200 200, 360 40, 520 120",
    "M200 80 C 340 160, 500 300, 680 250",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 720 360" className="network-breathe absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(210,230,220,0)" />
            <stop offset="50%" stopColor="rgba(210,230,220,0.55)" />
            <stop offset="100%" stopColor="rgba(210,230,220,0)" />
          </linearGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {paths.map((d, i) => (
          <g key={d}>
            <path d={d} fill="none" stroke="url(#lineGlow)" strokeWidth="1.25" strokeLinecap="round" filter="url(#softBlur)" />
            <circle cx="0" cy="0" r="2.4" fill="rgba(230,240,235,0.95)" className="flow-dot">
              {!reduceMotion ? (
                <animateMotion dur={`${7 + i * 1.4}s`} repeatCount="indefinite" path={d} rotate="auto" begin={`${i * 0.8}s`} />
              ) : null}
            </circle>
            {/* static nodes */}
            <circle cx={120 + i * 90} cy={100 + (i % 3) * 55} r="2" fill="rgba(220,232,226,0.45)" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default NetworkField;
