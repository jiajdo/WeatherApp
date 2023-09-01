import React from 'react'


function WeatherCard({ data, city }) {
    if (data && city) {
        return (
            <div>
                <h3>
                    <span>{data.name}, {data.sys.country}</span>
                </h3>
                <h3>
                    <span>{Math.round((data.main.temp-273.15) * 9/5 + 32)} Fahrenheit, {Math.round((data.main.temp-273.15))} Celsius </span>
                </h3>
                <h3>
                    <span> Feels like: {Math.round((data.main.feels_like-273.15) * 9/5 + 32)} Fahrenheit, {Math.round((data.main.feels_like-273.15))} Celsius </span>
                </h3>
                <h3>
                    <span>Description: {data.weather[0].description}</span>
                </h3>
                <h3>
                    <span>Sunrise: {data.sys.sunrise}</span>
                </h3>
                <h3>
                    <span>Sunset: {data.sys.sunset}</span>
                </h3>
            </div>
        )
    }
}

export default WeatherCard