import React from "react";

export default function HowCard({ step }) {
  return (
    <div className="my-16 flex flex-col gap-8 rounded-xl border p-10 lg:flex-row lg:justify-between">
      <div>
        <button className="my-4 rounded-lg border border-yellow-400 bg-yellow-50 px-4 py-1 font-semibold text-yellow-700">
          Step {step}
        </button>
        <h2 className="text-3xl font-medium md:text-4xl">
          Bootstrap straight from your <br /> web app
        </h2>
        <p className="my-5 text-balance text-lg font-extralight md:text-xl">
          Copy and paste your web app url into ToDesktop. Customise your app
          design, app icon and window frame UI with no code.
        </p>
        <ul className="grid grid-cols-2 text-lg font-extralight underline decoration-1 underline-offset-4 md:text-xl">
          <li className="flex flex-row gap-2">
            <img
              className="size-5"
              src="/public/assets/svg/check.svg"
              alt="check mark"
            />
            <span>Multiple Windows</span>
          </li>
          <li className="flex flex-row gap-2">
            <img
              className="size-5"
              src="/public/assets/svg/check.svg"
              alt="check mark"
            />
            <span>Multiple Windows</span>
          </li>
          <li className="flex flex-row gap-2">
            <img
              className="size-5"
              src="/public/assets/svg/check.svg"
              alt="check mark"
            />
            <span>Multiple Windows</span>
          </li>
          <li className="flex flex-row gap-2">
            <img
              className="size-5"
              src="/public/assets/svg/check.svg"
              alt="check mark"
            />
            <span>Multiple Windows</span>
          </li>
          <li className="flex flex-row gap-2">
            <img
              className="size-5"
              src="/public/assets/svg/check.svg"
              alt="check mark"
            />
            <span>Multiple Windows</span>
          </li>
          <li className="flex flex-row gap-2">
            <img
              className="size-5"
              src="/public/assets/svg/check.svg"
              alt="check mark"
            />
            <span>Multiple Windows</span>
          </li>
        </ul>
      </div>
      <img src="/public/assets/svg/upload.svg" alt="upload" />
    </div>
  );
}
