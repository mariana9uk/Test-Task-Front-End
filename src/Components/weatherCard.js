import { nanoid } from 'nanoid';
import '../App.css'
export const WeatherCard = ({data})=>{
    
    if (!data || data.length === 0) {
        return null
    }
   
   return <div className="trip-cards">
    {data.map((day) => {
      const datetime = day.datetime;
      const date = new Date(datetime);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday','Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
const tempMax=day.tempmax;
const tempMin=day.tempmin;
      return (
        <li key={nanoid()} className="weather-card">
          <p>{dayOfWeek}</p>
          <p>{tempMin}/{tempMax}</p> 
        </li>
      );
    })}
  </div>
}