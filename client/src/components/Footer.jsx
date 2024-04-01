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
            Mosota Abunga & Associates Advocates, LLP
          </p>
          <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
            ‘Arc of Justice’
          </p>

          <div className="flex items-center gap-5 mt-6">
            <IconButton color="white">
              <FaLinkedin />
            </IconButton>

            <IconButton color="white" href="mailto:info@maassociates.co.ke">
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
          <h4 className="text-white text-2xl leading-normal font-medium mt-6 mb-6">
            Contact Us
          </h4>
          <p>Phone: +254 720 101 101</p>
          <p>Email: info@maassociates.co.ke</p>
          {/* TODO: Add another email */}
          {/* <p>Email: info@mosotaabungaassociates.co.ke</p> */}
          <p>Website Terms | Privacy Policy</p>
        </div>
      </div>

      <div className="flex w-full mb-6 text-[13.5px] text-white">
        <p className="flex  flex-col w-1/2 items-center">
          @Copyright MAA Advocates 2024
        </p>
        <div className="flex flex-col  w-1/2 items-center">
          <p className="flex">
            Built by:
            <a
              href="https://www.boldifycreatives.com/"
              target="_blank"
              rel="noreferrer"
              className="mx-4"
            >
              <img
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1709559315/Boldify_Creatives_Logo-02_jzgpcx.png"
                width={72}
                alt="Boldify Logo"
              />
            </a>
          </p>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
