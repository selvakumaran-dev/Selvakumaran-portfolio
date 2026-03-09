import React from "react";

const ProjectDetailsVeeConnect = ({ handleReload }) => (
    <section id="project7-details" className="w-full scroll-mt-20 group">
        <div className="flex flex-col md:flex-row items-center gap-10 premium-glass animate-glow p-6 md:p-12 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition duration-300">
            {/* Image (Left) */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                    src="veeconnect.PNG"
                    className="w-full max-w-[400px] aspect-[4/3] object-contain rounded-xl border border-amber-300/20 shadow-2xl shadow-amber-900/40"
                    alt="VeeConnect Project Screenshot"
                />
            </div>

            {/* Text (Right) */}
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-amber-100">
                    VeeConnect
                </h3>
                <p className="text-gray-300 mb-6">
                    VeeConnect is a robust, privacy-focused video conferencing application built with a Mesh P2P Architecture. It allows users to connect directly via their browsers without intermediate media servers or data storage, ensuring maximum privacy and minimal latency.

                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a
                        href="https://veeconnect-client.onrender.com"
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

export default ProjectDetailsVeeConnect;
