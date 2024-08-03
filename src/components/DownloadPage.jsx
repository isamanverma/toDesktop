import React from "react";

export default function DownloadPage() {
  return (
    <div className="grid grid-cols-1 rounded-2xl bg-black lg:grid-cols-2">
      <div className="px-10 pt-20 text-white">
        <p className="text-xl font-semibold uppercase text-gray-400">
          Ready to start building?
        </p>
        <h2 className="py-8 text-5xl font-semibold">
          Create your desktop app for free*
        </h2>
        <p className="text-xl text-gray-400">
          ToDesktop Builder will take you step-by-step through the process of
          creating your first desktop app in just a few minutes.
        </p>
        <button className="group my-6 flex w-full justify-center gap-5 rounded-md bg-primary-blue p-4">
          <img
            className="size-6 invert"
            src="/src/assets/svg/download.svg"
            alt="download logo"
          />
          <p className="text-md">Download ToDesktop Builder</p>
        </button>
        <p className="text-xs italic text-gray-400">
          *You can create a desktop app and run it on your computer for free.
          You will only be charged if you want to create a distributable app for
          your customers.
        </p>
      </div>
      <img
        className="mt-10 hidden justify-self-end md:block"
        src="/src/assets/images/clickUpReview.png"
        alt="click up"
      />
    </div>
  );
}
