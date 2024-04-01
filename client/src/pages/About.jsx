import CallToActionA from "../container/CallToActionA";
import Footer from "../components/Footer";
import DynamicHeader from "../components/DynamicHeader";
import WhoWeAre from "../components/WhoWeAre";
import ValueProp from "../components/ValueProp";

const About = () => {
  return (
    <>
      <DynamicHeader
        headerTitle="EXPERIENCE, TRUST, SOUND ADVICE"
        src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712006474/about-header_lqaxmz.png"
        backgroundPosition="center"
        header_height="60vh"
      />
      <WhoWeAre />
      <ValueProp />
      <CallToActionA />
      <Footer />
    </>
  );
};

export default About;
