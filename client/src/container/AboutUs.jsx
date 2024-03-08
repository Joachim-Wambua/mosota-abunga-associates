import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  // Function to handle About Page Button Clicks
  const handleAboutClick = () => {
    // Navigate to the desired endpoint
    navigate("/about");
  };

  return (
    <>
      <section id="about-section" className="about-section">
        <div className="text-center">
          <Typography
            variant="h3"
            style={{ marginBottom: "0.75rem", color: "#Ac2333" }}
          >
            About Us
          </Typography>
        </div>

        <div className=" about-content flex justify-wrap items-center py-4 pb-10 max-xl:flex-col-reverse gap-10">
          <div className="about-image flex-1">
            <img
              src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705668080/about-image_dhmlyb.png"
              alt="about-image"
              width={450}
              className="object-contain w-full"
            />
          </div>

          <div className="about-text flex flex-1 flex-col ml-10 mx-12">
            <p className="abt-txt lg:max-w-lg leading-7 text-justify">
              Mosota Abunga & Associates Advocates, LLP stands out as a boutique
              law firm excelling in commercial, property, and dispute resolution
              law, with expertise spanning diverse legal areas. Our team,
              comprised of seasoned lawyers, is committed to delivering
              high-quality legal services. Whether you require advice, document
              review, or representation in any of our specialized practice
              areas, Mosota Abunga & Associates Advocates, LLP ensures
              professional and competent assistance. When you need a lawyer in
              Kenya, entrust your legal matters to us.
            </p>

            <div className="mt-8 flex">
              <Button
                variant="outlined"
                size="large"
                className=""
                color="maroon_primary"
                onClick={handleAboutClick}
              >
                <Typography
                  variant="body2"
                  style={{ fontWeight: 600, padding: 3 }}
                >
                  Learn More
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
