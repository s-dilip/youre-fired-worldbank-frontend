import logo from "./logo.svg";
import "./App.css";
import SearchPage from "./SearchPage";
import TopNavBar from "./components/TopNavBar";
import { Routes, Route } from "react-router-dom";
import ResultsPage from "./ResultsPage";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  return (
    <div>
      <TopNavBar />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
