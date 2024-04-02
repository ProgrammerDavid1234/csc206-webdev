import React, { useState, useEffect } from "react";
import "./App.css";

function Card({ data }) {
  return (
    <div className="card">
      <p>Time: {data.time}</p>
      <p>Temperature: {data.temperature}</p>
      <p>Relative Humidity: {data.relativehumidity}</p>
      <p>Pressure: {data.pressure}</p>
      <p>Altitude: {data.altitude}</p>
      <p>Oxygen Level: {data.oxygen}</p>
      <p>Level: {data.level}</p>
    </div>
  );
}

function App() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Update data every 5 seconds
    const interval = setInterval(fetchData, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    // Mock API call or you can fetch data from an actual API
    const newData = [
      {
        id: 1,
        time: new Date().toISOString(),
        temperature: getRandomValue(60, 80),
        relativehumidity: getRandomValue(20, 90),
        pressure: getRandomValue(30, 70),
        altitude: getRandomValue(5, 100),
        oxygen: getRandomValue(60, 90),
        level: getRandomValue(30, 80)
      },
      {
        id: 2,
        time: new Date().toISOString(),
        temperature: getRandomValue(40, 50),
        relativehumidity: getRandomValue(10, 40),
        pressure: getRandomValue(20, 40),
        altitude: getRandomValue(70, 100),
        oxygen: getRandomValue(80, 90),
        level: getRandomValue(70, 90)
      },
      {
        id: 3,
        time: new Date().toISOString(),
        temperature: getRandomValue(30, 40),
        relativehumidity: getRandomValue(40, 60),
        pressure: getRandomValue(50, 60),
        altitude: getRandomValue(10, 20),
        oxygen: getRandomValue(80, 90),
        level: getRandomValue(60, 80)
      },
      {
        id: 4,
        time: new Date().toISOString(),
        temperature: getRandomValue(35, 40),
        relativehumidity: getRandomValue(10, 20),
        pressure: getRandomValue(20, 40),
        altitude: getRandomValue(20, 30),
        oxygen: getRandomValue(60, 70),
        level: getRandomValue(40, 60)
      }
    ];

    setCardsData(newData);
  };

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  };

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>CSC209</h1>
      <div className="grid-container">
        {cardsData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;