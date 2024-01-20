import { IconButton } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div> */}
        <div className="footer-start">
          <div className="company-info">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705499896/lpv4hjkskmzrjqi0wbmg.png"
                alt="MAA Associates Logo"
                width={125}
              />
            </a>
            <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
              Mosota Abunga & Associates Advocates
            </p>
            <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
              ‘Arc of Justice’
            </p>

            <div className="flex items-center gap-5 mt-6">
              <IconButton color="white">
                <FaLinkedin />
              </IconButton>

              <IconButton color="white">
                <MdEmail />
              </IconButton>
            </div>
          </div>

          <div className="middle-footer text-center">
            <h4 className="text-white text-2xl leading-normal font-medium mb-6">
              Our Offices
            </h4>
            <h5 className="font-bold text-[18px]">Head Office</h5>
            <p>Nairobi City</p>
            <p>Jakaya Kikwete Road</p>
            <p>Adak House, 2nd Floor</p>

            <h5 className="font-bold text-[18px] mt-10">Postal</h5>
            <p>MAA ADVOCATES</p>
            <p>P.O. Box 15871-00100</p>
            <p>Nairobi, Kenya</p>
          </div>

          <div className="footer-end text-center">
            <h4 className="text-white text-2xl leading-normal font-medium mb-6">
              Contact Us
            </h4>
            <p>Phone: 0725 735 499</p>
            <p>Email: info@mosotaabungaassociates.co.ke</p>
            <p>Website Terms | Privacy Policy</p>
          </div>
        </div>
        <div className="mb-6 text-[12px] text-white">
          <p>@Copyright MAA Advocates 2023</p>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
