import { nanoid } from "nanoid";
import { WeatherCard } from "./weatherCard";
import "../App.css";
import { useRef } from "react";
export const WeatherForecast = ({ weatherData }) => {
  const tripListContainerRef = useRef(null);
  const handleWheelScroll = (event) => {
    const tripListContainer = tripListContainerRef.current;
    tripListContainer.scrollLeft += event.deltaY;
  };
  return (
    <div>
      <h2>Week</h2>
      <ul     ref={tripListContainerRef} onWheel={handleWheelScroll}>
        <div>
          <WeatherCard key={nanoid()} data={weatherData} />
        </div>
      </ul>
    </div>
  );
};
