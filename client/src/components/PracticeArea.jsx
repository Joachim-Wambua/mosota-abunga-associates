import { practiceAreas } from "../constants/data";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const PracticeArea = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired endpoint
    navigate(`/practice/${id}`);
  };

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
      <div className="bg-gray-100 px-20">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-12 gap-6 px-4">
            <div className="practice-content">
              <div className="bg-white shadow w-full rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={practiceArea.img}
                    className=" bg-gray-300 object-cover object-top mb-4 shrink-0"
                  ></img>
                </div>
              </div>
            </div>

            <div className="practice-pages">
              <div className="bg-white shadow rounded-lg p-6">Ola</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticeArea;
