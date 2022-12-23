import logo from "./logo.svg";
import "./App.css";
import SearchPage from "./SearchPage";
import TopNavBar from "./components/TopNavBar";
import { Routes, Route } from "react-router-dom";
import ResultsPage from "./ResultsPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage.js";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [country, setCountry] = useState("");
  const changeCountry = (countryName) => {
    setCountry(countryName);
  };
  const [indicator, setIndicator] = useState("");
  const changeIndicator = (indicatorName) => {
    setIndicator(indicatorName);
  };
  const [startYear, setStartYear] = useState(null);
  const changeStartYear = (year) => {
    setStartYear(year);
  };
  const [endYear, setEndYear] = useState(null);
  const changeEndYear = (year) => {
    setEndYear(year);
  };

  const [currentUser, setCurrentUser] = useState(null);
  const changeUser = (username) => {
    setCurrentUser(username);
  };
  const logOut = () => {
    setCurrentUser(null);
  };
  return (
    <BrowserRouter>
      <TopNavBar currentUser={currentUser} logOut={logOut} />
      <Routes>
        <Route
          path="/search"
          element={
            <SearchPage
              changeCountry={changeCountry}
              changeIndicator={changeIndicator}
              changeStartYear={changeStartYear}
              changeEndYear={changeEndYear}
            />
          }
        />
        <Route
          path="/results"
          element={
            <ResultsPage
              country={country}
              indicator={indicator}
              startYear={startYear}
              endYear={endYear}
            />
          }
        />
        <Route
          path="/create-account"
          element={<CreateAccountPage changeUser={changeUser} />}
        />
        <Route path="/login" element={<LoginPage changeUser={changeUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
