import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallToActionA = () => {
  const navigate = useNavigate();

  // Function to handle Contact Button Clicks
  const handleTeamButtonClick = () => {
    // Navigate to the desired endpoint
    navigate("/lawyers");
  };

  return (
    <>
      <section className="cta-one-section" id="cta-one">
        <div className="cta-one-content text-center">
          <Typography variant="h3" style={{ marginBottom: "1.8rem" }}>
            Our Trusted Lawyers
          </Typography>
          <Typography variant="body1">
            For a lawyer in Kenya that you can trust to represent your best
            interests, contact the team at AVA Law, LLP. We are proud to be a
            team of our outstanding advocates with years of experience in
            commercial, property and litigation in Kenya. Rely on our team for
            the best advice and legal representation in all matters.
          </Typography>
          <Typography
            variant="h4"
            style={{
              marginBottom: "1.8rem",
              marginTop: "2.1rem",
              fontSize: "1.8rem",
              fontWeight: "bold",
            }}
          >
            CONTACT OUR TEAM
          </Typography>
          <div className="mt-5">
            <Button
              variant="contained"
              color="maroon_primary"
              size="large"
              onClick={handleTeamButtonClick}
            >
              <Typography variant="body1" style={{ fontWeight: 600 }}>
                OUR TEAM
              </Typography>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToActionA;
