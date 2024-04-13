import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    setToggleMenu(false);
  };

  // Trigger phone call
  const handleCallButtonClick = () => {
    const phoneNumber = "+254720101101";
    window.open(`tel:${phoneNumber}`);
  };

  const navigate = useNavigate();

  // Function to handle Contact Button Clicks
  const handleClick = (linkId) => {
    // Navigate to the desired endpoint
    switch (linkId) {
      case "litigation-and-dispute-resolution":
        navigate(`/practice/litigation-and-dispute-resolution`);
        handleMenuClose();
        break;
      case "real-estate-and-conveyancing":
        navigate(`/practice/real-estate-and-conveyancing`);
        handleMenuClose();
        break;
      case "family-law-and-succession":
        navigate(`/practice/family-law-and-succession`);
        handleMenuClose();
        break;
      case "intellectual-property":
        navigate(`/practice/intellectual-property`);
        handleMenuClose();
        break;
      case "banking-corporate-and-financial-services":
        navigate(`/practice/banking-corporate-and-financial-services`);
        handleMenuClose();
        break;
      case "local-and-international-trade-law":
        navigate(`/practice/local-and-international-trade-law`);
        handleMenuClose();
        break;
      case "data-protection-and-security":
        navigate(`/practice/data-protection-and-security`);
        handleMenuClose();
        break;
      case "standard-operating-procedure-for-gold-purchase":
        navigate(`/practice/standard-operating-procedure-for-gold-purchase`);
        handleMenuClose();
        break;
      case "constitutional-and-administrative-law":
        navigate(`/practice/constitutional-and-administrative-law`);
        handleMenuClose();
        break;
      case "financial-and-commercial-transactions":
        navigate(`/practice/financial-and-commercial-transactions`);
        handleMenuClose();
        break;
      case "trust-and-trust-administration":
        navigate(`/practice/trust-and-trust-administration`);
        handleMenuClose();
        break;
      case "immigration-and-labour-law":
        navigate(`/practice/immigration-and-labour-law`);
        handleMenuClose();
        break;
    }
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
          <a className="drop-menu" onClick={handlePracticeMenuOpen}>
            Practice <MdArrowDropDown />
          </a>
          <Menu
            id="practice-menu"
            anchorEl={practiceAnchorEl}
            open={Boolean(practiceAnchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onClick: handleMenuClose }}
          >
            <MenuList>
              <MenuItem
                className="menu-item"
                onClick={() => handleClick("litigation-and-dispute-resolution")}
              >
                <a className="menu-link">Litigation & Dispute Resolution</a>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() => handleClick("real-estate-and-conveyancing")}
              >
                <a className="menu-link">Real Estate & Conveyancing</a>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() => handleClick("family-law-and-succession")}
              >
                <a className="menu-link">Family Law & Succession</a>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() => handleClick("intellectual-property")}
              >
                <a className="menu-link">Intellectual Property</a>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() =>
                  handleClick("banking-corporate-and-financial-services")
                }
              >
                <a className="menu-link">
                  Banking, Corporate & Financial Services
                </a>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() => handleClick("local-and-international-trade-law")}
              >
                <a className="menu-link">Local & International Trade Law</a>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() => handleClick("data-protection-and-security")}
              >
                <a className="menu-link">Data Protection & Security</a>
              </MenuItem>
              <MenuItem
                className="menu-item"
                onClick={() =>
                  handleClick("standard-operating-procedure-for-gold-purchase")
                }
              >
                <a className="menu-link">
                  Standard Operating Procedures for Gold Purchase
                </a>
              </MenuItem>

              <MenuItem
                className="menu-item"
                onClick={() =>
                  handleClick("constitutional-and-administrative-law")
                }
              >
                <a className="menu-link">Constitutional & Administrative Law</a>
              </MenuItem>

              <MenuItem
                className="menu-item"
                onClick={() =>
                  handleClick("financial-and-commercial-transactions")
                }
              >
                <a className="menu-link">Financial & Commercial Transactions</a>
              </MenuItem>

              <MenuItem
                className="menu-item"
                onClick={() => handleClick("trust-and-trust-administration")}
              >
                <a className="menu-link">Trust & Trust Administration</a>
              </MenuItem>

              <MenuItem
                className="menu-item"
                onClick={() => handleClick("immigration-and-labour-law")}
              >
                <a className="menu-link">Immigration & Labour Law</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
        {/* <li className="p_opensans">
          <a className="drop-menu" onClick={handleAboutMenuOpen}>
            About <MdArrowDropDown />
          </a>
          <Menu
            id="about-menu"
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onClick: handleMenuClose }}
          >
            <MenuList>
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
        </li> */}

        <li className="p_opensans">
          <a href="/about">About Us</a>
        </li>

        <li className="p_opensans">
          <a href="/lawyers">Our Team</a>
        </li>
        {/* TODO: Articles are hidden */}
        {/* <li className="p_opensans">
          <a href="/articles">Articles</a>
        </li> */}
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
          onClick={handleCallButtonClick}
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
                  <MenuList>
                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("litigation-and-dispute-resolution")
                      }
                    >
                      <a
                        className="menu-link"
                        href="/practice/litigation-and-dispute-resolution"
                      >
                        Litigation & Dispute Resolution
                      </a>
                    </MenuItem>
                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("real-estate-and-conveyancing")
                      }
                    >
                      <a
                        className="menu-link"
                        href="/practice/real-estate-and-conveyancing"
                      >
                        Real Estate & Conveyancing
                      </a>
                    </MenuItem>
                    <MenuItem
                      className="menu-item"
                      onClick={() => handleClick("family-law-and-succession")}
                    >
                      <a
                        className="menu-link"
                        href="/practice/family-law-and-succession"
                      >
                        Family Law & Succession
                      </a>
                    </MenuItem>
                    <MenuItem
                      className="menu-item"
                      onClick={() => handleClick("intellectual-property")}
                    >
                      <a
                        className="menu-link"
                        href="/practice/intellectual-property"
                      >
                        Intellectual Property
                      </a>
                    </MenuItem>
                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("banking-corporate-and-financial-services")
                      }
                    >
                      <a
                        className="menu-link"
                        href="/practice/banking-corporate-and-financial-services"
                      >
                        Banking, Corporate & Financial Services
                      </a>
                    </MenuItem>
                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("local-and-international-trade-law")
                      }
                    >
                      <a
                        className="menu-link"
                        href="/practice/local-and-international-trade-law"
                      >
                        Local & International Trade Law
                      </a>
                    </MenuItem>
                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("data-protection-and-security")
                      }
                    >
                      <a
                        className="menu-link"
                        href="/practice/data-protection-and-security"
                      >
                        Data Protection & Security
                      </a>
                    </MenuItem>

                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick(
                          "standard-operating-procedure-for-gold-purchase"
                        )
                      }
                    >
                      <a className="menu-link">
                        Standard Operating Procedures for Gold Purchase
                      </a>
                    </MenuItem>

                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("constitutional-and-administrative-law")
                      }
                    >
                      <a className="menu-link">
                        Constitutional & Administrative Law
                      </a>
                    </MenuItem>

                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("financial-and-commercial-transactions")
                      }
                    >
                      <a className="menu-link">
                        Financial & Commercial Transactions
                      </a>
                    </MenuItem>

                    <MenuItem
                      className="menu-item"
                      onClick={() =>
                        handleClick("trust-and-trust-administration")
                      }
                    >
                      <a className="menu-link">Trust & Trust Administration</a>
                    </MenuItem>

                    <MenuItem
                      className="menu-item"
                      onClick={() => handleClick("immigration-and-labour-law")}
                    >
                      <a className="menu-link">Immigration & Labour Law</a>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
              {/* <li>
                <a className="drop-menu" onClick={handleAboutMenuOpen}>
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
              </li> */}

              <li className="p_opensans">
                <a href="/about">About Us</a>
              </li>

              <li className="p_opensans">
                <a href="/lawyers">Our Team</a>
              </li>

              {/* TODO: Hidden Articles */}
              {/* <li className="p_opensans">
                <a href="/articles">Articles</a>
              </li> */}

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
                onClick={handleCallButtonClick}
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
