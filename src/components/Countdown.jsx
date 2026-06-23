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
    { key: "d", label: "DAYS" },
    { key: "h", label: "HRS" },
    { key: "m", label: "MIN" },
    { key: "s", label: "SEC" },
];

export default function Countdown() {
    const [t, setT] = useState(getTimeLeft());

    useEffect(() => {
        const id = setInterval(() => setT(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div style={{
            background: "rgba(255,255,255,0.95)",
            border: "1px solid rgba(109,40,217,0.14)",
            borderRadius: 18,
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            boxShadow: "0 4px 32px rgba(109,40,217,0.08), 0 1px 4px rgba(0,0,0,0.04)",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Gradient top accent line */}
            <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: 3,
                background: "linear-gradient(90deg, #6d28d9, #ec4899, #3b82f6)",
                borderRadius: "18px 18px 0 0",
            }} />

            {/* Label */}
            <div style={{
                fontSize: "0.58rem",
                letterSpacing: "0.14em",
                color: "#94a3b8",
                fontWeight: 700,
                lineHeight: 1.7,
                whiteSpace: "nowrap",
                textTransform: "uppercase",
            }}>
                Registration<br />Closes In
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 36, background: "rgba(109,40,217,0.1)" }} />

            {/* Numbers with unit labels */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {units.map((u, i) => (
                    <div key={u.key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                            <span style={{
                                fontSize: "2.1rem",
                                fontWeight: 800,
                                background: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                letterSpacing: "-0.06em",
                                lineHeight: 1,
                                fontVariantNumeric: "tabular-nums",
                                minWidth: 52,
                                textAlign: "center",
                            }}>
                                {pad(t[u.key])}
                            </span>
                            <span style={{
                                fontSize: "0.46rem",
                                letterSpacing: "0.14em",
                                color: "#94a3b8",
                                fontWeight: 700,
                                textTransform: "uppercase",
                            }}>
                                {u.label}
                            </span>
                        </div>
                        {i < units.length - 1 && (
                            <span style={{
                                fontSize: "1.4rem",
                                color: "#cbd5e1",
                                lineHeight: 1,
                                paddingBottom: 14,
                                fontWeight: 300,
                            }}>:</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 36, background: "rgba(109,40,217,0.1)" }} />

            {/* Date label */}
            <div style={{
                fontSize: "0.62rem",
                color: "#64748b",
                textAlign: "center",
                lineHeight: 1.6,
                whiteSpace: "nowrap",
            }}>
                <span style={{
                    display: "block",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    color: "#1e293b",
                    letterSpacing: "-0.01em",
                }}>Aug 2026</span>
                <span style={{ color: "#94a3b8", fontSize: "0.55rem", letterSpacing: "0.08em" }}>DEADLINE</span>
            </div>
        </div>
    );
}