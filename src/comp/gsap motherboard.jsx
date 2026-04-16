import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function MotherboardAnimation({
  stroke = "#00ff99",
  strokeWidth = 2.5,
  backgroundColor = "#0a0a0a",
  dotColor = "#00ffff",
  dotSize = 3.5,
  dotSpeed = 1.8,
  maxLines = 35,
  grid = 38,
  turns = 28,
  startX = 80,
  startY = 80,
  loopDelay = 0.35,
}) {
  const svgRef = useRef(null);
  const linesRef = useRef([]);
  const dotsRef = useRef([]);
  const loopTimerRef = useRef(null);
  const aliveRef = useRef(true);

  useGSAP(
    () => {
      const svg = svgRef.current;
      if (!svg) return;

      const NS = "http://www.w3.org/2000/svg";

      const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ];

      const clearScene = () => {
        linesRef.current.forEach((el) => el?.remove());
        dotsRef.current.forEach((el) => el?.remove());
        linesRef.current = [];
        dotsRef.current = [];
      };

      const scheduleNext = () => {
        if (!aliveRef.current) return;
        loopTimerRef.current?.kill();

        loopTimerRef.current = gsap.delayedCall(loopDelay, () => {
          if (aliveRef.current) runWave();
        });
      };

      const runWave = () => {
        if (!aliveRef.current) return;

        clearScene();

        const rect = svg.getBoundingClientRect();
        const WIDTH = rect.width;
        const HEIGHT = rect.height;

        // 🔥 IMPORTANT: make SVG match real space
        svg.setAttribute("viewBox", `0 0 ${WIDTH} ${HEIGHT}`);

        let lineCount = 0;
        let active = 0;
        let done = false;

        const maybeRestart = () => {
          if (done && active === 0) scheduleNext();
        };

        const generate = (x, y, dir, stepsLeft) => {
          if (!aliveRef.current) return;
          if (stepsLeft <= 0 || lineCount >= maxLines) return;

          const step = Math.floor(Math.random() * 3) + 2;
          let [dx, dy] = directions[dir];

          let x2 = x + dx * step * grid;
          let y2 = y + dy * step * grid;

          const out =
            x2 < 0 || x2 > WIDTH || y2 < 0 || y2 > HEIGHT;

          if (out) {
            dir = (dir + (Math.random() > 0.5 ? 1 : 3)) % 4;
            [dx, dy] = directions[dir];
            x2 = x + dx * step * grid;
            y2 = y + dy * step * grid;
          }

          x2 = Math.max(0, Math.min(WIDTH, x2));
          y2 = Math.max(0, Math.min(HEIGHT, y2));

          const path = document.createElementNS(NS, "path");
          path.setAttribute("d", `M ${x} ${y} L ${x2} ${y2}`);
          path.setAttribute("stroke", stroke);
          path.setAttribute("stroke-width", strokeWidth);
          path.setAttribute("fill", "none");
          path.setAttribute("stroke-linecap", "round");

          svg.appendChild(path);
          linesRef.current.push(path);

          lineCount++;
          active++;

          const length = path.getTotalLength();
          path.style.strokeDasharray = length;
          path.style.strokeDashoffset = length;

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 0.6 + Math.random() * 0.5,
            ease: "power2.out",
            onComplete: () => {
              const dot = document.createElementNS(NS, "circle");
              dot.setAttribute("r", dotSize);
              dot.setAttribute("fill", dotColor);

              svg.appendChild(dot);
              dotsRef.current.push(dot);

              const obj = { p: 0 };

              gsap.to(obj, {
                p: 1,
                duration: dotSpeed + Math.random() * 0.6,
                ease: "none",
                onUpdate: () => {
                  const pt = path.getPointAtLength(obj.p * length);
                  dot.setAttribute("cx", pt.x);
                  dot.setAttribute("cy", pt.y);
                },
                onComplete: () => {
                  gsap.to([path, dot], {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                      path.remove();
                      dot.remove();

                      active--;
                      maybeRestart();
                    },
                  });
                },
              });
            },
          });

          if (stepsLeft > 1) {
            generate(x2, y2, dir, stepsLeft - 1);
          }

          if (Math.random() > 0.4 && stepsLeft > 3) {
            const branch = (dir + (Math.random() > 0.5 ? 1 : 3)) % 4;
            generate(x2, y2, branch, Math.floor(stepsLeft * 0.7));
          }
        };

        generate(startX, startY, 0, turns);

        queueMicrotask(() => {
          done = true;
          maybeRestart();
        });
      };

      runWave();

      return () => {
        aliveRef.current = false;
        loopTimerRef.current?.kill();

        linesRef.current.forEach((el) => el?.remove());
        dotsRef.current.forEach((el) => el?.remove());
      };
    },
    [stroke, strokeWidth, dotColor, dotSize, dotSpeed, maxLines, grid, turns]
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: backgroundColor,
      }}
    >
      <svg
        ref={svgRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
