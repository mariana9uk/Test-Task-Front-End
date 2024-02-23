import "../App.css"
export const WeatherSidebar = ({city, weatherData, dayEnd})=>{
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
    // const timer=setInterval(() => {
        
    // }, interval);
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
    dayEnd?<div> timer </div> :null
}

</div>
</div>
}