import "../App.css"
import { CountdownTimer } from "./timer"
export const WeatherSidebar = ({city, weatherData, startDate})=>{
if (!weatherData) {
    return
}
const today=weatherData[0]
if(today===null){
    return
}
const dayTime=today.datetime
const middleTemp=today.temp
const icon= today.icon

    const date = new Date(dayTime);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday','Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
return<div className="sidebar">
<div className="sidebar-text-box">
<h2>
{dayOfWeek}
</h2>
<h3>
{middleTemp}
</h3>
<i>{icon}</i>
<p>
{city}
</p>{
    startDate?<div> <CountdownTimer startDate={startDate}/> </div> :null
}

</div>
</div>
}