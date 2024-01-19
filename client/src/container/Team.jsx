import { Typography } from "@mui/material";

const Team = () => {
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

        <div className="profile-wrapper">
          <div className="img-area">
            <div className="img-box">
              <img
                src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705689915/Wakili_iuvm0z.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-title">
              <Typography variant="h3" style={{ marginBottom: "0.75rem" }}>
                Victor Mosota
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginBottom: "0.75rem" }}
              >
                LLB, LLM, MBA
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ marginBottom: "0.75rem" }}
              >
                Legal Practice Director
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ marginBottom: "0.75rem" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                harum ea similique vero voluptatibus, esse enim omnis
                necessitatibus sint explicabo pariatur asperiores perspiciatis
                ullam quasi animi magnam, quos earum commodi? Consequatur
                voluptates voluptas quis minima facere quisquam, pariatur
                possimus assumenda recusandae quas! Harum, voluptate soluta.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
