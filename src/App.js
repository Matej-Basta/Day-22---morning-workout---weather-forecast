import logo from "./logo.svg";
import "./App.css";
import { WeekForecast } from "./components/WeekForecast";

function App() {
  return (
    <div className="container">
      <h1>Weekly Weather Forecast</h1>
      <WeekForecast />
    </div>
  );
}

export default App;
