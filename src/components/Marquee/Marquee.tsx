import { useEffect, useRef } from "react";

import "./Marquee.css";

interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number;
}

export function Marquee({ items, separator = "✦", speed = 60 }: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    const wrap = (value: number) => {
      const half = halfWidthRef.current;
      if (!half) return value;
      let v = value % half;
      if (v > 0) v -= half;
      return v;
    };

    const apply = (value: number) => {
      offsetRef.current = wrap(value);
      track.style.transform = `translateX(${offsetRef.current}px)`;
    };

    let frameId: number;
    let lastTime = performance.now();

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      if (!draggingRef.current && !prefersReduced) {
        apply(offsetRef.current - speed * dt);
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartOffsetRef.current = offsetRef.current;
      track.setPointerCapture(e.pointerId);
      track.classList.add("dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const delta = e.clientX - dragStartXRef.current;
      apply(dragStartOffsetRef.current + delta);
    };

    const endDrag = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      track.releasePointerCapture(e.pointerId);
      track.classList.remove("dragging");
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
    };
  }, [speed, content]);

  return (
    <div className="marquee">
      <div ref={trackRef} className="marqueeTrack">
        <span className="marqueeItem">{content}</span>
        <span className="marqueeItem" aria-hidden="true">
          {content}
        </span>
        <span className="marqueeItem" aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  );
}
