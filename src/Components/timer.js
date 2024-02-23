import { useEffect } from "react";
import { useState } from "react";

 export const CountdownTimer = ({ startDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    function calculateTimeLeft() {
      const difference = new Date(startDate) - Date.now();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    }
  
    return (
      <div className="timer">
        <div className="timerUnit"><div> {timeLeft.days}</div> <p>days</p></div>
      <div className="timerUnit"><div>{timeLeft.hours}</div><p>hours</p>  </div>  
      <div className="timerUnit"> <div>{timeLeft.hours}</div><p>minutes</p></div> 
      <div className="timerUnit"> <div>{timeLeft.seconds}</div><p>seconds</p>   </div>
      </div>
    );
  };