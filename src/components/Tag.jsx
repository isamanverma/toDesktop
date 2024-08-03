import React from "react";

export default function Tag({ tagName }) {
  return (
    <li className="flex flex-row items-center justify-center gap-1 rounded-md border border-yellow-400 bg-yellow-50 p-1 px-3 text-yellow-900">
      <img
        className="size-3"
        src="/assets/svg/check.svg"
        alt="checkmark icon"
      />
      <p className="whitespace-nowrap text-xs font-semibold">{tagName}</p>
    </li>
  );
}
