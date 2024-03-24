import React from 'react'
import { Card } from "react-bootstrap";


const WeatherBox = ({weather}) => {
  const temperatureC = weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
  const temperatureF = 
    weather && weather.main
      ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
      : "";
  // console.log("weather?", weather);
  return (
    <Card className="weather-box">
      <Card.Title>{weather?.name? `위치 : ${weather.name}`: '날씨를 가져오는데 실패했습니다.'}</Card.Title>
      <div className="h1 main-info">
        {`${temperatureC} °C / ${temperatureF} °F`}
      </div>
      <div className="info">
        {weather && weather.weather[0]?.description}
      </div>
    </Card>
  )
}

export default WeatherBox
