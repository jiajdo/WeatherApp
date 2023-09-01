import React from 'react'


function WeatherCard({ data, city }) {
    if (data && city) {
        return (
            <div>
                <h2>
                    <span>{data.name}</span>
                </h2>

            </div>
        )
    }
}

export default WeatherCard