import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LumaSpin } from "./luma-spin";

export function GlobalLoader({ delay = 120 }) {
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), delay);
    return () => clearTimeout(timer);
  }, [location, delay]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      <LumaSpin />
    </div>
  );
}