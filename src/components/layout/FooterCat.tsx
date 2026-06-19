import { useEffect, useRef, useState } from "react";
import "./FooterCat.css";

const COLS = 4;
const ROWS = 2;
const FPS = 8;
const WALK_DURATION = 2.4;
const SIT_DURATION = 1.7;
const CYCLE_DURATION = (WALK_DURATION + SIT_DURATION) * 2;

const WALK_RIGHT = [
  [0, 3],
  [1, 0],
];
const WALK_LEFT = [
  [1, 1],
  [1, 2],
];
const SIT = [[0, 0]];

// Returns how far across (0–1) and which sprite frame to show at time t.
function getPose(t: number, elapsed: number) {
  const walkingRight = t < WALK_DURATION;
  const walkingLeft =
    t > WALK_DURATION + SIT_DURATION && t < WALK_DURATION * 2 + SIT_DURATION;
  const frames = walkingRight ? WALK_RIGHT : walkingLeft ? WALK_LEFT : SIT;
  const [row, col] = frames[Math.floor(elapsed * FPS) % frames.length];

  if (walkingRight) return { x: t / WALK_DURATION, row, col };
  if (t < WALK_DURATION + SIT_DURATION) return { x: 1, row, col };
  if (walkingLeft) {
    return {
      x: 1 - (t - WALK_DURATION - SIT_DURATION) / WALK_DURATION,
      row,
      col,
    };
  }
  return { x: 0, row, col };
}

function FooterCat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTime = useRef<number | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [img, setImg] = useState<HTMLImageElement | null>(null);

  const catHeight = Math.round(size.height * 0.67);
  const catWidth = Math.round(catHeight * 0.75);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setImg(image);
    image.src = "/Footer-Cat.png";
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width: Math.round(width), height: Math.round(height) });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !img || !size.width) return;

    const maxX = size.width - catWidth;
    const frameW = img.naturalWidth / COLS;
    const frameH = img.naturalHeight / ROWS;
    let rafId: number;

    const tick = (now: number) => {
      if (startTime.current === null) {
        startTime.current = now;
      }

      const elapsed = (now - startTime.current) / 1000;
      const { x, row, col } = getPose(elapsed % CYCLE_DURATION, elapsed);

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, size.width, catHeight);
      ctx.drawImage(
        img,
        col * frameW,
        row * frameH,
        frameW,
        frameH,
        Math.round(x * maxX),
        0,
        catWidth,
        catHeight,
      );

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [img, size, catWidth, catHeight]);

  return (
    <div className="footer-cat-container" ref={containerRef} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="footer-cat-canvas"
        width={size.width}
        height={catHeight}
      />
    </div>
  );
}

export default FooterCat;
