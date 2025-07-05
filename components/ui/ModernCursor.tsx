"use client";
import { useEffect, useRef } from "react";

const ModernCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px solid #fff",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition: "border 0.2s, background 0.2s",
          willChange: "transform, border, background"
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
          willChange: "transform, background"
        }}
      />
    </>
  );
};

export default ModernCursor;
