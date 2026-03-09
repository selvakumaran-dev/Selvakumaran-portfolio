import React from "react";

const ProjectDetailsChatbot = ({ handleReload }) => (
  <section id="project5-details" className="w-full scroll-mt-20 group">
    <div className="flex flex-col md:flex-row items-center gap-10 premium-glass animate-glow p-6 md:p-12 rounded-3xl shadow-lg transition duration-300">
      {/* Image (Left) */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="TrackX.PNG"
          className="w-full max-w-[400px] aspect-[4/3] object-contain rounded-xl border border-amber-300/20 shadow-2xl shadow-amber-900/40"
          alt="TrackX"
        />
      </div>

      {/* Text (Right) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 text-amber-100 heading-shine">TrackX</h3>
        <p className="text-gray-300 mb-6 font-medium">
          TrackX Platinum is a production-hardened, enterprise-grade multi-tenant bus tracking platform. Designed specifically for large educational institutions, it offers a high-performance telemetry engine, robust organizational isolation, and a premium "Warm Sage" user interface.


        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="https://trackx-client.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-amber-300 text-black rounded-lg hover:bg-amber-400 transition font-semibold"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectDetailsChatbot;
