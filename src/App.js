import React from 'react'
import Homepage from './page/Homepage'
import Aboutpage from './page/Aboutpage'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={ <Aboutpage/>} />
      </Routes>
     
    </div>
  )
}

export default App
