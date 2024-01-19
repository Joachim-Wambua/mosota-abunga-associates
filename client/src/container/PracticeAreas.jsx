import { Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import practices from "../constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PracticeAreas = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section style={{ backgroundColor: "#fff" }}>
      <div className="practice-content pt-10 text-center">
        <Typography variant="h3" style={{ marginBottom: "1rem" }}>
          Practice Areas
        </Typography>
        <Typography variant="body1">
          As a specialist law firm in Kenya, we practice across a range of
          areas, including business law, commercial law, property law, trusts
          law, intellectual property law, employment law, defamation, disputes,
          estate planning and litigation.
        </Typography>
      </div>

      {/* Carousel Here */}
      <div className="w-3/4 m-auto pb-10">
        <div className="mt-10">
          <Slider {...settings}>
            {practices.map((practice) => (
              <div className="card" key={practice.title}>
                <img src={practice.img} alt="" />
                <div className="card-content">
                  <h2>{practice.title}</h2>
                  <p>{practice.description}</p>
                  <a href="#" className="button">
                    <div className="flex flex-row justify-center items-center italic hover:underline">
                      Find out more{" "}
                      <FaArrowRight fontSize={15} className="ml-2" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
