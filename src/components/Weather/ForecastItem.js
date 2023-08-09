import classes from './Forecast.module.css'
import { getIcon } from '../../helpers/getIcon'

const ForecastItem = (props) => {
   const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
   const day = new Date(props.dayName).getDay()
   const fDay = days[day]
    return (
        <li>
            <div>
                {fDay}
            </div>
            <div className={classes['image-container']}>
                <img src={getIcon(props.icon)} alt='current weather icon'/>
            </div>
            <div>
                {props.maxTemp}&#176;
            </div>
        </li>
    )
}
export default ForecastItem
