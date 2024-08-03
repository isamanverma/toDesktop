import React from "react";

export default function Bento() {
  return (
    <div>
      <h1 className="my-10 max-w-[20ch] text-4xl font-bold md:mb-16 md:mt-24 lg:text-5xl">
        ToDesktop handles the details
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="row-span-1 flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-50 from-pink-50 via-purple-50 to-yellow-50 p-10 transition-all duration-300 hover:border-pink-200 hover:bg-gradient-to-br hover:drop-shadow-sm">
          <h2 className="mb-4 text-center font-poppins text-2xl font-bold lg:mb-8">
            Native Notification
          </h2>
          <img src="/public/assets/images/new event.png" alt="event" />
        </div>

        <div className="row-span-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-50 from-pink-50 via-purple-50 to-yellow-50 p-10 transition-all duration-300 hover:border-pink-200 hover:bg-gradient-to-br hover:drop-shadow-sm">
          <h2 className="mb-4 text-center font-poppins text-2xl font-bold lg:mb-8">
            Native Notification
          </h2>
          <h3 className="text-center text-lg font-light">
            We'll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </h3>
          <img
            src="/public/assets/images/latest version.png"
            alt="latest version"
          />
        </div>

        <div className="row-span-1 flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-50 from-pink-50 via-purple-50 to-yellow-50 p-10 transition-all duration-300 hover:border-pink-200 hover:bg-gradient-to-br hover:drop-shadow-sm">
          <h2 className="mb-4 text-center font-poppins text-2xl font-bold lg:mb-8">
            Native Notification
          </h2>
          <img src="/public/assets/images/carousel.png" alt="carousel" />
        </div>

        <div className="row-span-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-50 from-pink-50 via-purple-50 to-yellow-50 p-10 transition-all duration-300 hover:border-pink-200 hover:bg-gradient-to-br hover:drop-shadow-sm">
          <h2 className="mb-4 text-center font-poppins text-2xl font-bold lg:mb-8">
            Native Notification
          </h2>
          <h3 className="text-center text-lg font-light">
            We'll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </h3>
          <img src="/public/assets/images/api.png" alt="latest version" />
        </div>

        <div className="row-span-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-50 from-pink-50 via-purple-50 to-yellow-50 p-10 transition-all duration-300 hover:border-pink-200 hover:bg-gradient-to-br hover:drop-shadow-sm">
          <h2 className="mb-4 text-center font-poppins text-2xl font-bold lg:mb-8">
            Native Notification
          </h2>
          <h3 className="text-center text-lg font-light">
            We'll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </h3>
          <img
            src="/public/assets/images/latest version.png"
            alt="latest version"
          />
        </div>

        <div className="row-span-1 flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-slate-50 from-pink-50 via-purple-50 to-yellow-50 p-10 transition-all duration-300 hover:border-pink-200 hover:bg-gradient-to-br hover:drop-shadow-sm">
          <h2 className="mb-4 text-center font-poppins text-2xl font-bold lg:mb-8">
            Native Notification
          </h2>
          <img src="/public/assets/images/new event.png" alt="event" />
        </div>
      </div>
    </div>
  );
}
