import React from "react";
import HowCard from "./HowCard";

export default function How() {
  return (
    <div>
      <h2 className="mt-20 font-poppins text-5xl font-bold text-gray-800">
        How it works?
      </h2>
      <HowCard step={1} />
      <HowCard step={2} />
      <HowCard step={3} />
    </div>
  );
}
