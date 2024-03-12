import { Typography, Container } from "@mui/material";
import Navbar from "../components/NavBar/Navbar";

const DynamicHeader = ({
  headerTitle,
  src,
  backgroundPosition,
  header_height,
}) => {
  return (
    <>
      <header
        className="header-style"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: backgroundPosition,
          height: `${header_height}`,
        }}
      >
        <Navbar />
        <div className="dynamic-header" style={{ height: `${header_height}` }}>
          <Container>
            <div className="text-center text-white ">
              <Typography variant="h3" className="header-title" gutterBottom>
                {headerTitle}
              </Typography>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default DynamicHeader;
