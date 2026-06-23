export default function HeroBackground() {
    return (
        <div style={{
            position: "absolute", inset: 0, overflow: "hidden",
            pointerEvents: "none", zIndex: 0,
        }}>
            {/* Animated gradient blobs */}
            <div className="hb-blob hb-blob-1" />
            <div className="hb-blob hb-blob-2" />
            <div className="hb-blob hb-blob-3" />
            <div className="hb-blob hb-blob-4" />

            {/* Dot grid overlay */}
            <div className="hb-dot-grid" />

            {/* Bottom vignette fade */}
            <div className="hb-vignette" />
        </div>
    );
}
