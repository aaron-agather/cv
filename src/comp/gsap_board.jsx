import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function buildPaths(width, height, lineCount) {
  const paths = [];

  for (let i = 0; i < lineCount; i++) {
    const edge = Math.floor(Math.random() * 4);

    let x = 0;
    let y = 0;

    if (edge === 0) {
      x = rand(0, width);
      y = 0;
    } else if (edge === 1) {
      x = width;
      y = rand(0, height);
    } else if (edge === 2) {
      x = rand(0, width);
      y = height;
    } else {
      x = 0;
      y = rand(0, height);
    }

    const points = [{ x, y }];
    const segments = Math.floor(rand(3, 6));

    for (let j = 0; j < segments; j++) {
      if (j % 2 === 0) {
        x = rand(width * 0.1, width * 0.9);
      } else {
        y = rand(height * 0.1, height * 0.9);
      }

      points.push({ x, y });
    }

    if (Math.random() > 0.5) {
      x += Math.random() > 0.5 ? 40 : -40;
    } else {
      y += Math.random() > 0.5 ? 40 : -40;
    }

    x = clamp(x, 0, width);
    y = clamp(y, 0, height);

    points.push({ x, y });
    paths.push(points);
  }

  return paths;
}

function pointsToPath(points) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
}

export default function CircuitBoardBackground({
  lineCount = 20,
  color = "rgba(255,255,255,0.85)",
  backgroundLine = "rgba(255,255,255,0.08)",
  speed = 1,
  opacity = 1,
  glowStrength = 3,
  glowOpacity = 0.8,
  className = "",
}) {
  const wrapperRef = useRef(null);
  const svgRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  const paths = useMemo(() => {
    if (!size.width || !size.height) return [];
    return buildPaths(size.width, size.height, lineCount);
  }, [size.width, size.height, lineCount]);

  useGSAP(
    () => {
      if (!paths.length) return;

      const pathEls = gsap.utils.toArray(".circuit-path");
      const hasGlow = glowStrength > 0;
      const glowEls = hasGlow ? gsap.utils.toArray(".circuit-glow") : [];

      pathEls.forEach((path, i) => {
        const glowPath = glowEls[i];
        const length = path.getTotalLength();
        const targets = hasGlow && glowPath ? [path, glowPath] : [path];

        gsap.set(targets, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.timeline({
          repeat: -1,
          delay: i * 0.05,
        }).to(targets, {
          strokeDashoffset: 0,
          duration: rand(1, 2) / speed,
          ease: "power2.inOut",
        });
      });
    },
    { scope: svgRef, dependencies: [paths, speed, glowStrength] }
  );

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${size.width} ${size.height}`}
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          opacity,
        }}
      >
        {glowStrength > 0 && (
          <defs>
            <filter id="circuit-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={glowStrength} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        )}

        {paths.map((points, i) => {
          const d = pointsToPath(points);

          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke={backgroundLine}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {glowStrength > 0 && (
                <path
                  className="circuit-glow"
                  d={d}
                  fill="none"
                  stroke={color}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#circuit-blur)"
                  opacity={glowOpacity}
                />
              )}

              <path
                className="circuit-path"
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}