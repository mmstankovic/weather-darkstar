import classes from './Temperature.module.css'

const Temperature = (props) => {
    return (
        <div className={classes.temperature}>
            <div className={classes.degree}>{props.temperatureInfo.current}&#176;</div>
            <p>Feels like {props.temperatureInfo.feelsLike}&#176;</p>
        </div>
    )
}
export default Temperature