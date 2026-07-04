import { Mail, Copyright } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Get in Touch.</h1>
      <h1 className="text-2xl font-medium p-4 text-center text-secondary">
        Have a project in mind or just want to say hello?
      </h1>
      <div className="mt-4 flex flex-row place-content-center gap-x-2">
        <Mail className="text-blue-400" />
        <h1 className="text-2xl font-medium relative bottom-1">
          rifatging@gmail.com
        </h1>
      </div>
      <div className="mt-6 flex flex-row gap-x-2 justify-between p-6">
        <button className="text-lg p-4 bg-zinc-800 rounded-xl hover:scale-105 hover:text-blue-400">
          <a
            href={`${import.meta.env.VITE_GITHUB_LINK}`}
            target="_blank"
            rel="noopener , noreferer"
          >
            Github
          </a>
        </button>
        <button className="text-lg p-4 bg-zinc-800 rounded-xl hover:scale-105 hover:text-blue-400">
          <a
            href={`${import.meta.env.VITE_LINKEDIN_LINK}`}
            target="_blank"
            rel="noopener , noreferer"
          >
            LinkedIn
          </a>
        </button>
        <button className="text-lg p-4 bg-zinc-800 rounded-xl hover:scale-105 hover:text-blue-400">
          <a
            href={`${import.meta.env.VITE_INSTAGRAM_LINK}`}
            target="_blank"
            rel="noopener , noreferer"
          >
            Instagram
          </a>
        </button>
      </div>
      <div className="mt-10 flex flex-row text-xl text-gray-400 gap-x-2 p-4">
        <Copyright />
        <h1>REYAN. 2026</h1>
        <h1>All rights reserved</h1>
      </div>
    </div>
  );
};

export default Contact;
