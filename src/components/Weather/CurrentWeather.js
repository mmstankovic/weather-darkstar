import classes from './CurrentWeather.module.css'
import DateLocation from "./DateLocation"
import WeatherIcon from "./WeatherIcon"
import Temperature from "./Temperature"
import { useState, useEffect, Fragment } from 'react'
import { useContext } from 'react'
import CityContext from '../../context/city-context'

const CurrentWeather = () => {
    const [temperatureInfo, setTemperatureInfo] = useState({
        current: '',
        feelsLike: '',
        description: '',
        icon: ''
    })
    const [infoLocation, setInfoLocation] = useState({
        city: '',
        country: ''
    })
    const [currWeatherError, setCurrWeatherError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const cityCtx = useContext(CityContext)
    let { city: enteredCity, api_key: owm_api_key} = cityCtx 

    useEffect(() => {
        const fetchWeatherData = async () => {
            setIsLoading(true)
            setCurrWeatherError(null)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${owm_api_key}&units=metric`)

            if (!response.ok) {
                throw new Error('Fetch weather data failed!')
            }

            const weatherData = await response.json()
            setIsLoading(false)

            setTemperatureInfo({
                current: Math.round(weatherData.main.temp),
                feelsLike: Math.round(weatherData.main.feels_like),
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon
            })
            setInfoLocation({
                city: weatherData.name,
                country: weatherData.sys.country
            })

        }

        fetchWeatherData().catch((error) => {
            setIsLoading(false)
            setCurrWeatherError(error.message)
        })
    }, [enteredCity, owm_api_key])

    let content

    if (isLoading) {
        content = <p className={classes.loading}>Loading...</p>
    }

    if (currWeatherError) {
        content = <p>{currWeatherError}</p>
    }
    if (!isLoading && !currWeatherError) {
        content = <Fragment>
            <WeatherIcon temperatureInfo={temperatureInfo} />
            <Temperature temperatureInfo={temperatureInfo} />
        </Fragment>
    }

    return (
        <div className={classes.current}>
            <DateLocation infoLocation={infoLocation} />
            {content}
        </div>
    )
}
export default CurrentWeather