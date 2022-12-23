import { AppBar } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TopNavBar from "./components/TopNavBar";
import Button from "@mui/material/Button";
import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchPage(props) {
  const [country, setCountry] = useState("");
  const [indicator, setIndicator] = useState("");
  const [indicators, setIndicators] = useState([
    "Net errors and omissions (BoP, current US$)",
  ]); //This state contains list of all indicators
  const [countryNames, setCountryNames] = useState(["Germany"]);
  const [startYear, setStartYear] = React.useState(dayjs("2022-04-07"));
  const [endYear, setEndYear] = React.useState(dayjs("2022-04-07"));
  const [startValue, setStartValue] = React.useState(dayjs("2022-04-07"));
  const [endValue, setEndValue] = React.useState(dayjs("2022-04-07"));

  const onCountryInputChange = (e) => {
    setCountry(e.target.value);
  };

  const onIndicatorInputChange = (e) => {
    setIndicator(e.target.value);
  };

  async function fetchCountry() {
    const apiResponse = await fetch(
      `http://127.0.0.1:5000/countries/${country.target.childNodes[0].data}` //State for some reason is storing syntheticBaseEvent instead of string
    );
    const countryData = await apiResponse.json();
    console.log(countryData);
  }

  async function fetchIndicators() {
    const apiResponse = await fetch(
      "http://127.0.0.1:5000/countries/indicators"
    );
    const indicators = await apiResponse.json();
    return indicators;
  }

  async function fetchAllCountryNames() {
    const apiResponse = await fetch("http://127.0.0.1:5000/countries/allnames");
    const allNames = await apiResponse.json();
    return allNames;
  }

  function setSearchParams() {
    props.changeCountry(country.target.childNodes[0].data);
    props.changeIndicator(indicator.target.childNodes[0].data);
    // console.log(startYear);
    props.changeStartYear(startYear);
    props.changeEndYear(endYear);
  }

  useEffect(() => {
    (async function () {
      const indicatorsList = await fetchIndicators();
      let indicatorsArray = [];
      for (let i = 0; i < indicatorsList.length; i++) {
        indicatorsArray.push(indicatorsList[i][0]);
      }
      setIndicators(indicatorsArray);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const countriesList = await fetchAllCountryNames();
      let countriesArray = [];
      for (let i = 0; i < countriesList.length; i++) {
        countriesArray.push(countriesList[i][0]);
      }
      setCountryNames(countriesArray);
    })();
  }, []);

  return (
    <div>
      <div class="textfield-container">
        <div class="countries-container">
          <Autocomplete
            sx={{ width: 200 }}
            options={countryNames}
            renderInput={(params) => (
              <TextField
                {...params}
                id="outlined-basic"
                label="Enter Country"
                variant="outlined"
                onChange={onCountryInputChange}
              />
            )}
            onInputChange={(newInputValue) => {
              setCountry(newInputValue);
            }}
          />
        </div>
        <Autocomplete
          // disablePortal
          sx={{ width: 300 }}
          options={indicators}
          renderInput={(params) => (
            <TextField
              {...params}
              id="outlined-basic"
              label="Enter Indicator"
              variant="outlined"
              onChange={onIndicatorInputChange}
            />
          )}
          onInputChange={(newInputValue) => {
            setIndicator(newInputValue);
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year"]}
            label="Start Year"
            value={startValue}
            onChange={(newValue) => {
              setStartValue(newValue);
              setStartYear(newValue["$d"].getFullYear());
              console.log(startYear);
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year"]}
            label="End Year"
            value={endValue}
            onChange={(newValue) => {
              setEndValue(newValue);
              setEndYear(newValue["$d"].getFullYear());
              console.log(endYear);
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
      </div>
      <div class="searchbutton-container">
        <Link to="/results">
          <Button variant="outlined" onClick={setSearchParams}>
            Search
          </Button>
        </Link>
      </div>
    </div>
  );
}
