import { useState } from "react";
import { Button, Typography, Menu, MenuItem } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [practiceAnchorEl, setPracticeAnchorEl] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleAboutMenuOpen = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handlePracticeMenuOpen = (event) => {
    setPracticeAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAboutAnchorEl(null);
    setPracticeAnchorEl(null);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-logo">
        <img
          src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705499896/lpv4hjkskmzrjqi0wbmg.png"
          alt="logo"
        />
      </div>
      <ul className="nav-links">
        <li className="p_opensans">
          <a href="#">Home</a>
        </li>
        <li className="p_opensans">
          <a
            className="drop-menu"
            href="#"
            onMouseOver={handlePracticeMenuOpen}
          >
            Practice <MdArrowDropDown />
          </a>
          <Menu
            id="practice-menu"
            anchorEl={practiceAnchorEl}
            open={Boolean(practiceAnchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
          >
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Corporate & Commercial</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Media & Technology</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Energy (Oil & Gas)</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Public-Private Law</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Financial Transactions</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Criminal Law</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Property & Real Estate</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Immigration & Labor</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Family & Succession</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Tax Law</a>
            </MenuItem>
          </Menu>
        </li>
        <li className="p_opensans">
          <a className="drop-menu" href="#" onMouseOver={handleAboutMenuOpen}>
            About <MdArrowDropDown />
          </a>
          <Menu
            id="about-menu"
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
          >
            <MenuItem onClick={handleMenuClose}>
              <a href="#">About Us</a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="#">Our Lawyers</a>
            </MenuItem>
          </Menu>
        </li>
        <li className="p_opensans">
          <a href="#">Articles</a>
        </li>
        <li className="p_opensans">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="profile-btn">
        <Button
          variant="contained"
          className="profile_button"
          size="medium"
          color="maroon_primary"
        >
          <Typography
            variant="body1"
            style={{ fontWeight: 600 }}
            className="profile_typo"
          >
            Download Profile
          </Typography>
        </Button>

        <Button
          className="profile_button"
          size="medium"
          style={{ marginTop: "0.5rem" }}
          color="white"
          startIcon={<FaPhoneAlt />}
        >
          <Typography variant="body2" style={{ fontWeight: 600 }}>
            +254 725 735 499
          </Typography>
        </Button>
      </div>

      <div className="navbar-sm">
        <GiHamburgerMenu
          className="hamburger-menu"
          fontSize={27}
          color="maroon_primary"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="navbar-sm-overlay flex_center slide-bottom">
            <IoIosClose
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="nav-links-sm">
              <li className="p_opensans">
                <a href="#">Home</a>
              </li>
              <li className="p_opensans">
                <a
                  className="drop-menu"
                  href="#"
                  onMouseOver={handlePracticeMenuOpen}
                >
                  Practice <MdArrowDropDown />
                </a>
                <Menu
                  id="practice-menu"
                  anchorEl={practiceAnchorEl}
                  open={Boolean(practiceAnchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Corporate & Commercial</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Media & Technology</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Energy (Oil & Gas)</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Public-Private Law</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Financial Transactions</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Criminal Law</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Property & Real Estate</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Immigration & Labor</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Family & Succession</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Tax Law</a>
                  </MenuItem>
                </Menu>
              </li>
              <li className="p_opensans">
                <a
                  className="drop-menu"
                  href="#"
                  onMouseOver={handleAboutMenuOpen}
                >
                  About <MdArrowDropDown />
                </a>
                <Menu
                  id="about-menu"
                  anchorEl={aboutAnchorEl}
                  open={Boolean(aboutAnchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">About Us</a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a href="#">Our Lawyers</a>
                  </MenuItem>
                </Menu>
              </li>
              <li className="p_opensans">
                <a href="#">Articles</a>
              </li>
              <li className="p_opensans">
                <a href="#">Contact</a>
              </li>
            </ul>

            <div className="profile-btns">
              <Button
                variant="contained"
                className="profile_button"
                size="medium"
                color="maroon_primary"
              >
                <Typography
                  variant="body1"
                  style={{ fontWeight: 600 }}
                  className="profile_typo"
                >
                  Download Profile
                </Typography>
              </Button>
              <div className="spacer" />
              <Button
                variant="outlined"
                className="profile_button"
                size="medium"
                color="white"
                startIcon={<FaPhoneAlt />}
              >
                <Typography variant="body2" style={{ fontWeight: 600 }}>
                  +254 725 735 499
                </Typography>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
