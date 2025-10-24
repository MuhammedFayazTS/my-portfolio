import { WeatherType } from "./api";

export function mapWeatherName(code: number): string {
    const names: Record<number, string> = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        80: 'Rain showers slight',
        81: 'Rain showers moderate',
        82: 'Rain showers violent',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail',
    };
    return names[code] || 'Unknown';
}

export function mapWeatherCode(code: number): WeatherType {
    if ([0, 1, 2].includes(code)) return 'sunny';
    if ([3, 45, 48].includes(code)) return 'cloudy';
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
    if (code >= 95 && code <= 99) return 'thunderstorm';
    return 'sunny'; // fallback
}