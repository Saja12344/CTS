import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { PointerEvent, useRef } from "react";
import logoMark from "@/assets/logo-mark-light.png";
import { cinematicEase } from "@/lib/motion";

type LogoMarkProps = {
  className?: string;
  interactive?: boolean;
};

/**
 * Art-directed Core Tech mark:
 * 1) Geometric fragments (ribbon + stem) assemble — idea → product
 * 2) Crisp official mark crossfades in to lock brand silhouette
 * 3) Subtle pointer-driven tilt + light (no idle spin)
 */
const LogoMark = ({ className = "", interactive = true }: LogoMarkProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 140, damping: 20, mass: 0.35 });
  const springY = useSpring(my, { stiffness: 140, damping: 20, mass: 0.35 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-9, 9]);
  const glareX = useTransform(springX, [-0.5, 0.5], [28, 72]);
  const glareY = useTransform(springY, [-0.5, 0.5], [22, 68]);
  const shine = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22), transparent 42%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      className={`relative aspect-square w-full max-w-[440px] ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ perspective: 1000 }}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-[-20%] rounded-full bg-[radial-gradient(circle_at_42%_38%,rgba(230,230,228,0.14),transparent_60%)]" />

      <motion.div
        className="relative h-full w-full will-change-transform"
        style={
          reduceMotion || !interactive
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" as const }
        }
      >
        <motion.svg
          viewBox="0 0 240 240"
          className="absolute inset-0 h-full w-full"
          initial={reduceMotion ? false : { opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: cinematicEase, delay: reduceMotion ? 0 : 1.15 }}
        >
          <defs>
            <linearGradient id="ct-metal" x1="36" y1="24" x2="204" y2="214" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F4F4F2" />
              <stop offset="45%" stopColor="#C5C6C3" />
              <stop offset="100%" stopColor="#6F7177" />
            </linearGradient>
            <linearGradient id="ct-fold" x1="100" y1="72" x2="140" y2="126" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A0A1A5" />
              <stop offset="100%" stopColor="#55575D" />
            </linearGradient>
          </defs>

          <ellipse cx="120" cy="216" rx="58" ry="9" fill="rgba(0,0,0,0.4)" />

          <motion.g
            initial={reduceMotion ? false : { x: -56, y: 42, opacity: 0, rotate: -14 }}
            animate={{ x: 0, y: 0, opacity: reduceMotion ? 0 : 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: cinematicEase, delay: 0.05 }}
            style={{ transformOrigin: "110px 130px" }}
          >
            <path
              d="M172 54 H116 C72 54 46 84 46 128 C46 172 72 202 116 202 V172 C90 172 74 154 74 128 C74 102 90 84 116 84 H154 Z"
              fill="url(#ct-metal)"
            />
            <path d="M116 84 H152 L134 112 H102 Z" fill="url(#ct-fold)" opacity="0.9" />
            <path d="M154 84 L172 54 L182 66 L162 96 Z" fill="#AEAFB3" opacity="0.55" />
          </motion.g>

          <motion.g
            initial={reduceMotion ? false : { x: 48, y: -50, opacity: 0, rotate: 16 }}
            animate={{ x: 0, y: 0, opacity: reduceMotion ? 0 : 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: cinematicEase, delay: 0.2 }}
            style={{ transformOrigin: "152px 140px" }}
          >
            <path
              d="M130 98 L160 60 C168 70 174 84 174 100 V168 C174 184 162 194 146 194 C130 194 118 184 118 168 V122 C118 110 122 102 130 98 Z"
              fill="url(#ct-metal)"
            />
            <path d="M130 98 L160 60 L170 72 L140 108 Z" fill="#B7B8BC" opacity="0.48" />
          </motion.g>
        </motion.svg>

        <motion.div
          className="absolute inset-[6%] flex items-center justify-center"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: cinematicEase, delay: reduceMotion ? 0 : 0.9 }}
        >
          {/* lighten drops the baked black plate on dark hero */}
          <img
            src={logoMark}
            alt=""
            className="h-full w-full object-contain"
            draggable={false}
          />
          {!reduceMotion ? (
            <motion.div
              className="pointer-events-none absolute inset-0 mix-blend-soft-light"
              style={{ backgroundImage: shine }}
            />
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogoMark;
