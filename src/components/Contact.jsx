import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 w-full flex flex-col items-center">
      <div className="w-full md:w-3/4 lg:w-1/2 premium-glass animate-glow p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-100 border-b-2 border-amber-300/70 pb-2 inline-block text-center heading-shine">
          Let's Connect
        </h2>

        {/* Contact Icons */}
        <div className="flex justify-center gap-8 mt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=918668102797&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-gray-900/80 hover:bg-amber-200 transition duration-300 group hover:scale-110"
            title="WhatsApp"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              className="w-8 h-8 group-hover:brightness-0 transition duration-300"
              alt="WhatsApp"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/selvakumaran-dev/"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-gray-900/80 hover:bg-amber-200 transition duration-300 group hover:scale-110"
            title="LinkedIn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
              className="w-8 h-8 group-hover:brightness-0 transition duration-300"
              alt="LinkedIn"
            />
          </a>

          <a
            href="mailto:selvakumaran.s.dev@gmail.com"
            className="p-4 rounded-full bg-gray-900/80 hover:bg-amber-200 transition duration-300 group hover:scale-110"
            title="Email"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              className="w-8 h-8 group-hover:brightness-0 transition duration-300"
              alt="Email"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
