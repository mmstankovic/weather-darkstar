import classes from './DateLocation.module.css'

const DateLocation = (props) => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const now = new Date()
    const today = days[now.getDay()]
    const day = now.getDate()

    return (
        <div className={classes['date-location']}>
            <h3>{today} {day}</h3>
            <p>Today in {props.infoLocation.city}, {props.infoLocation.country}</p>
        </div>
    )
}
export default DateLocation