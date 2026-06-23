import React from "react";

const weeks = [
    {
        wk: "WK 01",
        title: "Introductory session + Workshop 1",
        desc: "AI/ML industry trends · Intro to Machine Learning",
        active: true,
    },
    {
        wk: "WK 02",
        title: "Workshops 2 & 3",
        desc: "ML models · Time-series data · Data engineering pipelines",
        active: false,
    },
    {
        wk: "WK 03",
        title: "Workshop 4 + Team registration",
        desc: "Kaggle platform intro · Register your team online",
        active: false,
    },
    {
        wk: "WK 04",
        title: "Preliminary round — online",
        desc: "Kaggle competition · Model + report submission · Top 10 shortlisted",
        active: false,
    },
    {
        wk: "WK 05-06",
        title: "Final round — physical at UOM",
        desc: "Real-world challenge · Live presentations · Awards ceremony",
        active: false,
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="section">
            <p className="section-label">TIMELINE</p>
            <h2 className="section-title">
                Your <span className="gradient-text">6-week</span> journey
            </h2>
            <p className="section-sub">
                From your first workshop to stepping on the final stage.
            </p>

            <div className="timeline-list">
                {weeks.map((item, i) => (
                    <div key={i} className="timeline-item">
                        <div className="timeline-left">
                            <span className="timeline-wk">{item.wk}</span>
                            <div className={`timeline-dot ${item.active ? "active" : ""}`} />
                            {i < weeks.length - 1 && <div className="timeline-connector" />}
                        </div>
                        <div>
                            <h3 className="timeline-item-title">{item.title}</h3>
                            <p className="timeline-item-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}