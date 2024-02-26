import { practiceAreas } from "../constants/data";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const PracticeArea = () => {
  const navigate = useNavigate();

  //   const handleClick = () => {
  //     // Navigate to the desired endpoint
  //     navigate(`/practice/${id}`);
  //   };

  // Extracting the practice Area's name from the URL parameter
  const { id } = useParams();

  // Finding the corresponding lawyer profile from the data
  const practiceArea = practiceAreas.find((practice) => practice.id === id);

  // If lawyer profile not found, redirect to a not found page
  if (!practiceArea) {
    // Redirect to a not found page
    return <div>Practice Area Not Found!</div>; // Render nothing
  }
  return (
    <>
      <div className="bg-gray-100 px-10">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-12 gap-6 px-4">
            <div className="practice-content mx-auto">
              <div className="bg-white shadow w-full rounded-lg p-6">
                <div className="flex flex-col items-start">
                  <img
                    src={practiceArea.img}
                    className=" bg-gray-300 object-cover object-top mb-4 shrink-0"
                  ></img>
                  <h2 className="text-xl font-bold mb-4">
                    {practiceArea.title}
                  </h2>
                  <p className="text-justify mb-6">{practiceArea.par1}</p>
                  <p className="text-justify mb-6">{practiceArea.par2}</p>
                </div>
              </div>
            </div>

            <div className="practice-pages mx-auto">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">More Practice Areas:</h3>
                <ul className="space-y-2">
                  {practiceAreas.map((area) => (
                    <li key={area.id} className="text-[16px]">
                      <button
                        className={`hover:text-[#AC2333] focus:outline-none ${
                          area.id === id ? "font-bold text-[#AC2333]" : ""
                        }`}
                        onClick={() => navigate(`/practice/${area.id}`)}
                      >
                        {area.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticeArea;
