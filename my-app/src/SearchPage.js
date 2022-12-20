import { AppBar } from "@mui/material";
import TextField from "@mui/material/TextField";
import TopNavBar from "./components/TopNavBar";
import YearPicker from "./components/YearPicker";
import BasicSelect from "./components/YearPicker";

export default function SearchPage() {
  return (
    <div>
      <TopNavBar />

      <div class="textfield-container">
        <TextField
          id="outlined-basic"
          label="Enter Country"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Enter Indicator"
          variant="outlined"
        />
        <YearPicker label="Start Year" />
        <YearPicker label="End Year" />
      </div>
    </div>
  );
}
