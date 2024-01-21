import { Typography, Button } from "@mui/material";

const CallToActionB = () => {
  return (
    <>
      <section className="cta-one-section" id="cta-one">
        <div className="cta-one-content text-center">
          <Typography variant="h3" style={{ marginBottom: "1.8rem" }}>
            DISCUSS YOUR LEGAL MATTER WITH OUR LAWYERS TODAY
          </Typography>
          <Typography
            variant="h4"
            style={{
              marginBottom: "1.8rem",
              marginTop: "2.1rem",
              fontSize: "1.5rem",
            }}
          >
            CONTACT OUR TEAM
          </Typography>
          <div className="mt-5">
            <Button variant="outlined" color="white" size="large">
              <Typography variant="body1" style={{ fontWeight: 600 }}>
                Get In Touch
              </Typography>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToActionB;
