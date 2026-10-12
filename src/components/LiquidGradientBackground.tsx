import { useEffect, useRef, useState } from "react";

type LiquidGradientBackgroundProps = {
  className?: string;
};

/**
 * Hero-only WebGL liquid gradient — TouchTexture + GLSL from the
 * Interactive Liquid Gradient Three.js demo, CTS orange/navy palette.
 */
const LiquidGradientBackground = ({ className = "" }: LiquidGradientBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    const boot = async () => {
      const THREE = await import("three");
      const { TouchTexture } = await import("@/lib/touch-texture");
      if (disposed || !containerRef.current) return;

      const host = containerRef.current;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let raf = 0;
      let renderer: import("three").WebGLRenderer | null = null;
      let material: import("three").ShaderMaterial | null = null;
      let mesh: import("three").Mesh | null = null;
      let touchTexture: InstanceType<typeof TouchTexture> | null = null;
      let clock: import("three").Clock | null = null;

      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        });
      } catch {
        if (!disposed) setWebglFailed(true);
        return;
      }

      if (!renderer.getContext()) {
        renderer.dispose();
        if (!disposed) setWebglFailed(true);
        return;
      }

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0e27);
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      renderer.setClearColor(0x0a0e27, 1);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      renderer.domElement.style.pointerEvents = "none";
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      touchTexture = new TouchTexture();
      clock = new THREE.Clock();

      // CTS brand: #f15a29 orange + navy — demo scheme-1 motion settings
      const orange = new THREE.Vector3(0.945, 0.353, 0.161);
      const navy = new THREE.Vector3(0.039, 0.055, 0.153);
      const petrol = new THREE.Vector3(0.1, 0.28, 0.34);

      material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uColor1: { value: orange.clone() },
          uColor2: { value: navy.clone() },
          uColor3: { value: orange.clone() },
          uColor4: { value: petrol.clone() },
          uColor5: { value: orange.clone() },
          uColor6: { value: navy.clone() },
          uSpeed: { value: reduceMotion ? 0.35 : 1.5 },
          uIntensity: { value: 1.8 },
          uTouchTexture: { value: touchTexture.texture },
          uGrainIntensity: { value: 0.08 },
          uZoom: { value: 1.0 },
          uDarkNavy: { value: navy.clone() },
          uGradientSize: { value: 0.45 },
          uGradientCount: { value: 12.0 },
          uColor1Weight: { value: 0.5 },
          uColor2Weight: { value: 1.8 },
          uDistortion: { value: reduceMotion ? 0.15 : 0.8 },
        },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;

          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          uniform vec3 uColor4;
          uniform vec3 uColor5;
          uniform vec3 uColor6;
          uniform float uSpeed;
          uniform float uIntensity;
          uniform sampler2D uTouchTexture;
          uniform float uGrainIntensity;
          uniform float uZoom;
          uniform vec3 uDarkNavy;
          uniform float uGradientSize;
          uniform float uGradientCount;
          uniform float uColor1Weight;
          uniform float uColor2Weight;
          uniform float uDistortion;

          varying vec2 vUv;

          #define PI 3.14159265359

          float grain(vec2 uv, float time) {
            vec2 grainUv = uv * uResolution * 0.5;
            float grainValue = fract(sin(dot(grainUv + time, vec2(12.9898, 78.233))) * 43758.5453);
            return grainValue * 2.0 - 1.0;
          }

          vec3 getGradientColor(vec2 uv, float time) {
            float gradientRadius = uGradientSize;

            vec2 center1 = vec2(
              0.5 + sin(time * uSpeed * 0.4) * 0.4,
              0.5 + cos(time * uSpeed * 0.5) * 0.4
            );
            vec2 center2 = vec2(
              0.5 + cos(time * uSpeed * 0.6) * 0.5,
              0.5 + sin(time * uSpeed * 0.45) * 0.5
            );
            vec2 center3 = vec2(
              0.5 + sin(time * uSpeed * 0.35) * 0.45,
              0.5 + cos(time * uSpeed * 0.55) * 0.45
            );
            vec2 center4 = vec2(
              0.5 + cos(time * uSpeed * 0.5) * 0.4,
              0.5 + sin(time * uSpeed * 0.4) * 0.4
            );
            vec2 center5 = vec2(
              0.5 + sin(time * uSpeed * 0.7) * 0.35,
              0.5 + cos(time * uSpeed * 0.6) * 0.35
            );
            vec2 center6 = vec2(
              0.5 + cos(time * uSpeed * 0.45) * 0.5,
              0.5 + sin(time * uSpeed * 0.65) * 0.5
            );
            vec2 center7 = vec2(
              0.5 + sin(time * uSpeed * 0.55) * 0.38,
              0.5 + cos(time * uSpeed * 0.48) * 0.42
            );
            vec2 center8 = vec2(
              0.5 + cos(time * uSpeed * 0.65) * 0.36,
              0.5 + sin(time * uSpeed * 0.52) * 0.44
            );
            vec2 center9 = vec2(
              0.5 + sin(time * uSpeed * 0.42) * 0.41,
              0.5 + cos(time * uSpeed * 0.58) * 0.39
            );
            vec2 center10 = vec2(
              0.5 + cos(time * uSpeed * 0.48) * 0.37,
              0.5 + sin(time * uSpeed * 0.62) * 0.43
            );
            vec2 center11 = vec2(
              0.5 + sin(time * uSpeed * 0.68) * 0.33,
              0.5 + cos(time * uSpeed * 0.44) * 0.46
            );
            vec2 center12 = vec2(
              0.5 + cos(time * uSpeed * 0.38) * 0.39,
              0.5 + sin(time * uSpeed * 0.56) * 0.41
            );

            float dist1 = length(uv - center1);
            float dist2 = length(uv - center2);
            float dist3 = length(uv - center3);
            float dist4 = length(uv - center4);
            float dist5 = length(uv - center5);
            float dist6 = length(uv - center6);
            float dist7 = length(uv - center7);
            float dist8 = length(uv - center8);
            float dist9 = length(uv - center9);
            float dist10 = length(uv - center10);
            float dist11 = length(uv - center11);
            float dist12 = length(uv - center12);

            float influence1 = 1.0 - smoothstep(0.0, gradientRadius, dist1);
            float influence2 = 1.0 - smoothstep(0.0, gradientRadius, dist2);
            float influence3 = 1.0 - smoothstep(0.0, gradientRadius, dist3);
            float influence4 = 1.0 - smoothstep(0.0, gradientRadius, dist4);
            float influence5 = 1.0 - smoothstep(0.0, gradientRadius, dist5);
            float influence6 = 1.0 - smoothstep(0.0, gradientRadius, dist6);
            float influence7 = 1.0 - smoothstep(0.0, gradientRadius, dist7);
            float influence8 = 1.0 - smoothstep(0.0, gradientRadius, dist8);
            float influence9 = 1.0 - smoothstep(0.0, gradientRadius, dist9);
            float influence10 = 1.0 - smoothstep(0.0, gradientRadius, dist10);
            float influence11 = 1.0 - smoothstep(0.0, gradientRadius, dist11);
            float influence12 = 1.0 - smoothstep(0.0, gradientRadius, dist12);

            vec2 rotatedUv1 = uv - 0.5;
            float angle1 = time * uSpeed * 0.15;
            rotatedUv1 = vec2(
              rotatedUv1.x * cos(angle1) - rotatedUv1.y * sin(angle1),
              rotatedUv1.x * sin(angle1) + rotatedUv1.y * cos(angle1)
            );
            rotatedUv1 += 0.5;

            vec2 rotatedUv2 = uv - 0.5;
            float angle2 = -time * uSpeed * 0.12;
            rotatedUv2 = vec2(
              rotatedUv2.x * cos(angle2) - rotatedUv2.y * sin(angle2),
              rotatedUv2.x * sin(angle2) + rotatedUv2.y * cos(angle2)
            );
            rotatedUv2 += 0.5;

            float radialGradient1 = length(rotatedUv1 - 0.5);
            float radialGradient2 = length(rotatedUv2 - 0.5);
            float radialInfluence1 = 1.0 - smoothstep(0.0, 0.8, radialGradient1);
            float radialInfluence2 = 1.0 - smoothstep(0.0, 0.8, radialGradient2);

            vec3 color = vec3(0.0);
            color += uColor1 * influence1 * (0.55 + 0.45 * sin(time * uSpeed)) * uColor1Weight;
            color += uColor2 * influence2 * (0.55 + 0.45 * cos(time * uSpeed * 1.2)) * uColor2Weight;
            color += uColor3 * influence3 * (0.55 + 0.45 * sin(time * uSpeed * 0.8)) * uColor1Weight;
            color += uColor4 * influence4 * (0.55 + 0.45 * cos(time * uSpeed * 1.3)) * uColor2Weight;
            color += uColor5 * influence5 * (0.55 + 0.45 * sin(time * uSpeed * 1.1)) * uColor1Weight;
            color += uColor6 * influence6 * (0.55 + 0.45 * cos(time * uSpeed * 0.9)) * uColor2Weight;

            if (uGradientCount > 6.0) {
              color += uColor1 * influence7 * (0.55 + 0.45 * sin(time * uSpeed * 1.4)) * uColor1Weight;
              color += uColor2 * influence8 * (0.55 + 0.45 * cos(time * uSpeed * 1.5)) * uColor2Weight;
              color += uColor3 * influence9 * (0.55 + 0.45 * sin(time * uSpeed * 1.6)) * uColor1Weight;
              color += uColor4 * influence10 * (0.55 + 0.45 * cos(time * uSpeed * 1.7)) * uColor2Weight;
            }
            if (uGradientCount > 10.0) {
              color += uColor5 * influence11 * (0.55 + 0.45 * sin(time * uSpeed * 1.8)) * uColor1Weight;
              color += uColor6 * influence12 * (0.55 + 0.45 * cos(time * uSpeed * 1.9)) * uColor2Weight;
            }

            color += mix(uColor1, uColor3, radialInfluence1) * 0.45 * uColor1Weight;
            color += mix(uColor2, uColor4, radialInfluence2) * 0.4 * uColor2Weight;

            color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;

            float luminance = dot(color, vec3(0.299, 0.587, 0.114));
            color = mix(vec3(luminance), color, 1.35);
            color = pow(color, vec3(0.92));

            float brightness1 = length(color);
            float mixFactor1 = max(brightness1 * 1.2, 0.15);
            color = mix(uDarkNavy, color, mixFactor1);

            float maxBrightness = 1.0;
            float brightness = length(color);
            if (brightness > maxBrightness) {
              color = color * (maxBrightness / brightness);
            }

            return color;
          }

          void main() {
            vec2 uv = vUv;

            vec4 touchTex = texture2D(uTouchTexture, uv);
            float vx = -(touchTex.r * 2.0 - 1.0);
            float vy = -(touchTex.g * 2.0 - 1.0);
            float intensity = touchTex.b;
            uv.x += vx * uDistortion * intensity;
            uv.y += vy * uDistortion * intensity;

            vec2 center = vec2(0.5);
            float dist = length(uv - center);
            float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * intensity;
            float wave = sin(dist * 15.0 - uTime * 2.0) * 0.03 * intensity;
            uv += vec2(ripple + wave);

            vec3 color = getGradientColor(uv, uTime);

            float grainValue = grain(uv, uTime);
            color += grainValue * uGrainIntensity;

            float timeShift = uTime * 0.5;
            color.r += sin(timeShift) * 0.02;
            color.g += cos(timeShift * 1.4) * 0.02;
            color.b += sin(timeShift * 1.2) * 0.02;

            float brightness2 = length(color);
            float mixFactor2 = max(brightness2 * 1.2, 0.15);
            color = mix(uDarkNavy, color, mixFactor2);

            color = clamp(color, vec3(0.0), vec3(1.0));

            float maxBrightness = 1.0;
            float brightness = length(color);
            if (brightness > maxBrightness) {
              color = color * (maxBrightness / brightness);
            }

            gl_FragColor = vec4(color, 1.0);
          }
        `,
        depthTest: false,
        depthWrite: false,
      });

      mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);

      const setSize = () => {
        if (!renderer || !material || !host) return;
        const width = host.clientWidth || window.innerWidth;
        const height = host.clientHeight || window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        renderer.setPixelRatio(dpr);
        renderer.setSize(width, height, false);
        material.uniforms.uResolution.value.set(width, height);
      };

      setSize();

      const normalizePointer = (clientX: number, clientY: number) => {
        const rect = host.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return null;
        return {
          x: (clientX - rect.left) / rect.width,
          y: 1 - (clientY - rect.top) / rect.height,
        };
      };

      const onPointerMove = (event: PointerEvent) => {
        if (reduceMotion || !touchTexture) return;
        const point = normalizePointer(event.clientX, event.clientY);
        if (!point) return;
        // Only trail while pointer is over the hero
        if (point.x < 0 || point.x > 1 || point.y < 0 || point.y > 1) return;
        touchTexture.addTouch(point);
      };

      const onTouchMove = (event: TouchEvent) => {
        if (reduceMotion || !touchTexture || !event.touches[0]) return;
        const touch = event.touches[0];
        const point = normalizePointer(touch.clientX, touch.clientY);
        if (!point) return;
        if (point.x < 0 || point.x > 1 || point.y < 0 || point.y > 1) return;
        touchTexture.addTouch(point);
      };

      const onResize = () => setSize();

      const tick = () => {
        if (disposed || !renderer || !material || !clock || !touchTexture) return;

        if (document.visibilityState !== "hidden") {
          const delta = Math.min(clock.getDelta(), 0.1);
          material.uniforms.uTime.value += delta;
          touchTexture.update();
          renderer.render(scene, camera);
        }

        raf = window.requestAnimationFrame(tick);
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("resize", onResize);
      raf = window.requestAnimationFrame(tick);

      cleanup = () => {
        window.cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("resize", onResize);

        if (mesh) {
          mesh.geometry.dispose();
          scene.remove(mesh);
        }
        material?.dispose();
        touchTexture?.dispose();
        if (renderer) {
          renderer.dispose();
          renderer.forceContextLoss();
          if (renderer.domElement.parentNode === host) {
            host.removeChild(renderer.domElement);
          }
        }
      };
    };

    void boot();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {!webglFailed ? (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      ) : (
        <div className="absolute inset-0 pointer-events-none liquid-gradient-fallback" />
      )}
    </div>
  );
};

export default LiquidGradientBackground;
