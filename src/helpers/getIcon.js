import clearsky from '../images/clearsky2.png'
import rain from '../images/rain2.png'
import fewclouds from '../images/fewclouds2.png'
import mist from '../images/mist2.png'
import scatteredclouds from '../images/scatteredclouds2.png'
import showerrain from '../images/showerrain2.png'
import snow from '../images/snow2.png'
import thunderstorm from '../images/thunderstorm2.png'

export const getIcon = (icon) => {
    switch(icon) {
        case '01d': case '01n':
            return clearsky;
            
        case '10d': case '10n':
            return rain;
            
        case '04d': case '04n':
            return scatteredclouds;
            
        case '02d': case '02n':
            return fewclouds;
            
        case '50d': case '50n':
            return mist;
            
        case '03d': case '03n':
            return scatteredclouds;
            
        case '09d': case '09n':
            return showerrain;
             
        case '13d': case '13n':
            return snow;
            
        case '11d': case '11n':
            return thunderstorm;
            
        default:
            return null
        
    }
}