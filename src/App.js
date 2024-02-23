
import { useState } from "react";
import "./App.css";
import { ListOfTrips } from "./Components/listOfTrips";
import { Searchbar } from "./Components/searchbar";
import { WeatherForecast } from "./Components/weatherForecast";
import { WeatherSidebar } from "./Components/weatherSidebar";
import { AddTripButton } from "./Components/AddTripButton";
import { useEffect } from "react";
import { FetchForecast, fetchWeather } from "./Components/API functions";
const App = () => {
  const [initialTrip, setInitialTrip] = useState({
    city: "Kyiv",
    startDate: "2024-02-22",
    endDate: "2024-02-25",
  });
  const [trips, setTrips] = useState([initialTrip]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDateStart, setSelectedDateStart] = useState("");
  const [selectedDateEnd, setSelectedDateEnd] = useState("");
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [todayWeather, setTodayWeather] = useState("");

  const createNewTrip = (city, startDate, endDate) => {
    const newTrip = {
      city: city,
      startDate: startDate,
      endDate: endDate,
    };
    setTrips([...trips, newTrip]);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const selectCard = (city, startDate, endDate) => {
    setSelectedCity(city);
    setSelectedDateStart(startDate);
    setSelectedDateEnd(endDate);
  };

  useEffect(() => {
    if (selectedCity === ""||selectedDateStart==='') {
      return;
    }
    async function getWeatherDataFromTo() {
      try {
        const fetchedData = await FetchForecast(selectedCity,
          selectedDateStart,
          selectedDateEnd
        );
        setWeatherForecastData(fetchedData);
        console.log(fetchedData);
        console.log(weatherForecastData);
      } catch (error) {
        console.log(error);
      }
    }
    getWeatherDataFromTo();
  }, [selectedCity, selectedDateStart, selectedDateEnd]);

useEffect(()=>{
  if (selectedCity==='') {
 setSelectedCity("Kyiv")
  }
  async function getWeatherForADay(){
    try {
      const fetchedData = await fetchWeather(selectedCity,    selectedDateStart,
        selectedDateEnd )
        setTodayWeather(fetchedData)
        console.log(todayWeather)
    } catch (error) {console.log(error)}
  };
  getWeatherForADay()
},[selectedCity, selectedDateStart, selectedDateEnd])
  
  return (
    <div className="App">
      <div>
        <h1>
          <span className="h1-span">Weather</span> Forecast
        </h1>
        <Searchbar onChange={handleSearchChange} value={searchTerm} />
        <div className="list-btn-box">
          <ListOfTrips
            trips={trips}
            searchTerm={searchTerm}
            selectTrip={selectCard}
            initialTrip={initialTrip}
          />
          <AddTripButton onCreateNewTrip={createNewTrip} />
        </div>
        <WeatherForecast weatherData={weatherForecastData} />
      </div>
      <div>
        <WeatherSidebar city={selectedCity} weatherData={todayWeather} dayEnd={selectedDateEnd}/>
      </div>
    </div>
  );
};

export default App;
