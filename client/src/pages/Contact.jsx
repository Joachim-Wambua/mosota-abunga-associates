import DynamicHeader from "../components/DynamicHeader"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";

const Contact = () => {
  return (
    <>  
    <DynamicHeader headerTitle="Contact Us" src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705956580/still-life-with-scales-justice_2_clkcnl.jpg" />
    <ContactForm />
    <MapEmbed />
    <Footer />
    </>
  )
}

export default Contact
