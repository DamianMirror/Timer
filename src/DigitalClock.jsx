import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import sc from "./assets/soundcloud.svg";
import yt from "./assets/youtube.svg";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(value) {
    return value < 10 ? `0${value}` : value;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <h1>{formatTime()}</h1>
      </div>

      <ul className="links">
        <li>
          <a href="https://soundcloud.com/you/likes" target="_blank" rel="noreferrer">
            <ReactSVG src={sc} alt="SoundCloud" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <ReactSVG src={yt} alt="YouTube" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DigitalClock;
