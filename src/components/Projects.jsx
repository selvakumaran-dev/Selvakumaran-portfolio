import React from "react";

const Projects = () => (
  <section
    id="projects"
    className="py-12 w-full premium-glass animate-glow text-center rounded-3xl p-6 md:p-12 group"
    data-aos="fade-up"
  >
    <div className="relative inline-block mb-10">
      <h2 className="text-4xl font-bold text-amber-100 pb-2 heading-shine">
        Projects
      </h2>
      <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_12px_#fbbf24] shadow-[0_0_6px_#fbbf24]" />
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <a
        href="#project1-details"
        className="p-4 rounded-xl premium-glass animate-glow hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-1 text-amber-100">
          TrackX
        </h3>
        <p className="text-gray-400 text-sm">
          Enterprise Real-Time Bus Tracking
        </p>
      </a>

      <a
        href="#project2-details"
        className="p-4 rounded-xl premium-glass animate-glow hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-1 text-amber-100">
          CodeClash
        </h3>
        <p className="text-gray-400 text-sm">
          Enterprise-Grade Competitive Coding Platform.
        </p>
      </a>

      <a
        href="#project3-details"
        className="p-4 rounded-xl premium-glass animate-glow hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-1 text-amber-100">
          OpenAux
        </h3>
        <p className="text-gray-400 text-sm">
          Location-verified collaborative music platform
        </p>
      </a>

      <a
        href="#project4-details"
        className="p-4 rounded-xl premium-glass animate-glow hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition duration-300"
      >
        <h3>Secure Era
        </h3>
        <p className="text-gray-400 text-sm">
          P2P Encrypted File Sharing
        </p>
      </a>

      <a
        href="#project5-details"
        className="p-4 rounded-xl premium-glass animate-glow hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-1 text-amber-100">
          Nexora
        </h3>
        <p className="text-gray-400 text-sm">
          A premium, high-security professional networking platform designed for institutional communities.
        </p>
      </a>

      <a
        href="#project6-details"
        className="p-4 rounded-xl premium-glass animate-glow hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-1 text-amber-100">
          Urban Slot
        </h3>
        <p className="text-gray-400 text-sm">
          Urban Parking Marketplace
        </p>
      </a>

      <a
        href="#project7-details"
        className="p-4 rounded-xl premium-glass animate-glow hover:shadow-[0_0_25px_rgba(251,191,36,0.8)] transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-1 text-amber-100">
          VeeConnect
        </h3>
        <p className="text-gray-400 text-sm">
          Secure P2P Video Conferencing
        </p>
      </a>
    </div>
  </section>
);

export default Projects;
