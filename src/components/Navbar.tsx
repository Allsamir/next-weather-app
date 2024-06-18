import React from "react";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import SearchBar from "./SearchBar";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky left-0 top-0 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center mx-auto px-4">
        <p className="flex items-center justify-center gap-2">
          <span className="text-gray-500 text-3xl">Weather</span>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </p>
        <section className="flex gap-2 items-center">
          <FaLocationDot className="text-2xl text-gray-400 hover:text-black cursor-pointer" />
          <FaLocationCrosshairs className="text-3xl text-gray-400 hover:text-black cursor-pointer" />
          <p className="text-slate-900/80 text-sm">Bangladesh</p>
          <div>
            <SearchBar />
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
