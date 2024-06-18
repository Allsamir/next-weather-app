import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

type Props = {};

const WeatherIcons = (
  props: React.HTMLProps<HTMLDivElement> & { iconname: string },
) => {
  return (
    <div {...props} className={cn("relative w-20 h-20")}>
      <Image
        src={`https://openweathermap.org/img/wn/${props.iconname}@2x.png`}
        width={100}
        height={100}
        alt="Weather-icon"
        className="absolute h-full w-full"
      />
    </div>
  );
};

export default WeatherIcons;
