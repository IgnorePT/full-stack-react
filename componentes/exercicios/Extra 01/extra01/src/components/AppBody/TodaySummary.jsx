const TodaySummary = (props) => {
  const weather = props.weather;

  return (
    <div className="today_summary">
      <span>{weather.base}</span>
    </div>
  );
};

export default TodaySummary;
