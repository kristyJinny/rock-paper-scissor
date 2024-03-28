import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { ClipLoader } from "react-spinners";
import './Weather.css';

const cities = ["hanoi", "paris", "new york", "seoul"];
const API_KEY = 'dcbac70274785529ae1102dcb2c9a697';

function Weather() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState("");

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  // 현재 위치
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude
      let lon = position.coords.longitude;
      // console.log("현재 위치", lat, lon)

      getWeatherByCurrentLocation(lat, lon)

    });
  };

  // 도시날씨
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
     if (city == null) {
       setLoading(true);
       getCurrentLocation();
     } else {
    setLoading(true);
    getWeatherByCity();
     }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <>
      <div className="wrapper">
        {loading ? (
          <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : !apiError ? (
          <div class="weather-container">
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
            <WeatherBox weather={weather} />
          </div>
        ) : (
          apiError
        )}
      </div>
    </>
  )
}

export default Weather



/*
  1. 앱이 실행되자마자, 현재위치 기반의 날씨가 보인다.
  2. 날씨벙보에는 도시, 섭씨, 화씨 날씨 상태
  3. 하단에 5개의 버튼 ( 1개는 현재 위치)
  4. 도시 버튼을 클릭 할 떄 마다, 도시별 날씨가 나옴
  5. 현재 위치 버튼을 클릭하면, 다시 현재 위치 기반의 날씨
  6. 로딩 스피너: 데이터를 들고 오는 동안

  =====
  1. 앱이 실행되자마자 -> useEffect()
*/
