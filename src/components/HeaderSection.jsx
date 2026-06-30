import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const HeaderSection = () => {
  return (
    <div className="md:px-20 px-8 md:pt-10 pt-6">
      <div className="grid md:grid-cols-4 md:gap-10 gap-8 text-center md:text-start">
        <div className="md:col-span-3">
          <h1 className="md:text-6xl text-3xl font-bold">Sriram Kannan V</h1>
          <p className="font-OpenSans mt-1 text-slate-800">
            Aspiring Full Stack Developer
          </p>
        </div>

        <div className="font-OpenSans space-y-1.5 md:mx-0">
          <p className="text-sm font-semibold">Tiruchirappalli - 620012</p>
          <p className="flex gap-2 items-center text-sm font-semibold">
            +91 80721 58192
          </p>
          <p className="text-sm font-semibold">sriramkannanv@gmail.com</p>

          <div className="flex gap-4 justify-center">
            <p className="cursor-pointer font-semibold hover:text-blue-600 transition-all">
              <a
                className="flex items-center gap-0.5"
                href="https://www.linkedin.com/in/sriram-kannan-v1101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-5 w-5"
                  src="/LinkedIn-Icon.png"
                  alt="linkedinIcon"
                />
                LinkedIn
              </a>
            </p>
            <p className="cursor-pointer font-semibold hover:text-blue-600 transition-all">
              <a
                className="flex items-center gap-0.5"
                href="https://github.com/SriramKannanV"
                target="_blank"
              >
                <img
                  className="h-5 w-5"
                  src="/GitHub-Icon.png"
                  alt="gitHubIcon"
                />
                GitHub
              </a>
            </p>
            <p className="cursor-pointer font-semibold hover:text-blue-600 transition-all">
              <a
                className="flex items-center gap-1"
                href="https://sriramkannanportfolio.netlify.app/"
                target="_blank"
              >
                <img
                  className="h-5 w-5"
                  src="/Portfolio-Icon.png"
                  alt="portfolioIcon"
                />
                Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
