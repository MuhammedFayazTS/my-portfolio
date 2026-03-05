'use client';

import React, { Suspense } from "react";
import { Map, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map";
import { useTheme } from "next-themes";
// import { WeatherData } from "@/lib/api";
// import WeatherInfo from "./weather-info";
import dynamic from "next/dynamic";

// const WeatherLayer = React.lazy(() => import("./weather-layer"));
// const Clock = dynamic(() => import("../clock"));

interface IMapBoxProps {
    myPosition: [number, number]; // [lat, lng]
    // weather: WeatherData;
}

const MapBox = ({ myPosition,
    // weather
}: IMapBoxProps) => {
    const { theme, systemTheme } = useTheme();

    const isDarkTheme =
        theme === "dark" || (theme === "system" && systemTheme === "dark");

    // const { weatherType } = weather;

    const [lat, lng] = myPosition;

    return (
        <div className="w-full h-[250px] lg:rounded-t-lg overflow-hidden bg-gray-50 dark:bg-gray-900 relative">
            {/* <Clock customClass="absolute top-2 right-2 z-[1000]" /> */}

            {/* <Suspense fallback={null}>
                <WeatherLayer type={weatherType} />
            </Suspense>

            <WeatherInfo weather={weather} /> */}

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