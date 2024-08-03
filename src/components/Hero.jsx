import React from "react";

export default function Hero() {
  return (
    <div className="grid place-items-center bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
      <div className="flex max-w-4xl flex-col items-center justify-center pt-16">
        <button className="text-md group flex transform items-center gap-2 rounded-lg border-2 border-yellow-300 bg-yellow-50 px-3 py-1 font-semibold drop-shadow-md transition-transform hover:-translate-y-1">
          <div className="size-2 rounded-full border border-yellow-600 bg-yellow-400"></div>
          <span className="text-yellow-600">v0.21.1:</span>
          <span className="text-yellow-800">Find-in-page bug fixes</span>
          <span className="transform text-xl text-yellow-600 transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </button>

        <ul className="flex gap-10 py-10 text-gray-500">
          <li className="flex flex-col items-center justify-center gap-1 lg:flex-row">
            <img
              className="size-4"
              src="/assets/svg/file-code.svg"
              alt="code icon"
            />
            <span className="text-center">Code Optional</span>
          </li>

          <li className="flex flex-col items-center gap-1 lg:flex-row">
            <img
              className="size-4"
              src="/assets/svg/hand-back-fist.svg"
              alt="fist icon"
            />
            <span className="text-center">Drag & drop builder</span>
          </li>

          <li className="flex flex-col items-center gap-1 lg:flex-row">
            <img
              className="size-5"
              src="/assets/svg/laptop.svg"
              alt="laptop icon"
            />
            <span className="text-center">Windows, Mac, Linux</span>
          </li>
        </ul>
        <h1 className="mt-2 text-balance text-center font-poppins text-4xl font-semibold leading-snug text-gray-800 sm:text-6xl lg:text-6xl">
          Web app to desktop app in minutes
        </h1>
        <h2 className="text-balance py-8 text-center font-inter text-2xl text-gray-700">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </h2>

        <div className="mt-4 flex gap-6">
          <button className="rounded-md border bg-primary-blue p-3 px-8 font-semibold text-white">
            Download now
          </button>
          <button className="rounded-md border border-gray-500 bg-white p-3 px-8 font-semibold text-gray-800">
            Read Docs
          </button>
        </div>

        <div className="mt-14 flex items-center justify-center gap-4">
          <img
            className="translate-y-4 transform"
            src="/assets/svg/arrow.svg"
            alt="arrow left"
          />
          <h3 className="font-bold uppercase text-black">
            apps POWERED BY TODESKTOP
          </h3>
          <img
            className="translate-y-4 -scale-x-100 transform"
            src="/assets/svg/arrow.svg"
            alt="arrow right"
          />
        </div>
      </div>
    </div>
  );
}
