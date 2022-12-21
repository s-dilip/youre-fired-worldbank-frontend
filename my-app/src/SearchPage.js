import { AppBar } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TopNavBar from "./components/TopNavBar";
import YearPicker from "./components/YearPicker";
import BasicSelect from "./components/YearPicker";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function SearchPage() {
  //   const [countryList, setCountryList] = useState([{ country: "" }]);
  const [country, setCountry] = useState("");
  const [indicator, setIndicator] = useState("");
  const [indicators, setIndicators] = useState([]); //This state contains list of all indicators

  const onCountryInputChange = (e) => {
    setCountry(e.target.value);
  };

  const onIndicatorInputChange = (e) => {
    setIndicator(e.target.value);
  };

  async function fetchCountry() {
    const apiResponse = await fetch(
      `http://127.0.0.1:5000/countries/${country}`
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

  return (
    <div>
      <TopNavBar />

      <div class="textfield-container">
        <div class="countries-container">
          <TextField
            id="outlined-basic"
            label="Enter Country"
            variant="outlined"
            onChange={onCountryInputChange}
          />
          {/* <Button variant="outlined">Add Country</Button> */}
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
        <YearPicker label="Start Year" />
        <YearPicker label="End Year" />
      </div>
      <div class="searchbutton-container">
        <Button variant="outlined" onClick={fetchCountry}>
          Search
        </Button>
      </div>
    </div>
  );
}
