import React, { useEffect, useState } from 'react'
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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




function Weather() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude
      let lon = position.coords.longitude;
      //console.log("현재 위치", lat, lon)

      getWeatherByCureentLoation(lat, lon)

    });
  };

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const getWeatherByCureentLoation = async(lat, lon) => {
    let  url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dcbac70274785529ae1102dcb2c9a697&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data", data);

  }
  useEffect( ()=> {
    getCurrentLocation()
  }, [])

  return (
    <div className="container">
      <WeatherBox weather={weather} />
      <WeatherButton />
    </div>
  )
}

export default Weather
