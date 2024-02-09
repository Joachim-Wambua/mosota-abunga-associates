import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Practice = () => {
  // List of practice areas
  const practiceAreas = [
    "Corporate & Commercial",
    "Media & Technology",
    "Energy (Oil & Gas)",
    "Public-Private Law",
    "Financial Transactions",
    "Criminal Law",
    "Property & Real Estates",
    "Immigration & Labor",
    "Family & Succession",
    "Tax Law",
  ];

  return (
    <div className="flex justify-center">
      {/* Text content covering 2/3 of the screen */}
      <div className="w-2/3 p-8">
        <h1 className="text-3xl font-bold mb-4">Practices</h1>
        <div>
          {/* Render practice areas */}
          {practiceAreas.map((practice, index) => (
            <div key={index} className="mb-4">
              {practice}
            </div>
          ))}
        </div>
      </div>
      {/* Pagination component */}
      <div className="w-1/3 p-8">
        <Stack spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack>
      </div>
    </div>
  );
};

export default Practice;
