import React, { useState } from "react";

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // You can add multiple certifications to this array
    const certifications = [
        {
            id: 1,
            title: "NPTEL ONLINE CERTIFICATION",
            issuer: "Deep Learning IIT Ropar",
            year: "2025",
            image: "NPTEL.jpg", 
        },
        {
            id: 2,
            title: "Full Stack Engineer Intern",
            issuer: "Vdart Academy",
            year: "2025",
            image: "Vdart.jpg",
        }
    ];

    return (
        <section
            id="certifications"
            className="w-full p-6 md:p-12 premium-glass animate-glow rounded-3xl group"
            data-aos="fade-up"
        >
            <div className="relative inline-block mb-10">
                <h2 className="text-4xl font-bold text-amber-200 tracking-wide heading-shine pb-2">
                    Certifications
                </h2>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_12px_#fbbf24] shadow-[0_0_6px_#fbbf24]" />
            </div>

            <div className="relative pl-8 space-y-12">
                {/* Custom Gradient Line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-300 to-transparent shadow-[0_0_10px_rgba(251,191,36,0.5)]" />

                {certifications.map((cert) => (
                    <div key={cert.id} className="relative group z-10">
                        <div className="absolute -left-[2.15rem] top-8 w-4 h-4 rounded-full bg-amber-300 border-2 border-black animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.8)] z-10" />
                        <div
                            className="premium-glass animate-glow p-8 rounded-3xl transition duration-300 hover:scale-[1.02] cursor-pointer cursor-hover-effect"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <h3 className="text-xl font-bold text-amber-200 underline decoration-amber-400/40 underline-offset-4 hover:text-amber-300 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-amber-100">{cert.issuer}</p>
                            <p className="text-sm text-gray-400">{cert.year}</p>
                            <p className="mt-2 text-amber-300 text-sm font-semibold flex items-center gap-2">
                                <span>📄</span> Click to view certificate
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fullscreen Image Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-[12000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setSelectedCert(null)}
                    style={{ cursor: "auto" }}
                >
                    <div
                        className="relative premium-glass p-2 md:p-6 rounded-3xl max-w-5xl w-full flex flex-col items-center animate-glow"
                        onClick={(e) => e.stopPropagation()}
                        style={{ cursor: "auto" }}
                    >
                        <button
                            className="absolute top-2 right-2 md:top-4 md:right-4 text-amber-200 hover:text-white hover:bg-red-500/20 text-2xl font-bold w-10 h-10 premium-glass rounded-full flex items-center justify-center z-10 transition-colors"
                            onClick={() => setSelectedCert(null)}
                        >
                            ×
                        </button>
                        <h3 className="text-xl md:text-3xl font-bold text-amber-300 mb-4 px-8 text-center pt-8 md:pt-4">
                            {selectedCert.title}
                        </h3>
                        <div className="w-full bg-black/60 rounded-2xl overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[60vh] border border-amber-900/30">
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="max-w-full max-h-[70vh] object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    // Fallback if image not found
                                    e.target.src = "https://via.placeholder.com/800x600/1a1a1a/fbbf24?text=Certificate+Image+Not+Found+(Upload+to+public+folder)";
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
