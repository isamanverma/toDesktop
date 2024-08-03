import React, { useState } from "react";

export default function FAQCard({ title, answer }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleInfo = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      onClick={toggleInfo}
      className="flex cursor-pointer items-center justify-between rounded-lg border bg-slate-50 p-4 px-4"
    >
      <div className="flex-1">
        <span>{title}</span>
        <div
          className={`transform overflow-hidden transition-all duration-300 ease-in-out ${
            isVisible
              ? "mt-2 max-h-40 scale-100 opacity-100"
              : "max-h-0 scale-95 opacity-0"
          }`}
        >
          <p className="rounded-lg p-4">{answer}</p>
        </div>
      </div>
      <img
        className="h-6 w-6"
        src="/assets/svg/dropdown.svg"
        alt="dropdown icon"
      />
    </div>
  );
}
