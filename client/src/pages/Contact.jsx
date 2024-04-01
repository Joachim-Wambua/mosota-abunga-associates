import DynamicHeader from "../components/DynamicHeader";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";

const Contact = () => {
  return (
    <>
      <DynamicHeader
        headerTitle="Contact Us"
        src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712006472/contact-header_rcbbfc.png"
        backgroundPosition="center"
        header_height="60vh"
      />
      <ContactForm />
      <MapEmbed />
      <Footer />
    </>
  );
};

export default Contact;
