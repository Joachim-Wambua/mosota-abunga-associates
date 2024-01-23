import { Typography, Container, Button } from "@mui/material";
import Navbar from "../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    // Navigate to the desired endpoint
    navigate("/contact");
  };

  return (
    <>
      <header className="header-container">
        <Navbar />
        <div className="main-header">
          <Container>
            <div className="header-content">
              <Typography variant="h3" className="header-title" gutterBottom>
                WELCOME TO MAA ADVOCATES, LLP
              </Typography>
              <Typography variant="subtitle1">
                We are a law firm specialising in commercial law, property law
                and litigation. We strive to provide smart and practical legal
                solutions for all our clients.
              </Typography>

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
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
