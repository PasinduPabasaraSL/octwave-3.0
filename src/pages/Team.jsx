import React from "react";
import Member1 from "../assets/team/Manushi.jpeg"
import Member2 from "../assets/team/Hiruna.jpeg"
import Member3 from "../assets/team/Lakmana.jpeg"

const cochairs = [
  {
    photo: Member1,
    name: "Manushi Gunasekara",
    role: "Co-chair - OctWave 3.0",
  },
  {
    photo: Member2,
    name: "Hirun Jayalath",
    role: "Co-chair - OctWave 3.0",
  },
  {
    photo: Member3,
    name: "Lakmana Thabrew",
    role: "Co-chair - OctWave 3.0",
  },
];

function MemberCard({ photo, name, role, isLast }) {
  return (
    <div
        className={`
            flex flex-col items-center justify-center text-center
            rounded-2xl
            border border-purple-200
            bg-white
            shadow-sm
            px-10 py-12
            min-h-[180px]
            transition-all duration-300
            hover:-translate-y-2
            hover:border-purple-400
            hover:shadow-md
            max-md:px-4 max-md:py-6 max-md:min-h-[160px]
            ${isLast ? "max-md:col-span-2" : ""}
        `}
    >
        {/* Avatar */}
        <div className="mb-6 h-24 w-24 overflow-hidden rounded-full ring-2 ring-purple-300 flex-shrink-0 max-md:mb-3 max-md:h-16 max-md:w-16">
            <img
                src={photo}
                alt={name}
                className="h-full w-full object-cover object-center"
            />
        </div>

        <p className="mb-1 text-base font-semibold text-slate-800 max-md:text-xs">
            {name}
        </p>

        <p className="text-sm text-slate-500 max-md:text-[10px]">
            {role}
        </p>
    </div>
  );
}

export default function Team() {
    return (
        <section id="team" className="section max-md:px-6">
            <p className="section-label">OUR TEAM</p>
            <h2 className="section-title">
                The people <span className="gradient-text">behind OctWave</span>
            </h2>
            <p className="section-sub">
                IEEE IAS Student Branch Chapter - University of Moratuwa.
            </p>

            {/* max-md:grid-cols-2 !important forces your CSS repeat(3, 1fr) down to 2 columns on mobile */}
            <div className="team-grid max-md:!grid-cols-2 max-md:gap-4 max-md:mt-10 max-md:items-stretch">
                {cochairs.map((m, index) => (
                    <MemberCard 
                        key={index} 
                        {...m} 
                        isLast={index === cochairs.length - 1} 
                    />
                ))}
            </div>
        </section>
    );
}