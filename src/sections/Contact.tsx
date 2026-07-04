import { Copyright, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="mx-auto mt-16 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        Get in Touch.
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-base text-secondary sm:text-lg md:text-xl">
        Have a project in mind or just want to say hello? I'd love to hear from
        you.
      </p>

      {/* Email */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Mail className="h-6 w-6 text-blue-400" />

        <a
          href="mailto:rifatging@gmail.com"
          className="break-all text-lg font-medium transition-colors hover:text-blue-400 sm:text-xl"
        >
          rifatging@gmail.com
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={import.meta.env.VITE_GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-zinc-800 px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:text-blue-400"
        >
          GitHub
        </a>

        <a
          href={import.meta.env.VITE_LINKEDIN_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-zinc-800 px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:text-blue-400"
        >
          LinkedIn
        </a>

        <a
          href={import.meta.env.VITE_INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-zinc-800 px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:text-blue-400"
        >
          Instagram
        </a>
      </div>

      {/* Footer */}
      <div className="mt-16 flex flex-col items-center justify-center gap-2 border-t border-white/10 py-6 text-center text-sm text-gray-400 sm:flex-row sm:gap-3 sm:text-base">
        <Copyright className="h-4 w-4" />
        <span>REYAN. 2026</span>
        <span className="hidden sm:inline">•</span>
        <span>All rights reserved.</span>
      </div>
    </section>
  );
};

export default Contact;
