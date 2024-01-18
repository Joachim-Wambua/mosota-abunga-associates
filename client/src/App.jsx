import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import Navbar from "./components/NavBar/Navbar"; 
import Header from "./container/Header";
import Footer from "./components/Footer";
import AboutUs from "./container/AboutUS";
import Services from "./container/Services";
import PracticeAreas from "./container/PracticeAreas";
import CallToActionA from "./container/CallToActionA";
import CallToActionB from "./container/CallToActionB";
import Team from "./container/Team";
import Articles from "./container/Articles";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          {/* <Navbar /> */}
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
      </ThemeProvider>
    </>
  );
}

export default App;
