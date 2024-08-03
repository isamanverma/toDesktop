import React from "react";

export default function Qualities() {
  return (
    <div className="py-20 no-scrollbar">
      <ul className="flex flex-nowrap items-center justify-center gap-4 space-x-6 overflow-x-auto rounded-lg border-y text-xl font-bold leading-6">
        <li className="flex h-20 w-fit flex-shrink-0 items-center justify-center rounded-xl px-0 py-4">
          Custom Menu
        </li>
        <li>•</li>
        <li className="flex h-20 w-fit flex-shrink-0 items-center justify-center rounded-xl px-0 py-4">
          Multi-window Support
        </li>
        <li>•</li>
        <li className="flex h-20 w-fit flex-shrink-0 items-center justify-center rounded-xl px-0 py-4">
          Trays
        </li>
        <li>•</li>
        <li className="flex h-20 w-fit flex-shrink-0 items-center justify-center rounded-xl px-0 py-4">
          Deep Linking
        </li>
        <li>•</li>
        <li className="flex h-20 w-fit flex-shrink-0 items-center justify-center rounded-xl px-0 py-4">
          Download Analytics
        </li>
        <li>•</li>
        <li className="flex h-20 w-fit flex-shrink-0 items-center justify-center rounded-xl px-0 py-4">
          Lauch At Startup
        </li>
        <li>•</li>
        <li className="flex h-20 w-fit flex-shrink-0 items-center justify-center rounded-xl px-0 py-4">
          Offline Support
        </li>
        <li>•</li>
      </ul>
    </div>
  );
}
