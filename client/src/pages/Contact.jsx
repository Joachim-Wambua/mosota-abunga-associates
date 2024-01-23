import DynamicHeader from "../components/DynamicHeader";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";

const Contact = () => {
  return (
    <>
      <DynamicHeader
        headerTitle="Contact Us"
        src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1706038450/still-life-with-scales-justice_2_ffcyob.jpg"
        backgroundPosition='center'
      />
      <ContactForm />
      <MapEmbed />
      <Footer />
    </>
  );
};

export default Contact;
