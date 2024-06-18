"use client";
import React, { useState } from "react";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useAtom } from "jotai";
import { placeAtom } from "@/app/atom";

type Props = {};

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
function Navbar({}: Props) {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [place, setPlace] = useAtom(placeAtom);
  const [showSuggestions, setShowSuggestions] = useState(false);
  async function handleOnChange(value: string) {
    setCity(value);
    if (value.length > 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`,
        );
        console.log("respo", response.data);
        const suggestions = response.data.list.map((item: any) => item.name);
        setShowSuggestions(true);
        console.log("respo", suggestions);
        setSuggestions(suggestions);
        setErrorMessage("");
      } catch (error) {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function handleSuggesionClick(value: string) {
    setCity(value);
    setShowSuggestions(false);
  }
  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (suggestions.length === 0) {
      setErrorMessage("Please enter a valid city name");
      return;
    } else {
      setShowSuggestions(false);
      setPlace(city);
      setErrorMessage("");
    }
  }
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
          <div className="relative">
            <SearchBar
              value={city}
              onSubmit={handleOnSubmit}
              onChange={(e) => handleOnChange(e.target.value)}
            />
            <SuggestionBox
              suggestions={suggestions}
              handleSuggesionClick={handleSuggesionClick}
              errorMessage={errorMessage}
              showSuggestions={showSuggestions}
            />
          </div>
        </section>
      </div>
    </nav>
  );
}

function SuggestionBox({
  showSuggestions,
  suggestions,
  handleSuggesionClick,
  errorMessage,
}: {
  showSuggestions: boolean;
  suggestions: string[];
  handleSuggesionClick: (item: string) => void;
  errorMessage: string;
}) {
  return (
    <>
      {" "}
      {((showSuggestions && suggestions.length) || errorMessage) && (
        <ul className="mb-4 min-w-[200px] bg-white absolute border top-[44px] left-0 border-gray-300 rounded-lg flex flex-col gap-1 py-2 px-2">
          {errorMessage && suggestions.length < 1 && (
            <li className="text-red-500 p-1">{errorMessage}</li>
          )}
          {suggestions.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer p-1 rounded hover:bg-gray-200"
              onClick={() => handleSuggesionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Navbar;
