import { Typography, Button, IconButton } from "@mui/material";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ProfileCard = ({ name, profile_img, credentials, role, profile }) => {
  // Split the profile text using \n and create an array of JSX elements
  const profileLines = profile.split("\n").map((line, index) => (
    <Typography
      key={index}
      variant="subtitle1"
      style={{ marginBottom: "0.75rem" }}
    >
      {line}
    </Typography>
  ));

  return (
    <>
      <div className="profile-wrapper">
        <div className="img-area">
          <div className="img-box">
            <img src={profile_img} alt={name} />
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-title mt-2">
            <Typography
              variant="h3"
              style={{ marginBottom: "0.75rem", fontSize: "2.4rem" }}
            >
              {name}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: "0.75rem" }}>
              {credentials}
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: "0.75rem" }}>
              {role}
            </Typography>
            {/* Render the profileLines array */}
            {profileLines}
            <Button
              variant="outlined"
              size="large"
              color="maroon_primary"
              style={{ marginBottom: "1rem" }}
            >
              <Typography
                variant="body2"
                style={{ fontWeight: 600, padding: 3 }}
              >
                Full Profile
              </Typography>
            </Button>

            <div className="flex pb-10">
              <IconButton color="maroon_primary">
                <FaLinkedinIn style={{ marginRight: "10px" }} />
              </IconButton>

              <IconButton color="maroon_primary">
                <MdEmail color="maroon_primary" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
