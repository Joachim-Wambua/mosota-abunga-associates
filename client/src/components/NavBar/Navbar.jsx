import Button from "@mui/material/Button";
import "./navbar.css";
import theme from "../../constants/colors";
import { ThemeProvider } from "@mui/material/styles";

const Navbar = () => {
  

  return (
    <ThemeProvider theme={theme}>
      <nav className="nav-wrapper">
        <div className="nav-logo">
          <img
            src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705499897/gmzjo9mpovuxnxtivtgj.png"
            alt="logo"
          />
        </div>
        <ul className="nav-links">
          <li className="p_opensans">Home</li>
          <li className="p_opensans">Practice</li>
          <li className="p_opensans">About</li>
          <li className="p_opensans">Articles</li>
          <li className="p_opensans">Contact</li>
        </ul>

        <div>
          <div className="profile-btn">
            <Button variant="contained" color="maroon_primary">
              Success
            </Button>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
