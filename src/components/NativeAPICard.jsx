import React from "react";

export default function NativeAPICard() {
  return (
    <div className="rounded-lg border bg-slate-50 from-pink-50 via-purple-50 to-yellow-50 p-6 transition-all duration-300 hover:cursor-pointer hover:border-pink-200 hover:bg-gradient-to-tl hover:drop-shadow-sm">
      <div className="flex items-center gap-2">
        <div className="grid place-items-center rounded-full bg-blue-300 p-2">
          <img
            className="size-5"
            src="/src/assets/svg/code-simple.svg"
            alt="code fragment logo"
          />
        </div>
        <h3 className="text-xl font-bold">Native APIs</h3>
      </div>
      <p className="my-6 text-lg font-light">
        What sets ToDesktop apart is its seamless integration with native APIs
        using our existing web codebase. By tapping into APIs like Tray and
        Notifications, we've crafted an exceptionally polished desktop user
        experience.
      </p>
      <div className="flex gap-8">
        <div className="relative">
          <img
            className="size-14 rounded-full border border-white object-cover"
            src="/src/assets/images/asset 8.png"
            alt="rise logo"
          />

          <img
            className="absolute left-8 top-1 rounded-full border border-white"
            src="/src/assets/images/rick.jpeg"
            alt="rick"
          />
        </div>
        <div>
          <p>Rick Pastoor</p>
          <p className="text-gray-600">Rise</p>
        </div>
      </div>
    </div>
  );
}
