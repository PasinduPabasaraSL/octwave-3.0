import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-01T00:00:00");

function pad(n) {
    return String(Math.max(0, n)).padStart(2, "0");
}

function getTimeLeft() {
    const diff = TARGET - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s };
}

const units = [
    { key: "d" },
    { key: "h" },
    { key: "m" },
    { key: "s" },
];

export default function Countdown() {
    const [t, setT] = useState(getTimeLeft());

    useEffect(() => {
        const id = setInterval(() => setT(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div 
            className="max-md:flex-col max-md:py-5" 
            style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(139,92,246,0.15)",
                borderRadius: 14,
                padding: "18px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(12px, 3vw, 32px)", // Shrinks gap smoothly on medium screens
            }}
        >
            {/* Label */}
            <div 
                className="max-md:text-center" 
                style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "#475569",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    whiteSpace: "nowrap",
                }}
            >
                REGISTRATION<br />CLOSES IN
            </div>

            {/* Numbers */}
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                {units.map((u, i) => (
                    <div key={u.key} style={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <span style={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            color: "#fff",
                            letterSpacing: "-0.05em",
                            minWidth: 48,
                            textAlign: "center",
                            lineHeight: 1,
                            fontVariantNumeric: "tabular-nums",
                        }}>
                            {pad(t[u.key])}
                        </span>
                        {i < units.length - 1 && (
                            <span style={{
                                fontSize: "1.6rem",
                                color: "#334155",
                                lineHeight: 1,
                                paddingBottom: 2,
                            }}>:</span>
                        )}
                    </div>
                ))}
            </div>

            {/* "August 2026" */}
            <div style={{
                fontSize: "0.68rem",
                color: "#475569",
                textAlign: "center",
                lineHeight: 1.5,
                fontStyle: "italic",
                whiteSpace: "nowrap",
            }}>
                August<br />2026
            </div>
        </div>
    );
}