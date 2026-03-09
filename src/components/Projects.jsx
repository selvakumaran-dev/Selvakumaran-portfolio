import React from "react";

const Projects = () => {
  const projects = [
    { title: "TrackX", description: "Enterprise Real-Time Bus Tracking", img: "/TrackX.PNG", link: "https://trackx-client.onrender.com" },
    { title: "CodeClash", description: "Enterprise-Grade Competitive Coding Platform", img: "/CodeClash.PNG", link: "https://codeclash-client.onrender.com" },
    { title: "OpenAux", description: "Location-verified collaborative music platform", img: "/OpenAux.PNG", link: "https://openaux-client.onrender.com" },
    { title: "Secure Era", description: "P2P Encrypted File Sharing", img: "/Secure Era.PNG", link: "https://secure-era-client.onrender.com" },
    { title: "Nexora", description: "High-security professional networking", img: "/Nexora.png", link: "#" },
    { title: "Urban Slot", description: "Urban Parking Marketplace", img: "/UrbanSlot.PNG", link: "https://urbanslot-web.onrender.com" },
    { title: "VeeConnect", description: "Secure P2P Video Conferencing", img: "/veeconnect.PNG", link: "https://veeconnect-client.onrender.com" },
  ];

  // We duplicate the array to allow for seamless infinite scrolling
  const marqueeProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="py-12 w-full premium-glass animate-glow text-center rounded-3xl p-6 md:p-12 group overflow-hidden"
      data-aos="fade-up"
    >
      <div className="relative inline-block mb-10">
        <h2 className="text-4xl font-bold text-amber-100 pb-2 heading-shine">
          Projects Overview
        </h2>
        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_12px_#fbbf24] shadow-[0_0_6px_#fbbf24]" />
      </div>

      <div className="relative w-full overflow-hidden mt-6 group/marquee cursor-pointer">
        {/* Soft fading edges for that sleek premium UI */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* The scrolling container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-4 py-4">
          {marqueeProjects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target={proj.link !== "#" ? "_blank" : "_self"}
              rel={proj.link !== "#" ? "noopener noreferrer" : ""}
              className="relative w-64 md:w-80 flex-shrink-0 flex flex-col p-4 rounded-2xl premium-glass hover:shadow-[0_0_8px_rgba(251,191,36,0.6)] hover:-translate-y-2 transition-all duration-300 group/card"
            >
              <div className="w-full h-36 md:h-44 bg-black/60 rounded-xl overflow-hidden mb-4 border border-amber-900/30 relative">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/card:opacity-100">
                  <span className="px-4 py-2 bg-amber-300 text-black font-bold rounded-lg text-sm shadow-md">
                    {proj.link !== "#" ? "🔗 Live Demo" : "👁 View Project"}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 text-amber-100 text-left">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm text-left line-clamp-2">
                {proj.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); /* -50% to account for doubled array, -12px to adjust for gaps */ }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Make the scroll smooth and pause on touch for mobile users */
        @media (hover: none) {
          .animate-marquee:active {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
