import React from "react";
import "./weather.css";

export default function Prediction() {
  return (
    <div className="weatherPrediction">
      <div className="row">
        <div className="col-6">
          <h1 className="cityClass" id="city">
            Philadelphia
          </h1>
          <ul>
            <li className="timeMeasure" id="dayAndTime">
              Sunday 11.05
            </li>
            ,
            <li className="weatherMeasure" id="conditionDescription">
              Scattered Clouds
            </li>
          </ul>
          <ul>
            <li>
              Humidity:{" "}
              <strong>
                <span className="listHumidity" id="humidity">
                  51
                </span>
              </strong>
            </li>
            <li>
              Wind:{" "}
              <span className="listWind" id="windSpeed">
                {" "}
                <strong className="tempInfo">5</strong>
              </span>
              km/h
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            id="temperatureIcon"
          />
          <span className="tempDisplayClass" id="temperatureDisplay">
            {" "}
            15
          </span>
          <span className="unitMeasure" id="" className="float-right">
            °C{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
