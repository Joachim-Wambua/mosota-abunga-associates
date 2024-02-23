import { useNavigate } from "react-router-dom";

const LawyerCard = ({ id, name, profile_img, credentials, role, profile }) => {
  const navigate = useNavigate();

  // Function to handle Contact Button Clicks
  const handleClick = () => {
    // Navigate to the desired endpoint
    navigate(`/lawyers/${id}`);
  };

  return (
    <>
      <div className="lawyer-section max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-100 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${profile_img})`,
                backgroundPosition: "top",
              }}
            ></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-[#AC2333] opacity-100"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              {role}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              {credentials}
            </p>
            <p className="pt-8 text-sm">{profile}</p>

            <div className="pt-12 pb-8">
              <button
                className="bg-[#AC2333] hover:bg-[#990012] text-white font-bold py-2 px-4 rounded-full"
                onClick={handleClick}
              >
                View Full Profile
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src={profile_img}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </>
  );
};

export default LawyerCard;
