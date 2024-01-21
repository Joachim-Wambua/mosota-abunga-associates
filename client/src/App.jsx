import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./constants/theme";
import Header from "./container/Header";
import Footer from "./components/Footer";
import AboutUs from "./container/AboutUs";
import Services from "./container/Services";
import PracticeAreas from "./container/PracticeAreas";
import CallToActionA from "./container/CallToActionA";
import CallToActionB from "./container/CallToActionB";
import Team from "./container/Team";
import Articles from "./container/Articles";

// Page Imports
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Lawyers from "./pages/Lawyers";

import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/lawyers" element={<Lawyers />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

const Home = () => (
  <>
    <div>
      <Header />
      <PracticeAreas />
      <CallToActionA />
      <AboutUs />
      <Services />
      <Team />
      <Articles />
      <CallToActionB />
      <Footer />
    </div>
  </>
);

export default App;
