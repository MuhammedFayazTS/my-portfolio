import { mapWeatherCode, mapWeatherName } from "./weather";

export type WeatherType = 'rain' | 'cloudy' | 'thunderstorm' | 'sunny';

export interface WeatherData {
    temperature: number;
    windspeed: number;
    weathercode: number;
    time: string;
    weatherType: WeatherType;
    weatherName: string;
}

export async function getWeather(lat: number, lon: number):Promise<WeatherData> {
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
        { next: { revalidate: 600 } }
    );

    if (!res.ok) throw new Error(`Weather API error: ${res.status}`);

    const data = await res.json();
    const current = data.current_weather;

    const weatherType: WeatherType = mapWeatherCode(current.weathercode);
    const temperature: number = current.temperature;
    const weathercode: number = current.weathercode;
    const weatherName: string = mapWeatherName(current.weathercode.toString());

    return {
        temperature,
        windspeed: current.windspeed,
        weatherType,
        weathercode,
        weatherName,
        time: current.time,
    };
}
