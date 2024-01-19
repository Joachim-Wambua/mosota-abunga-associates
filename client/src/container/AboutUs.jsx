import { Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <>
      <section id="about-section">
        <div className="about text-center">
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
            <p className="abt-txt lg:max-w-lg leading-7" >
              Mosota Abunga & Associates Advocates stands out as a boutique law
              firm excelling in commercial, property, and dispute resolution
              law, with expertise spanning diverse legal areas. Our team,
              comprised of seasoned lawyers, is committed to delivering
              high-quality legal services. Whether you require advice, document
              review, or representation in any of our specialized practice
              areas, Mosota Abunga & Associates Advocates ensures professional
              and competent assistance. When you need a lawyer in Kenya, entrust
              your legal matters to us. With a broad range of practice areas,
              our specialist team guarantees nothing less than the best outcomes
              tailored to your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
