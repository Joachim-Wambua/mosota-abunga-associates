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
        src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705666313/patrick-fore-H5Lf0nGyetk-unsplash_yminvw.jpg"
        backgroundPosition="center"
      />
      <WhoWeAre />
      <ValueProp />
      <CallToActionA />
      <Footer />
    </>
  );
};

export default About;
