import { useState } from "react";
import IndicatorChart from "./components/IndicatorChart";

export default function ResultsPage() {
  const country = "Germany";
  const startYear = 1995;
  const endYear = 2011;
  const indicator = "CO2 emissions (kt)";

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
        countryName={country}
        indicatorChosen={indicator}
      />
    </div>
  );
}
