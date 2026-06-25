import { useState } from "react";

const ruleGroups = [
    {
        id: 1,
        title: "Team Eligibility Requirements",
        color: "#a78bfa",
        rules: [
            "All team members must be from the same university/institution.",
            "All team members must belong to the same academic batch/year.",
            "Team members may be from different faculties/departments.",
            "Team size: Minimum 1, Maximum 4 members only.",
            "Each participant may register for only one team.",
            "Individual participants without a team will be assigned to a team by the organizers, subject to availability and preferences of competitors.",
            "Each team must nominate a Team Leader who will serve as the primary contact between the team and the organizing committee.",
            "Team names must be professional and must not contain offensive, discriminatory, or inappropriate language.",
            "Participants found to be registered in more than one team will be disqualified from all related registrations.",
        ],
    },
    {
        id: 2,
        title: "Participant Requirements",
        color: "#60a5fa",
        rules: [
            "All participants must be currently enrolled undergraduate students.",
            "A valid student ID card may be requested for verification at any stage of the competition.",
            "All contact details provided — email address and phone number — must be valid, active, and monitored regularly.",
        ],
    },
    {
        id: 3,
        title: "Registration Rules",
        color: "#34d399",
        rules: [
            "Registration must be submitted by the official Team Leader. For individual entries, the participant is responsible for their own registration.",
            "All team details must be final at the time of submission.",
            "No changes to team members or team name will be permitted after the registration deadline, unless approved in writing by the organizing committee.",
            "Late, incomplete, or incorrect submissions will not be considered.",
            "Submission of the registration form does not guarantee participation. Final acceptance is subject to eligibility verification.",
        ],
    },
    {
        id: 4,
        title: "Fair Play & Code of Conduct",
        color: "#f472b6",
        rules: [
            "Duplicate registrations will result in immediate disqualification of all related teams.",
            "Plagiarism, unauthorized collaboration, or any form of academic dishonesty will lead to immediate removal from the competition.",
            "Teams must work independently. No external team merging, coaching, or unauthorized assistance is permitted during the competition.",
            "All participants are expected to maintain professionalism, respect, and integrity throughout the event.",
            "The decision of the organizing committee/judges will be final and binding in all matters.",
        ],
    },
    {
        id: 5,
        title: "General Rules",
        color: "#fbbf24",
        rules: [
            "Participants must adhere to all deadlines communicated by the organizers.",
            "The organizing committee reserves the right to modify rules, schedules, or event format with prior notice.",
            "Any disputes must be submitted in writing to the organizing committee within 24 hours of the incident.",
            "The organizing committee reserves the right to disqualify any team for misconduct or violation of rules.",
        ],
    },
    {
        id: 6,
        title: "Final Agreement",
        color: "#a78bfa",
        rules: [
            "The organizing committee reserves the right to verify eligibility and authenticity of information at any stage of the competition.",
            "By submitting this registration form, all team members confirm that the information provided is accurate and agree to abide by these rules, regulations, and the final decisions of the organizers.",
        ],
    },
];

function RuleCard({ group, index }) {
    const [open, setOpen] = useState(index === 0);

    return (
        <div
            className="rules-card"
            style={{
                "--card-color": group.color,
                animationDelay: `${index * 80}ms`,
            }}
        >
            <button
                className={`rules-card-header ${open ? "rules-card-header--open" : ""}`}
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                <div className="rules-card-header-left">
                    {/* The icon span has been completely removed from here */}
                    <div>
                        <span className="rules-card-num">0{group.id}</span>
                        <h3 className="rules-card-title">{group.title}</h3>
                    </div>
                </div>
                <span className={`rules-card-chevron ${open ? "rules-card-chevron--open" : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>

            <div className={`rules-card-body ${open ? "rules-card-body--open" : ""}`}>
                <ul className="rules-list">
                    {group.rules.map((rule, i) => (
                        <li key={i} className="rules-list-item">
                            <span className="rules-bullet" style={{ background: group.color }} />
                            <span>{rule}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Rules() {
    return (
        <section id="rules" className="section max-md:px-4">
            {/* Header */}
            <p className="section-label">COMPETITION RULES</p>
            <h2 className="section-title">
                Rules &amp; <span className="gradient-text">Guidelines</span>
            </h2>
            <p className="section-sub">
                Please read all competition rules carefully before registering.
                Adherence to these guidelines ensures a fair and transparent event for all participants.
            </p>

            {/* Notice banner */}
            <div className="rules-notice">
                <span className="rules-notice-icon">⚠️</span>
                <p className="rules-notice-text">
                    Violation of any of the rules below may result in immediate disqualification.
                    The organizing committee's decision is final in all matters.
                </p>
            </div>

            {/* Accordion cards */}
            <div className="rules-grid">
                {ruleGroups.map((group, i) => (
                    <RuleCard key={group.id} group={group} index={i} />
                ))}
            </div>
        </section>
    );
}
