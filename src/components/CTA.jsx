import Button from "./Button";

export default function CTA() {
    const registerUrl = "https://docs.google.com/forms/d/1ZPlthFi4BBmi5SfvBX8zi4gPnmiqraxHCg_edHcZgXE/edit?usp=sharing_eip_se_dm&ts=6a38efb4";

    return (
        <section className="cta-section">
            <h2 className="cta-title" style={{ paddingLeft: "8px" }}> 
                Ready to make <span className="gradient-text">your wave?</span>
            </h2>
            <p className="cta-sub" style={{ paddingLeft: "8px" }}>
                Join Sri Lanka's premier undergraduate AI &amp; Machine Learning hackathon. Show the world what you can build.
            </p>
            <div className="cta-btns">
                <Button href={registerUrl}>Register your team</Button>
                <Button variant="outline" href="#about">Explore details</Button>
            </div>
            
            <div className="cta-socials">
                <a href="https://www.facebook.com/share/1986hbaq9z" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V2h-3a5 5 0 00-5 5v1z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/ieeeiasuom" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .52 1 1.3v4.82h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37h3z" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
