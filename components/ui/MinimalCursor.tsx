"use client";
import { useEffect, useRef } from "react";

const MinimalCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
      }
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.8)",
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        transition: "background 0.2s, transform 0.08s cubic-bezier(.4,1.7,.7,1)",
        willChange: "transform, background"
      }}
    />
  );
};

export default MinimalCursor;
