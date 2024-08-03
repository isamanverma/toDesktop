import React from "react";

export default function PricingCard({ tier, description, price }) {
  return (
    <div className="rounded-xl bg-slate-50 p-10">
      <h3 className="my-5 text-4xl font-semibold text-gray-700">{tier}</h3>
      <p className="my-5 text-xl font-extralight">{description}</p>
      <p className="my-5 text-xl font-extralight">
        <span className="font-bold">${price}</span>/month
      </p>
      <h3 className="my-5 uppercase">Key features</h3>
      <ul className="flex flex-col gap-2 text-xl font-extralight">
        <li className="flex gap-2">
          <img
            className="size-5"
            src="/public/assets/svg/check.svg"
            alt="check mark"
          />
          Free for personal use
        </li>
        <li className="flex gap-2">
          <img
            className="size-5"
            src="/public/assets/svg/check.svg"
            alt="check mark"
          />
          Free for personal use
        </li>
        <li className="flex gap-2">
          <img
            className="size-5"
            src="/public/assets/svg/check.svg"
            alt="check mark"
          />
          Free for personal use
        </li>
        <li className="flex gap-2">
          <img
            className="size-5"
            src="/public/assets/svg/check.svg"
            alt="check mark"
          />
          Free for personal use
        </li>
      </ul>

      <button className="my-5 w-full rounded-lg bg-primary-blue p-2 text-xl text-white">
        Read docs
      </button>
    </div>
  );
}
