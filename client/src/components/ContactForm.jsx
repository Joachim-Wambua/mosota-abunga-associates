import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdLocationPin } from "react-icons/md";
import axios from "axios";
import EmailStatusModal from "./EmailStatusModal"; // Import the modal component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/send-email", formData)
      .then((response) => {
        console.log(response.data);
        setEmailSuccess(true);
        setModalOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setEmailSuccess(false);
        setModalOpen(true);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="contact-section bg-gray-100">
        <div className="text-center pt-8">
          <Typography variant="h3" style={{ color: "#AC2333" }}>
            Contact Us
          </Typography>
          <Typography className="text-[#717171] pt-2">
            Any question or remarks? Just write us a message!
          </Typography>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-6" onSubmit={handleSubmit}>
                <div className="my-2">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#AC2333]"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="my-2">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#AC2333]"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="my-2">
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#AC2333]"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#AC2333]"
                    placeholder="Message"
                    rows="12"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <Button
                    type="submit"
                    className="w-full"
                    variant="contained"
                    color="maroon_primary"
                    size="large"
                  >
                    <Typography variant="body1" style={{ fontWeight: 600 }}>
                      SEND
                    </Typography>
                  </Button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-2 lg:py-12">
              <div
                className="flex"
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  className="mb-5"
                  src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1706012956/office-pic_cb8p3j.png"
                  alt="Office Image"
                />
              </div>
              <h1 className="max-w-xl text-[27px] font-extrabold">
                Contact Information
              </h1>
              <p className="max-w-xl text-md">Get In Touch</p>

              <div className="mt-4">
                <a
                  href=""
                  className=" flex flex-row items-center text-[17px] font-normal text-[#454545]"
                >
                  {" "}
                  <FaPhoneVolume fontSize={15} className="mr-3 my-3" /> +254 720
                  101 101{" "}
                </a>

                <a
                  href=""
                  className=" flex flex-row items-center my-3 font-normal text-[#454545]"
                >
                  {" "}
                  <MdEmail fontSize={18} className="mr-3" />{" "}
                  info@maassociates.co.ke{" "}
                </a>

                <address className="flex flex-row items-center font-normal text-[#454545] mt-4 my-3 not-italic">
                  <MdLocationPin fontSize={21} className=" mr-3" />
                  Jakaya Kikwete Road, Nairobi City, Adak House, 2nd flr
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EmailStatusModal
        open={modalOpen}
        onClose={closeModal}
        success={emailSuccess}
      />
    </>
  );
};

export default ContactForm;
