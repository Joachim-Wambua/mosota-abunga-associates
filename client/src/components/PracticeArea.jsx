import { useEffect, useState } from "react";
import { practiceAreas } from "../constants/data";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DynamicHeader from "./DynamicHeader";

const PracticeArea = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState(0); // State to change the key prop

  // Extracting the practice Area's name from the URL parameter
  const { id } = useParams();

  // Finding the corresponding lawyer profile from the data
  const practiceArea = practiceAreas.find((practice) => practice.id === id);

  // If lawyer profile not found, redirect to a not found page
  if (!practiceArea) {
    // Redirect to a not found page
    return <div>Practice Area Not Found!</div>; // Render nothing
  }

  // Scroll to the top of the page when id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Function to reload the component with a new key
  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div key={key}>
      {" "}
      {/* Use key prop here */}
      <DynamicHeader
        headerTitle={practiceArea.title}
        src={practiceArea.banner}
        backgroundPosition="center"
        header_height="60vh"
      />
      <div className="bg-gray-100 px-10">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-12 gap-6 px-4">
            <div className="practice-content mx-auto">
              <div className="bg-white shadow w-full rounded-lg p-8">
                <div className="flex flex-col items-start">
                  <img
                    src={practiceArea.secondaryImg}
                    className="w-full h-[360px] bg-gray-300 object-cover object-center mb-4 shrink-0"
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
                        className={`hover:text-[#AC2333] text-start focus:outline-none ${
                          area.id === id ? "font-bold text-[#AC2333]" : ""
                        }`}
                        onClick={() => {
                          navigate(`/practice/${area.id}`);
                          reloadComponent(); // Reload the component when a new area is clicked
                        }}
                      >
                        {area.title}
                      </button>
                      x
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
