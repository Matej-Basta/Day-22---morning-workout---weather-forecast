export const DayForecast = (props) => {
  return (
    <div className="day-forecast">
      <div className="day-forecast__header">{props.day}</div>
      <div className="day-forecast__body">
        <div
          className={`day-forecast__image weather-${props.additional}`}
        ></div>
        <div className="day-forecast__temps">
          <span className="temp-day">{props.dayTemp}</span>
          <span className="temp-night">{props.nightTemp}</span>
        </div>
      </div>
    </div>
  );
};
