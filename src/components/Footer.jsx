import React from "react";

export default function Footer() {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-between rounded-lg bg-slate-50 px-6 py-2 md:flex-row">
        <div className="flex items-center gap-2 py-5 md:py-10">
          <img
            className="rounded-md hover:cursor-pointer"
            src="/assets/images/logo.png"
            alt="website icon"
          />
          <span className="font-poppins text-[18px] font-semibold">
            ToDesktop
          </span>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-3 md:gap-6">
            <img
              className="size-6"
              src="/assets/svg/twitter.svg"
              alt="twitter icon"
            />
            <img
              className="size-5"
              src="/assets/svg/github.svg"
              alt="github icon"
            />
            <p className="text-md font-extralight">Documentation</p>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-1 text-gray-600">
        <span>A</span>
        <span>
          <img
            className="w-28"
            src="/assets/images/Y Combinator.png"
            alt="Y combinator logo"
          />
        </span>{" "}
        <span>Company</span>
      </div>
      <p className="my-5 text-center text-sm text-gray-500">
        &copy; 2024 ToDesktop, Inc. All rights reserved.
      </p>
    </div>
  );
}
