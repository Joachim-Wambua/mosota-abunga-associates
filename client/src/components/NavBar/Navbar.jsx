import { useState, useEffect } from "react";
import { Button, Typography, Menu, MenuItem, MenuList } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [practiceAnchorEl, setPracticeAnchorEl] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pdfLink =
    "https://drive.google.com/uc?export=download&id=1v9If8Ny0188o883QfoNqWbjjo1y4rB_M";

  const [logoSrc, setLogoSrc] = useState(
    "https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705499896/lpv4hjkskmzrjqi0wbmg.png"
  );
  const [buttonColor, setButtonColor] = useState("white");

  const originalLogo =
    "https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705499896/lpv4hjkskmzrjqi0wbmg.png";

  const scrolledLogoSrc =
    "https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705499897/gmzjo9mpovuxnxtivtgj.png";

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        setLogoSrc(isScrolled ? scrolledLogoSrc : logoSrc);
        setButtonColor(isScrolled ? "black" : "white");
      }
      // Check if the user has scrolled back to the top
      if (!isScrolled && window.scrollY === 0) {
        setLogoSrc(originalLogo);
        setButtonColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <a href="/">
          <img src={logoSrc} alt="logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li className="p_opensans">
          <a href="/">Home</a>
        </li>
        <li className="p_opensans">
          <a className="drop-menu" href="#" onClick={handlePracticeMenuOpen}>
            Practice <MdArrowDropDown />
          </a>
          <Menu
            id="practice-menu"
            anchorEl={practiceAnchorEl}
            open={Boolean(practiceAnchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onClick: handleMenuClose }}
          >
            <MenuList
              style={{
                backgroundColor: "#f2f2f2",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                borderRadius: "9px",
              }}
            >
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Corporate & Commercial</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Media & Technology</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Energy (Oil & Gas)</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Public-Private Law</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Financial Transactions</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Criminal Law</a>
              </MenuItem>
              <MenuItem className=""menu-item onClick={handleMenuClose}>
                <a className="menu-link" href="#">Property & Real Estate</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Immigration & Labor</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Family & Succession</a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="#">Tax Law</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
        <li className="p_opensans">
          <a className="drop-menu" href="#" onClick={handleAboutMenuOpen}>
            About <MdArrowDropDown />
          </a>
          <Menu
            id="about-menu"
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onClick: handleMenuClose }}
          >
            <MenuList
              style={{
                backgroundColor: "#f2f2f2",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                borderRadius: "9px",
              }}
            >
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="/about">
                  About Us
                </a>
              </MenuItem>
              <MenuItem className="menu-item" onClick={handleMenuClose}>
                <a className="menu-link" href="/lawyers">
                  Our Lawyers
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
        <li className="p_opensans">
          <a href="/articles">Articles</a>
        </li>
        <li className="p_opensans">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="profile-btn">
        <Button
          variant="contained"
          size="medium"
          color="maroon_primary"
          href={pdfLink}
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
          style={{ marginTop: "0.5rem", color: buttonColor }}
          startIcon={<FaPhoneAlt className="call-icon" />}
        >
          <p style={{ fontWeight: 600 }}>+254 720 101 101</p>
        </Button>
      </div>

      <div className="navbar-sm">
        <RxHamburgerMenu
          className={`hamburger-menu ${
            scrolled ? "maroon-icon" : "white-icon"
          }`}
          fontSize={30}
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
                <a href="/">Home</a>
              </li>
              <li className="p_opensans">
                <a
                  className="drop-menu"
                  href="#"
                  onClick={handlePracticeMenuOpen}
                >
                  Practice <MdArrowDropDown />
                </a>
                <Menu
                  id="practice-menu"
                  anchorEl={practiceAnchorEl}
                  open={Boolean(practiceAnchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{ onClick: handleMenuClose }}
                >
                  <MenuList
                    style={{
                      backgroundColor: "#f2f2f2",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      borderRadius: "9px",
                    }}
                  >
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Corporate & Commercial
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Media & Technology
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Energy (Oil & Gas)
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Public-Private Law
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Financial Transactions
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Criminal Law
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Property & Real Estate
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Immigration & Labor
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Family & Succession
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="#">
                        Tax Law
                      </a>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <a className="drop-menu" href="#" onClick={handleAboutMenuOpen}>
                  About <MdArrowDropDown />
                </a>
                <Menu
                  id="about-menu"
                  anchorEl={aboutAnchorEl}
                  open={Boolean(aboutAnchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{ onClick: handleMenuClose }}
                >
                  <MenuList
                    style={{
                      backgroundColor: "#f2f2f2",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      borderRadius: "9px",
                    }}
                  >
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="/about">
                        About Us
                      </a>
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={handleMenuClose}>
                      <a className="menu-link" href="/lawyers">
                        Our Lawyers
                      </a>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li className="p_opensans">
                <a href="/articles">Articles</a>
              </li>
              <li className="p_opensans">
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <div className="profile-btns">
              <Button
                variant="contained"
                className="profile_button"
                size="medium"
                color="maroon_primary"
                href={pdfLink}
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
                  +254 720 101 101
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
