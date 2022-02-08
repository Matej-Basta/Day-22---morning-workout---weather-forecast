import { DayForecast } from "./DayForecast";

export const WeekForecast = (props) => {
  return (
    <div className="week-forecast">
      <DayForecast
        day="Mon"
        dayTemp="18°"
        nightTemp="11°"
        additional="cloudy"
      />
      <DayForecast
        day="Tue"
        dayTemp="21°"
        nightTemp="15°"
        additional="partly-cloudy"
      />
      <DayForecast day="Wed" dayTemp="8°" nightTemp="1°" additional="rainy" />
      <DayForecast day="Thu" dayTemp="-2°" nightTemp="-7°" additional="snowy" />
      <DayForecast
        day="Fri"
        dayTemp="28°"
        nightTemp="21°"
        additional="stormy-rain"
      />
      <DayForecast
        day="Sat"
        dayTemp="35°"
        nightTemp="27°"
        additional="stormy"
      />
      <DayForecast day="Sun" dayTemp="28°" nightTemp="22°" additional="sunny" />
    </div>
  );
};
