import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Main />
      {/* <NavBar />
      <Home /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
