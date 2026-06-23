import { useEffect, useRef } from "react";

export default function HeroBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let W = canvas.width = canvas.offsetWidth;
        let H = canvas.height = canvas.offsetHeight;

        // Dot grid settings
        const cols = 22;
        const rows = 16;
        const dots = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Perspective: compress vertically near centre-top, expand near bottom
                const xFrac = c / (cols - 1);         // 0..1
                const yFrac = r / (rows - 1);          // 0..1

                // Vanishing point at (0.5, 0.08)
                const vx = 0.5;
                const vy = 0.08;

                const perspScale = 0.18 + yFrac * 0.82;  // 0.18 (far) → 1.0 (near)

                const x = vx + (xFrac - vx) * perspScale;
                const y = vy + (yFrac - vy) * perspScale;

                dots.push({
                    xFrac: x,
                    yFrac: y,
                    baseR: 0.8 + perspScale * 1.6,    // farther = smaller dot
                    alpha: 0.06 + perspScale * 0.22,  // farther = more transparent
                    pulse: Math.random() * Math.PI * 2, // phase offset
                    speed: 0.3 + Math.random() * 0.4,
                });
            }
        }

        let raf;
        let t = 0;

        function draw() {
            ctx.clearRect(0, 0, W, H);

            t += 0.012;

            dots.forEach(d => {
                const r = d.baseR + Math.sin(t * d.speed + d.pulse) * 0.35;
                const a = d.alpha + Math.sin(t * d.speed + d.pulse + 1) * 0.04;

                const px = d.xFrac * W;
                const py = d.yFrac * H;

                ctx.beginPath();
                ctx.arc(px, py, Math.max(0.4, r), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(109,40,217,${Math.max(0, a)})`;
                ctx.fill();
            });

            raf = requestAnimationFrame(draw);
        }

        draw();

        const onResize = () => {
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <>
            {/* Soft gradient blobs — static, no animation */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute",
                    width: 640, height: 640,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)",
                    top: "-15%", left: "-8%",
                    filter: "blur(48px)",
                }} />
                <div style={{
                    position: "absolute",
                    width: 520, height: 520,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
                    top: "10%", right: "-8%",
                    filter: "blur(56px)",
                }} />
                <div style={{
                    position: "absolute",
                    width: 420, height: 420,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
                    bottom: "5%", left: "25%",
                    filter: "blur(48px)",
                }} />
            </div>

            {/* Dotted perspective grid canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    pointerEvents: "none",
                    opacity: 0.9,
                }}
            />


        </>
    );
}
