import logo from "./logo.svg";
import "./App.css";
import SearchPage from "./SearchPage";
import TopNavBar from "./components/TopNavBar";
import { Routes, Route } from "react-router-dom";
import ResultsPage from "./ResultsPage";

function App() {
  return (
    <div>
      <TopNavBar />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
