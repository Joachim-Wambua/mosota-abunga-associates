import DynamicHeader from "../components/DynamicHeader";
import Footer from "../components/Footer";
import Resume from "../components/Resume";
import Navbar from "../components/NavBar/Navbar";

const LawyerProfile = () => {
  // Render the lawyer profile data
  return (
    <>
      <Navbar />
      <DynamicHeader />
      <Resume />
      <Footer />
    </>
  );
};

export default LawyerProfile;
