import { Typography, Container, Button } from "@mui/material";
import Navbar from "../components/NavBar/Navbar";

const Header = () => {
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
