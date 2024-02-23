import { nanoid } from "nanoid";
import { WeatherCard } from "./weatherCard";
import "../App.css";
import { useRef } from "react";
export const WeatherForecast = ({ weatherData }) => {
  const weatherListContainerRef = useRef(null);
  const handleWheelScroll = (event) => {
    const weatherListContainer = weatherListContainerRef.current;
    weatherListContainer.scrollLeft += event.deltaY;
  };
  return (
    <div>
      <h2>Week</h2>
      <div className="list-weather-box">
        <ul
          className="weather-list-container list-weather-box"
          ref={weatherListContainerRef}
          onWheel={handleWheelScroll}
        >
          <WeatherCard key={nanoid()} data={weatherData} />
        </ul>
      </div>
    </div>
  );
};
