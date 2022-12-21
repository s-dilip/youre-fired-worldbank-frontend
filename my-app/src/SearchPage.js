import { AppBar } from "@mui/material";
import TextField from "@mui/material/TextField";
import TopNavBar from "./components/TopNavBar";
import YearPicker from "./components/YearPicker";
import BasicSelect from "./components/YearPicker";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchPage() {
  //   const [countryList, setCountryList] = useState([{ country: "" }]);
  const [country, setCountry] = useState("");

  const onCountryInputChange = (e) => {
    setCountry(e.target.value);
  };

  async function fetchCountry() {
    const apiResponse = await fetch(
      `http://127.0.0.1:5000/countries/${country}`
    );
    const countryData = await apiResponse.json();
    console.log(countryData);
  }

  return (
    <div>
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
        <TextField
          id="outlined-basic"
          label="Enter Indicator"
          variant="outlined"
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
