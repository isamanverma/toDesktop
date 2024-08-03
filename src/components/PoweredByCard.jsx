import React from "react";

export default function PoweredByCard({ imgSource, companyName }) {
  return (
    <div className="flex size-32 flex-shrink-0 flex-col items-center justify-center rounded-xl border bg-white">
      <img
        className="size-16"
        src={`${imgSource}`}
        alt={`${companyName} icon`}
      />
      <span className="my-2 font-bold">{companyName}</span>
    </div>
  );
}
