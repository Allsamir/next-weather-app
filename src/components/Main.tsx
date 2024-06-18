"use client";
import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
interface WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherData[];
  city: City;
}

interface WeatherData {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h": number;
}

interface Sys {
  pod: string;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lat: number;
  lon: number;
}
type Props = {};

function Main({}: Props) {
  const { isPending, isError, data } = useQuery<WeatherResponse>({
    queryKey: ["weatherData"],
    queryFn: async () =>
      (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&cnt=56`,
        )
      ).data,
  });

  const firstData = data?.list[0];

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">
          Something Went Wrong Reload The Page
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-gray-100">
      <Navbar />
      <main className="px-3 w-full max-w-7xl mx-auto flex flex-col gap-10 pb-10 pt-4">
        <section className="today_data">
          <div>
            <h2 className="flex gap-1 text-2xl items-start">
              <p>{moment(firstData?.dt_txt).format("dddd")}</p>
              <p>
                ({moment(firstData?.dt_txt).format("l").split("/").join(".")})
              </p>
            </h2>
          </div>
        </section>
        <section className="sevenDays_data"></section>
      </main>
    </div>
  );
}

export default Main;
