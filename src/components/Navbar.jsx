import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white px-2 py-4 drop-shadow-md">
      <div className="flex items-center gap-2">
        <img
          className="rounded-md hover:cursor-pointer"
          src="/assets/images/logo.png"
          alt="website icon"
        />
        <span className="font-poppins text-[18px] font-semibold">
          ToDesktop
        </span>
      </div>
      <ul className="hidden gap-10 px-10 font-semibold text-gray-900 md:flex">
        <li className="cursor-pointer p-2 hover:text-blue-600">Pricing</li>
        <li className="cursor-pointer p-2 hover:text-blue-600">Docs</li>
        <li className="cursor-pointer p-2 hover:text-blue-600">Changelog</li>
        <li className="cursor-pointer p-2 hover:text-blue-600">Blogs</li>
        <li className="cursor-pointer p-2 hover:text-blue-600">Login</li>
      </ul>

      <div className="flex-shrink-0">
        <button className="group hidden transform gap-2 rounded-lg border border-gray-600 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-black lg:flex">
          <img src="/assets/svg/electron.svg" alt="electron logo" />
          <span className="font-semibold text-gray-800">
            Electron Developers
            <span className="inline-block transform pl-1 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </button>
        <img
          className="size-6 md:hidden"
          src="/assets/svg/menu-burger.svg"
          alt="menu"
        />
      </div>
    </nav>
  );
}
