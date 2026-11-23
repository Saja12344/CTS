/** Deterministic value-noise helpers for frame-stable motion */

const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

const hash2 = (x: number, y: number, seed: number) => {
  let n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453123;
  return n - Math.floor(n);
};

export const valueNoise2D = (x: number, y: number, seed = 1) => {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const xf = fade(x - x0);
  const yf = fade(y - y0);
  const n00 = hash2(x0, y0, seed);
  const n10 = hash2(x0 + 1, y0, seed);
  const n01 = hash2(x0, y0 + 1, seed);
  const n11 = hash2(x0 + 1, y0 + 1, seed);
  const nx0 = n00 * (1 - xf) + n10 * xf;
  const nx1 = n01 * (1 - xf) + n11 * xf;
  return nx0 * (1 - yf) + nx1 * yf;
};

export const fbm = (
  x: number,
  y: number,
  seed = 1,
  octaves = 4,
): number => {
  let amp = 0.5;
  let freq = 1;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise2D(x * freq, y * freq, seed + i * 17);
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
};
