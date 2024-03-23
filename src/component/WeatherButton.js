import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant="outline-dark">현재 도시</Button>
      <Button variant="outline-dark">뉴욕</Button>
      <Button variant="outline-dark">도시</Button>
    </div>
  )
}

export default WeatherButton
