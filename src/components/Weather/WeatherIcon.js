import { getIcon } from '../../helpers/getIcon'

const WeatherIcon = (props) => {
    return (
        <div>
            <img src={getIcon(props.temperatureInfo.icon)} alt="weather icon" />
            <p style={{textAlign: 'center'}}>{props.temperatureInfo.description}</p>
        </div>
    )
}
export default WeatherIcon

/*
const getIcon = (description) => {
        switch(description) {
            case 'clear sky':
                return clearsky;
                
            case 'rain':
                return rain;
                
            case 'broken clouds':
                return brokenclouds;
                
            case 'few clouds':
                return fewclouds;
                
            case 'mist':
                return mist;
                
            case 'scattered clouds':
                return scatteredclouds;
                
            case 'shower rain':
                return showerrain;
                 
            case 'snow':
                return snow;
                
            case 'thunder storm':
                return thunderstorm;
    
            case 'overcast clouds':
                return brokenclouds;
            case 'light rain':
                return rain;
                
            default:
                return null
            
        }
       }
       */