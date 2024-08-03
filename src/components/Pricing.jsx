import React from "react";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div className="my-10">
      <h2 className="text-gray-8000 my-5 text-5xl font-semibold leading-normal">
        Choose a plan that fits <br /> your needs
      </h2>
      <ul className="grid-col-1 relative grid gap-2 md:grid-cols-3">
        <PricingCard
          tier="Free"
          description="For personal use or testing your app before deploying to customers."
          price={0}
        />
        <PricingCard
          tier="Essential"
          description="For simple desktop apps."
          price={49}
        />
        <PricingCard
          tier="Professional"
          description="For sophisticated desktop apps."
          price={99}
        />
        <div className="absolute hidden z-10 rounded-full bg-indigo-200 p-2 text-sm font-bold text-indigo-700 md:-top-5 md:right-5">
          Most Popular
        </div>
      </ul>
    </div>
  );
}
