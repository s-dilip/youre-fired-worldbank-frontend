import logo from "./logo.svg";
import "./App.css";
import SearchPage from "./SearchPage";
import TopNavBar from "./components/TopNavBar";
import { Routes, Route } from "react-router-dom";
import ResultsPage from "./ResultsPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage.js";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const changeUser = (username) => {
    setCurrentUser(username);
  };
  return (
    <div>
      <TopNavBar />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route
          path="/create-account"
          element={<CreateAccountPage changeUser={changeUser} />}
        />
        <Route path="/login" element={<LoginPage changeUser={changeUser} />} />
      </Routes>
    </div>
  );
}

export default App;
