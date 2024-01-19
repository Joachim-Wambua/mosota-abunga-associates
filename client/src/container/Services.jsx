import { Typography } from "@mui/material";
import { services } from "../constants/data";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@mui/material";

const Services = () => {
  return (
    <>
      <section id="services" className="services flex flex-col items-center">
        <div className="about text-center">
          <Typography
            variant="h3"
            style={{ marginBottom: "0.75rem", color: "#Ac2333" }}
          >
            Services
          </Typography>
        </div>
        <div className="max-container flex justify-center flex-wrap gap-9">
          {/* Services Section */}
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-8" >
          <Button
            variant="outlined"
            size="large"
            color="maroon_primary"
          >
            <Typography variant="body2" style={{ fontWeight: 600, padding: 3 }}>
              Learn More
            </Typography>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
