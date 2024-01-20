import { Typography } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import { profiles } from "../constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="lawyers" className="pt-10 profile-section">
        <div className="text-center">
          <Typography
            variant="h3"
            style={{ marginBottom: "0.75rem", color: "#AC2333" }}
          >
            Our Lawyers
          </Typography>
        </div>

        <div className="w-3/4 m-auto pb-10">
          <div className="mt-10">
            <Slider {...settings}>
              {profiles.map((profile) => (
                <ProfileCard key={profile.name} {...profile} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
