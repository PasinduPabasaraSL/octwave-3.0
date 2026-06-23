import { useEffect, useState } from "react";

const symbols = ["{", "</>", "( )", "[ ]", "}"];

export default function Loader({ onDone }) {
  const [p, setP] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // Cycle through symbols
    const symIv = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % symbols.length);
    }, 300);

    // Progress bar
    const iv = setInterval(() => {
      setP((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(iv);
          clearInterval(symIv);
          setTimeout(onDone, 500);
          return 100;
        }
        return next;
      });
    }, 80);

    return () => {
      clearInterval(iv);
      clearInterval(symIv);
    };
  }, []);

  return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-[999]"
           style={{ background: "#f8f9ff" }}>

        {/* Animated symbols row */}
        <div className="flex gap-5 mb-10">
          {symbols.map((sym, i) => (
              <span
                  key={sym}
                  className="font-mono text-lg transition-all duration-200"
                  style={{
                    color: i === activeIdx ? "#6d28d9" : "#cbd5e1",
                    transform: i === activeIdx ? "scale(1.2)" : "scale(1)",
                    display: "inline-block",
                    textShadow: i === activeIdx ? "0 0 12px rgba(109,40,217,0.4)" : "none",
                  }}
              >
            {sym}
          </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-[220px] h-[2px] bg-gray-900 overflow-hidden rounded">
          <div
              className="h-full transition-all duration-100 rounded"
              style={{
                width: `${p}%`,
                background: "linear-gradient(90deg, #7c3aed, #22d3ee)",
              }}
          />
        </div>

        {/* Percentage */}
        <div className="text-xs mt-3 font-mono" style={{ color: "#94a3b8" }}>
          {Math.round(p)}%
        </div>
      </div>
  );
}