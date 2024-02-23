import { lawyerProfiles } from "../constants/data";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import DynamicHeader from "./DynamicHeader";

const Resume = () => {
  // Extracting the lawyer's name from the URL parameter
  const { id } = useParams();

  // Finding the corresponding lawyer profile from the data
  const lawyer = lawyerProfiles.find((lawyer) => lawyer.id === id);

  // If lawyer profile not found, redirect to a not found page
  if (!lawyer) {
    // Redirect to a not found page
    return <div>Lawyer not found!</div>; // Render nothing
  }

  // Split the profile text using \n and create an array of JSX elements
  const profileLines = lawyer.profile.split("\n").map((line, index) => (
    <p
      key={index}
      className="pt-4  leading-7 text-justify text-md text-gray-700"
    >
      {line}
    </p>
  ));

  return (
    <>
      <DynamicHeader
        headerTitle={`Our Lawyers | ${lawyer.name}`}
        src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1708713677/still-life-with-scales-justice_5_1_1_xjtkba.jpg"
        backgroundPosition="center"
      />
      <div className="bg-gray-100 px-20">
        <div className="container mx-auto py-8">
          <div className="resume-section grid grid-cols-12 gap-6 px-4">
            <div className="resume-details">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={lawyer.profileImg}
                    className="w-40 h-40 bg-gray-300 rounded-full object-cover object-top mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">{lawyer.name}</h1>
                  <p className="text-gray-700">{lawyer.role}</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <Button
                      variant="contained"
                      size="medium"
                      color="maroon_primary"
                      href=""
                    >
                      <Typography
                        variant="body1"
                        style={{ fontWeight: 600 }}
                        className=""
                      >
                        Contact
                      </Typography>
                    </Button>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold mb-2">
                    Practice Areas
                  </span>
                  <ul>
                    {lawyer.practiceAreas.map((area, index) => (
                      <li
                        key={index}
                        className="mb-2 ml-4 list-disc text-[0.9rem]"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold mb-2">
                    Memberships
                  </span>
                  <ul>
                    {lawyer.memberships.map((membership, index) => (
                      <li
                        key={index}
                        className="mb-2 ml-4 list-disc text-[0.9rem]"
                      >
                        {membership}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold mb-2">
                    Education
                  </span>
                  <ul>
                    {lawyer.education.map((edu, index) => (
                      <li key={index} className="mb-4 text-[0.9rem]">
                        <p className="text-[0.9rem]">{edu.degree}</p>
                        <p className="text-[0.9rem] text-gray-700 font-bold">
                          {edu.university}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume-about">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">
                  About {lawyer.name.split(" ")[0]}
                </h2>
                {profileLines}

                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  <a
                    className="text-gray-700 hover:text-[#AC2333]"
                    aria-label="MAA LinkedIn"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    className="text-gray-700 hover:text-[#AC2333]"
                    aria-label="MAA Email"
                    href=""
                    target="_blank"
                  >
                    <HiOutlineMail fontSize={27} />
                  </a>
                </div>

                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                {lawyer.career.map((car, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">
                        {car.role}
                      </span>
                      <p>
                        <span className="text-gray-700">{car.date}</span>
                      </p>
                    </div>
                    <p className="mt-1">{car.firm}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
