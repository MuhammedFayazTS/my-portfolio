'use client';

import React, { Suspense } from "react";
import { Map, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map";
import { useTheme } from "next-themes";
import WeatherInfo from "../weather/WeatherInfo";
import { WeatherData } from "@/lib/api";
import WeatherLayer from "../weather/WeatherLayer";
import Clock from "../Clock";

interface IMapBoxProps {
    myPosition: [number, number]; // [lat, lng]
    weather: WeatherData;
}

const MapBox = ({ myPosition,
    weather
}: IMapBoxProps) => {
    const { theme, systemTheme } = useTheme();

    const isDarkTheme =
        theme === "dark" || (theme === "system" && systemTheme === "dark");

    const { weatherType } = weather;

    const [lat, lng] = myPosition;

    return (
        <div className="w-full h-[270px] sm:h-[250px] lg:rounded-t-lg overflow-hidden bg-gray-50 dark:bg-gray-900 relative">

            <Suspense fallback={null}>
                <WeatherLayer type={weatherType} />
            </Suspense>
           
            <Clock customClass="absolute bottom-4 left-4 z-[1000]" />

            <WeatherInfo weather={weather} />

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-50 dark:from-neutral-950 from-0% to-95% via-transparent to-transparent z-[999]" />

            <Map
                center={[lng, lat]}
                zoom={10}
            >
                <MapMarker longitude={lng} latitude={lat}>
                    <MarkerContent>
                        <img
                            src="/icon.webp"
                            className="w-6 h-6"
                            alt="location"
                        />
                    </MarkerContent>

                    <MarkerPopup>
                        Just another commit to the world. 🌍
                    </MarkerPopup>
                </MapMarker>
            </Map>
        </div>
    );
};

export default React.memo(MapBox);