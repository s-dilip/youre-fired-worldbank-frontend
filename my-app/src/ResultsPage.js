import { useState } from "react";
import IndicatorChart from "./components/IndicatorChart";

export default function ResultsPage(props) {
  const country = props.country;
  const startYear = 1995; //Change This
  const endYear = 2011; //Change This
  const indicator = props.indicator;

  let years = [];

  const [dataPoints, setDataPoints] = useState([]);

  for (let i = startYear; i < endYear + 1; i++) {
    years.push(i);
  }

  async function fetchIndicatorForYear(year) {
    const apiResponse = await fetch(
      `http://127.0.0.1:5000/countries/${country}/${indicator}/${year}`
    );
    const dataPoint = await apiResponse.json();
    return dataPoint[0].value;
  }

  (async function () {
    let indicatorsData = [];
    for (const year of years) {
      const datapoint = await fetchIndicatorForYear(year);
      indicatorsData.push(datapoint);
    }
    setDataPoints(indicatorsData);
  })();

  return (
    <div>
      <h1>results</h1>
      <IndicatorChart
        datapoints={dataPoints}
        years={years}
        countryName={props.country}
        indicatorChosen={props.indicator}
        sy={props.startYear}
      />
    </div>
  );
}
