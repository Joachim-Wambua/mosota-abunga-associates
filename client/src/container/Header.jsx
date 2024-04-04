import { Typography, Container, Button } from "@mui/material";
import Navbar from "../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    // Navigate to the desired endpoint
    navigate("/contact");
  };

  const slides = [
    {
      id: 1,
      title: "WELCOME TO MAA ADVOCATES, LLP",
      subtitle:
        "We are a law firm specializing in commercial law, property law and litigation. We strive to provide smart and practical legal solutions for all our clients.",
      image:
        "https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705580776/header-img_v82yvl.png",
    },
    // Add more objects for additional slides
    {
      id: 2,
      title: "WELCOME TO MAA ADVOCATES, LLP",
      subtitle:
        "From courtrooms to family matters, we excel in litigation, real estate, family law, and trust administration, ensuring justice and stability.",
      image:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1712050586/home-header-4_lnjpys.png",
    },
    {
      id: 3,
      title: "WELCOME TO MAA ADVOCATES, LLP",
      subtitle:
        "Safeguarding IP, navigating finance, trade, and data security, we offer tailored legal solutions for modern businesses.",
      image:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1712044453/home-header-2_g32nqg.png",
    },
  ];

  return (
    <>
      <header className="header-container">
        <Navbar />
        <Slider
          dots={false}
          infinite={true}
          speed={1000}
          arrows={false}
          autoplay={true}
          autoplaySpeed={5000}
          slidesToShow={1}
          slidesToScroll={1}
          // className="slider-item"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex justify-center items-center slider-item"
              
            >
              <div
                className="slider-image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  // width: "100vw",
                }}
              />
              <div className="header-content">
                <Container>
                  <Typography
                    variant="h3"
                    className="header-title"
                    gutterBottom
                  >
                    {slide.title}
                  </Typography>
                  <Typography variant="subtitle1">{slide.subtitle}</Typography>
                  <div className="mt-5">
                    <Button
                      variant="contained"
                      color="maroon_primary"
                      size="large"
                      onClick={handleContactButtonClick}
                    >
                      <Typography variant="body1" style={{ fontWeight: 600 }}>
                        CONTACT US
                      </Typography>
                    </Button>
                  </div>
                </Container>
              </div>
            </div>
          ))}
        </Slider>
      </header>
    </>
  );
};

export default Header;
