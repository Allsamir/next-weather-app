import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBar({ value, onChange, onSubmit }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex relative items-center justify-center h-10"
    >
      <input
        type="text"
        placeholder="Search Location..."
        name=""
        value={value}
        id=""
        onChange={onChange}
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full"
      />
      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none focus:border-blue-600 h-full">
        <FaSearch />
      </button>
    </form>
  );
}
