import "./App.scss";
import "../src/components/mance-web/mance-styles/pricing.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Section from "./components/mance-web/section";
import Resources from "./components/mance-web/resources";
import Pricing from "./components/mance-web/pricing";
import WaitList from "./components/mance-web/waitlist";
import Login from "./components/mance-web/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="#resources" element={<Resources />} /> */}
          <Route path="/waitlist" element={<WaitList />} />
          <Route path="/login-successful" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
