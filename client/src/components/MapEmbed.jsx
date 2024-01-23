import { Typography } from "@mui/material";

const MapEmbed = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="text-center">
        <Typography
          variant="h3"
          style={{ marginBottom: "1.5rem", color: "#AC2333" }}
        >
          Where To Find Us
        </Typography>
      </div>
        <div
            className="flex items-center justify-center"
            style={{ position: "relative", width: "100%", overflow: "hidden" }}
        >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5008.130854538936!2d36.79737912166468!3d-1.2880082065870464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1185229aaeb7%3A0x6b94799e9e7dd116!2sMosota%20Abunga%26%20Associates%20Advocates%2C%20Llp!5e0!3m2!1sen!2ske!4v1705957733909!5m2!1sen!2ske"
          width="80%"
          height="600px"
          style={{ border: 0, paddingBottom: "3%" }} // Adjust this percentage based on your preference
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
