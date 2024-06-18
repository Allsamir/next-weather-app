import React from "react";
import Container from "./Container";
import WeatherIcons from "./WeatherIcons";
import WeatherDetails, { WeatherDetailsProps } from "./WeatherDetails";
import { convertToCelsius } from "@/utils/convertToC";

export interface ForcastWeatherDetailsComponent extends WeatherDetailsProps {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

const ForcastWeatherDetailsComponent = (
  props: ForcastWeatherDetailsComponent,
) => {
  return (
    // Left
    <Container className="gap-4">
      <section className="flex gap-4 items-center px-4">
        <div>
          <WeatherIcons iconname={props.weatherIcon} />
          <p>{props.date}</p>
          <p className="text-sm">{props.day}</p>
        </div>
        {/*  */}
        <div className="flex flex-col px-4">
          <span className="text-5xl">
            {convertToCelsius(props.temp) + "°C"}
          </span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels Like</span>
            <span>{convertToCelsius(props.feels_like) + "°C"}</span>
          </p>
          <p className="capitalize">{props.description}</p>
        </div>
      </section>
      {/* Right */}
      <section className="overflow-x-auto flex justify-between gap-4 w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
};

export default ForcastWeatherDetailsComponent;
