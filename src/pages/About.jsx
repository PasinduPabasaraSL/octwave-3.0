import React from "react";

const cards = [
    {
        num: "01",
        title: "Industry-linked learning",
        desc: "Expert-led workshops bridging academic theory with live tools and real industry use cases you can apply immediately.",
    },
    {
        num: "02",
        title: "Two-stage competition",
        desc: "Online Kaggle preliminary followed by a physical final at University of Moratuwa with an industry judging panel.",
    },
    {
        num: "03",
        title: "Open to all undergrads",
        desc: "Government and private institution students across Sri Lanka. Register solo or as a team.",
    },
    {
        num: "04",
        title: "Recognition + awards",
        desc: "Industry-endorsed certificates, prizes, and professional network access for top performers.",
    },
];

export default function About() {
    return (
        <section id="about" className="section">
            <p className="section-label">ABOUT THE EVENT</p>
            <h2 className="section-title">
                Built for the <span className="gradient-text">next generation</span>
                <br />of AI engineers
            </h2>
            <p className="section-sub">
                An AI/ML competition platform connecting universities to industry — through
                structured workshops, a Kaggle challenge, and a live final with real industry datasets.
            </p>

            <div className="about-cards-grid">
                {cards.map((card) => (
                    <div key={card.num} className="about-card-grid-item">
                        <div className="about-card-grid-icon" />
                        <span className="about-card-grid-num">{card.num}</span>
                        <h3 className="about-card-grid-title">{card.title}</h3>
                        <p className="about-card-grid-desc">{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}