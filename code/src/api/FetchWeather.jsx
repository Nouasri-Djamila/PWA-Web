import axios from "axios"

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "ec7d57abc6343b6fcfeaca2e80386482" 

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}