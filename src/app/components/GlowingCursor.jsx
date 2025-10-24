"use client";
import { useEffect } from "react";

export default function DeepBlueShadowCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "0px",
      height: "0px",
      pointerEvents: "none",
      zIndex: 9999,
      transform: "translate(-50%, -50%)",
      boxShadow: "0 0 40px 20px rgba(0, 50, 200, 0.6)", // deep blue shadow
      borderRadius: "50%",
      transition: "top 0.05s ease, left 0.05s ease",
    });

    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}
