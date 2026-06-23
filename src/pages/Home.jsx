import { useEffect, useState } from "react";
import Button from "../components/Button";
import Countdown from "../components/Countdown";
import HeroBackground from "../components/HeroBackground";

const stats = [
    { value: "04", label: "WORKSHOPS" },
    { value: "10", label: "FINALISTS" },
    { value: "06", label: "WEEKS"     },
    { value: "SL", label: "ALL UNIS"  },
];

export default function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const base = {
        transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
        willChange: "opacity, transform",
    };

    const hidden = { opacity: 0, transform: "translateY(24px)" };
    const shown  = { opacity: 1, transform: "translateY(0)"    };

    const item = (delay = 0) => ({
        ...base,
        ...(visible ? shown : hidden),
        transitionDelay: `${delay}ms`,
    });

    return (
        <section
            id="home"
            className="max-md:py-16 max-md:px-4"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "100px 24px 60px",
                overflow: "hidden",
            }}
        >
            <HeroBackground />

            {/* Pill badge */}
            <div style={{
                ...base,
                ...(visible
                    ? { opacity: 1, transform: "translateY(0)" }
                    : { opacity: 0, transform: "translateY(-12px)" }),
                transitionDelay: "0ms",
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: "0.7rem", color: "#6d28d9",
                background: "rgba(109,40,217,0.07)",
                border: "1px solid rgba(109,40,217,0.2)",
                borderRadius: 999, padding: "5px 16px",
                marginBottom: 20,
                letterSpacing: "0.02em",
                zIndex: 5, position: "relative",
            }}>
                <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#7c3aed", display: "inline-block",
                    flexShrink: 0,
                    boxShadow: "0 0 6px rgba(109,40,217,0.5)",
                    animation: "pulseDot 2s ease-in-out infinite",
                }} />
                IEEE IAS · University of Moratuwa · 2026
            </div>

            {/* OctWave 3.0 brand name */}
            <div style={{
                ...base,
                ...(visible ? shown : hidden),
                transitionDelay: "80ms",
                position: "relative", zIndex: 5,
                marginBottom: 8,
            }}>
                <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    background: "linear-gradient(90deg, #7c3aed, #ec4899, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}>
                    OctWave 3.0
                </span>
            </div>

            {/* Hero text block */}
            <div style={{ position: "relative", zIndex: 5, lineHeight: 1.08 }}>

                {/* "Where Data Meets" row */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1.5em",
                    marginBottom: "0.05em",
                }}>
                    {/* "Where Data" */}
                    <div style={{
                        ...item(150),
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                        letterSpacing: "-0.03em",
                        color: "#fff",
                    }}>
                        Where Data
                    </div>

                    {/* "Meets" — outlined stroke */}
                    <div style={{
                        ...item(280),
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                        letterSpacing: "-0.03em",
                        color: "transparent",
                        WebkitTextStroke: "1.5px #7c3aed",
                        animation: visible ? "shimmer 3s ease-in-out 1s infinite" : "none",
                    }}>
                        Meets
                    </div>
                </div>

                {/* "Intelligence." — gradient */}
                <div style={{
                    ...item(420),
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.5rem, 6vw, 7rem)",
                    letterSpacing: "-0.03em",
                    background: "linear-gradient(90deg, #7c3aed 0%, #ec4899 55%, #3b82f6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                }}>
                    Intelligence
                </div>
            </div>

            {/* Subtitle */}
            <p
                className="max-md:text-sm max-md:px-2"
                style={{
                    ...item(580),
                    color: "#e2e8f0",
                    maxWidth: 500,
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    position: "relative", zIndex: 5,
                    margin: "14px 0 0",
                }}
            >
                Sri Lanka's premier undergraduate AI &amp; Machine Learning competition.
                Build real solutions. Learn from industry experts.
                Compete on the biggest stage.
            </p>

            {/* Buttons */}
            <div
                className="max-md:flex-col max-md:w-full max-md:px-6 max-md:gap-3"
                style={{
                    ...item(720),
                    display: "flex", gap: 10,
                    position: "relative", zIndex: 5,
                    marginTop: 24,
                }}
            >
                <Button className="max-md:w-full" href="https://docs.google.com/forms/d/1ZPlthFi4BBmi5SfvBX8zi4gPnmiqraxHCg_edHcZgXE/edit?usp=sharing_eip_se_dm&ts=6a38efb4">Register your team</Button>
                <Button variant="outline" className="max-md:w-full">Explore the event</Button>
            </div>

            {/* Stats row */}
            <div
                className="max-md:grid max-md:grid-cols-2 max-md:w-full max-md:max-w-xs max-md:gap-px max-md:bg-purple-500/20"
                style={{
                    ...item(860),
                    display: "flex",
                    gap: 1,
                    border: "1px solid rgba(139,92,246,0.2)",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "rgba(139,92,246,0.18)",
                    position: "relative", zIndex: 5,
                    marginTop: 28,
                    marginBottom: 18,
                }}
            >
                {stats.map((s, i) => (
                    <div
                        key={s.label}
                        className="max-md:w-full max-md:min-w-0 max-md:py-4"
                        style={{
                            ...base,
                            ...(visible ? shown : hidden),
                            transitionDelay: `${860 + i * 80}ms`,
                            display: "flex", flexDirection: "column",
                            alignItems: "center", justifyContent: "center",
                            gap: 3, padding: "10px 20px",
                            background: "rgba(255,255,255,0.03)",
                            minWidth: 76,
                            transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${860 + i * 80}ms,
                                         transform 0.8s cubic-bezier(.16,1,.3,1) ${860 + i * 80}ms,
                                         background 0.2s`,
                            cursor: "default",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(139,92,246,0.1)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
                    >
                        <span style={{
                            fontSize: "1.2rem", fontWeight: 700,
                            color: "#fff", letterSpacing: "-0.04em", lineHeight: 1,
                        }}>{s.value}</span>
                        <span style={{
                            fontSize: "0.48rem", letterSpacing: "0.12em",
                            color: "#94a3b8", fontWeight: 600, marginTop: 2,
                        }}>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Countdown */}
            <div
                className="max-md:px-2 max-md:scale-95"
                style={{
                    ...item(1080),
                    width: "100%", maxWidth: 580,
                    position: "relative", zIndex: 5,
                    marginTop: 10,
                }}
            >
                <Countdown />
            </div>
        </section>
    );
}