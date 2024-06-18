import React from "react";
import Container from "./Container";
import { LuEye } from "react-icons/lu";
import { CiDroplet } from "react-icons/ci";
import { MdAir } from "react-icons/md";
import { BsSpeedometer, BsSunrise, BsSunset } from "react-icons/bs";

export type WeatherDetailsProps = {
  visability: string;
  humidity: string;
  windSpeed: string;
  aipressure: string;
  sunrise: string;
  sunset: string;
};

const WeatherDetails = (props: WeatherDetailsProps) => {
  return (
    <>
      <SingleWeatherDetails
        infomations="Visability"
        value={props.visability}
        icon={<LuEye />}
      />
      <SingleWeatherDetails
        infomations="Humidity"
        value={props.humidity}
        icon={<CiDroplet />}
      />
      <SingleWeatherDetails
        infomations="Aipressure"
        value={props.aipressure}
        icon={<MdAir />}
      />
      <SingleWeatherDetails
        infomations="WindSpeed"
        value={props.windSpeed}
        icon={<BsSpeedometer />}
      />
      <SingleWeatherDetails
        infomations="Sunrise"
        value={props.sunrise}
        icon={<BsSunrise />}
      />
      <SingleWeatherDetails
        infomations="Sunset"
        value={props.sunset}
        icon={<BsSunset />}
      />
    </>
  );
};

export interface SingleWeatherDetails {
  infomations: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetails(props: SingleWeatherDetails) {
  return (
    <div className="flex flex-col justify-between items-center gap-2 text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.infomations}</p>
      <div className="text-3xl">{props.icon}</div>
      <div>{props.value}</div>
    </div>
  );
}

export default WeatherDetails;
