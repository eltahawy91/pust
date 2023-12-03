import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./soon.css";
const Soon = () => {
  return (
    <div className="commingsoon d-flex align-items-center">
      <div className="container">
        <div className="clock_content text-white">
          <h1>We are almost there</h1>
          <h3 className="text-white">Stay tuned for something amazing.</h3>
          <FlipClockCountdown
            className="flip-clock text-white"
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            duration={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Soon