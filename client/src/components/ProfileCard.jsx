import { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ id, name, email, linkedin, profile_img, role }) => {
  const navigate = useNavigate();

  // Navigate to Lawyer Pages
  const handleClick = () => {
    // Navigate to the desired endpoint
    navigate(`/lawyers/${id}`);
    
  };

  // Scroll to the top of the page when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Trigger scroll effect whenever `id` changes

  return (
    <>
      <div>
        <a onClick={handleClick} className="hover:cursor-pointer">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover object-top w-full h-56 md:h-64 xl:h-80 hover:scale-110  transition-transform"
              src={`${profile_img}`}
              alt={`${id}`}
            />
            <div className="absolute inset-0 flex flex-col justify-end px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-90">
              <p className="mb-1 text-lg font-bold text-gray-100">{name}</p>
              <p className="mb-4 text-xs text-gray-100">{role}</p>

              <div className="flex items-center justify-center space-x-3">
                <a
                  href={`mailto:${email}`}
                  className="text-white transition-colors duration-300"
                >
                  <MdOutlineMailOutline
                    className="hover:text-[#AC2333]"
                    fontSize={24}
                  />
                </a>
                <a
                  href={`${linkedin}`}
                  className="text-white transition-colors duration-300"
                >
                  <FaLinkedinIn
                    className="hover:text-[#AC2333]"
                    fontSize={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProfileCard;
