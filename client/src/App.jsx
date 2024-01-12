import Navbar from "./components/Navbar";
import Header from "./container/Header";
import Footer from "./components/Footer";
import AboutUs from "./container/AboutUS";
import Services from "./container/Services";
import PracticeAreas from "./container/PracticeAreas";
import CallToActionA from "./container/CallToActionA";
import CallToActionB from "./container/CallToActionB";
import Team from "./container/Team";
import Articles from "./container/Articles";

function App() {
  return (
    <>
      <div>
        <Navbar />
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
}

export default App;
