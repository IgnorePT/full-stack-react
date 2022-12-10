import TodaySummary from "./TodaySummary";

const AppBody = (props) => {
  if (props.weather != null) {
    return <TodaySummary weather={props.weather} />;
  }
};

export default AppBody;
