'use client';

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Clock from './clock';
import "leaflet/dist/leaflet.css"
import { useTheme } from 'next-themes';

// Dynamically import MapBox and Leaflet to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const MapBox = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [L, setL] = useState<any>(null);
    const { theme, systemTheme } = useTheme()
    const isDarkTheme = theme === "dark" || (theme === "system" && systemTheme === "dark")
    const bgColor = isDarkTheme ? "#171717" : "#f5f5f5";

    useEffect(() => {
        import('leaflet').then((leaflet) => {
            setL(leaflet);
        });
    }, []);

    if (!L) return null;

    const MyLocation = L.icon({
        iconUrl: '/icon.webp',
        iconSize: [24, 24],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const myPositionFromENV = process.env.NEXT_PUBLIC_MY_POSITION ? process.env.NEXT_PUBLIC_MY_POSITION.split(",") as unknown as L.LatLngExpression : null
    const myPosition: L.LatLngExpression = myPositionFromENV || [10.127528, 76.312306]

    return (
        <div className="w-full h-[200px] rounded-t-lg overflow-hidden bg-gray-50 dark:bg-gray-900 relative">
            <Clock customClass="absolute top-2 right-2 z-[1000]" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-50 dark:from-neutral-950 from-0% to-95% via-transparent to-transparent z-[999]"></div>
            <MapContainer
                key={isDarkTheme ? "dark" : "light"}
                center={myPosition}
                zoom={10}
                minZoom={6}
                maxZoom={20}
                boundsOptions={{ padding: [50, 50] }}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}
                style={{ width: '100%', height: '100%', backgroundColor: bgColor }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://jawg.io">JawgIO</a>'
                    url={`https://tile.jawg.io/jawg-${isDarkTheme ? 'dark' : 'light'}/{z}/{x}/{y}.png?access-token=${process.env.NEXT_PUBLIC_JAWG_ACCESS_TOKEN}`}
                />
                <Marker
                    icon={MyLocation}
                    position={myPosition}
                >
                    <Popup>
                        Hey Its me 👋
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default React.memo(MapBox);
