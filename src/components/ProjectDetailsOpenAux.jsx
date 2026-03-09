import React from "react";

const ProjectDetailsHealth = ({ handleReload }) => (
    <section id="project6-details" className="w-full scroll-mt-20 group">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 premium-glass animate-glow p-6 md:p-12 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition duration-300">
            {/* Image (Left) */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                    src="OpenAux.PNG"
                    className="w-full max-w-[400px] aspect-[4/3] object-contain rounded-xl border border-amber-300/20 shadow-2xl shadow-amber-900/40"
                    alt="OpenAux"
                />
            </div>

            {/* Text (Right) */}
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-amber-100">
                    OpenAux
                </h3>
                <p className="text-gray-300 mb-6">
                    OpenAux is a location-verified collaborative music platform that democratizes playlist control at venues, parties, and events. Hosts create rooms with GPS-based geofenced boundaries, while guests within a 200-meter radius can search, add, and vote on songs in real-time. The most popular songs automatically play next, creating a truly democratic music experience secured by location validation.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a
                        href="https://openaux-client.onrender.com"
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

export default ProjectDetailsHealth;
