
"use client";

import { useEffect } from "react";

export default function DeepBlueShadowCursor() {
  useEffect(() => {
    // Only enable on devices with a fine pointer
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!mediaQuery.matches || reducedMotion.matches) return;

    const cursor = document.createElement("div");

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "180px",
      height: "180px",
      pointerEvents: "none",
      zIndex: "9999",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(0, 80, 255, 0.16) 0%, rgba(0, 50, 200, 0.08) 40%, transparent 70%)",
      filter: "blur(12px)",
      transform: "translate3d(-50%, -50%, 0)",
      opacity: "0",
      willChange: "transform",
      transition: "opacity 200ms ease",
    });

    document.body.appendChild(cursor);

    let animationFrame;
    let mouseX = -200;
    let mouseY = -200;
    let currentX = mouseX;
    let currentY = mouseY;
    let isVisible = false;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      cursor.style.transform = `translate3d(${currentX - 90}px, ${
        currentY - 90
      }px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      isVisible = false;
      cursor.style.opacity = "0";
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);

      cancelAnimationFrame(animationFrame);

      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return null;
}
