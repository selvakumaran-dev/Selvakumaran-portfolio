import React from "react";

const ProjectDetailsResume = ({ handleReload }) => (
    <section id="project4-details" className="w-full scroll-mt-20 group">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 premium-glass animate-glow p-6 md:p-12 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition duration-300">
            {/* Image (Right) */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                    src="Nexora.png"
                    className="w-full max-w-[400px] aspect-[4/3] object-contain rounded-xl border border-amber-300/20 shadow-2xl shadow-amber-900/40"
                    alt="Nexora"
                />
            </div>

            {/* Text (Left) */}
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-amber-100">
                    Nexora
                </h3>
                <p className="text-gray-300 mb-6">
                    Nexora is a state-of-the-art full-stack professional networking platform tailored for educational and corporate institutions. It focuses on creating secure, high-quality connections within dedicated organizational boundaries. By leveraging intelligent matching and real-time communication, Nexora transforms a simple directory into a vibrant, collaborative ecosystem.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a
                        href="#"
                        onClick={handleReload}
                        className="px-6 py-2 bg-amber-300 text-black rounded-lg hover:bg-amber-400 transition font-semibold"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default ProjectDetailsResume;
