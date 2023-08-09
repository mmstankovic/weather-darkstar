import Card from "../UI/Card";
import classes from "./Forecast.module.css";
import ForecastItem from "./ForecastItem";
import { useEffect, useState, useContext } from "react";
import CityContext from "../../context/city-context";

const Forecast = () => { 
  const [forecast, setForecast] = useState({
    maxTemp: [],
    forecastIcons: [],
    days: [],
  });
  const [forecastError, setForecastError] = useState(null);
  const [forecastIsLoading, setForecastIsLoading] = useState(false)

  const cityCtx = useContext(CityContext)
  let {city: enteredCity, api_key: owm_api_key} = cityCtx
  
  useEffect(() => {
    const fetchForecastData = async () => {
      let arrMaxTepms = [];
      let arrForecastIcons = [];
      let days = [];
      setForecastIsLoading(true)
      setForecastError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${enteredCity}&appid=${owm_api_key}&units=metric`
      );
      const data = await response.json();
      setForecastIsLoading(false)

      if (!response.ok) {
        throw new Error("Fetch forecast data failed!");
      }

      for (var i = 0; i < data.list.length; i += 8) {
        
        arrMaxTepms.push(data.list[i].main.temp_max);
        arrForecastIcons.push(data.list[i].weather[0].icon);
        days.push(data.list[i].dt_txt);
      }

      setForecast({
        maxTemp: arrMaxTepms,
        forecastIcons: arrForecastIcons,
        days: days,
      });
    };
    fetchForecastData().catch((error) => {
        setForecastIsLoading(false)
      setForecastError(error.message);
    });
  }, [enteredCity, owm_api_key]);

  const ids = ["f1", "f2", "f3", "f4", "f5"];

  const allDays = ids.map((currentValue, index) => {
    return {
      id: currentValue,
      maxTemp: Math.round(forecast.maxTemp[index]),
      icon: forecast.forecastIcons[index],
      dayName: forecast.days[index],
    };
  });

  const forecast5Days = allDays.map((day) => (
    <ForecastItem
      key={day.id}
      id={day.id}
      dayName={day.dayName}
      maxTemp={day.maxTemp}
      icon={day.icon}
    />
  ));

  let forecastContent

  if(forecastIsLoading) {
    forecastContent = <p className={classes.loading}>Loading...</p>
  }
  if(forecastError) {
    forecastContent = <p className={classes.error}>{forecastError}</p>
  }
  if(!forecastIsLoading && !forecastError) {
    forecastContent = <ul>{forecast5Days}</ul>
  }

  return (
    <Card className={classes.forecast}>
      <div className={classes.title}>
        Next 5 days...
      </div>
      {forecastContent}
    </Card>
  );
};
export default Forecast;
