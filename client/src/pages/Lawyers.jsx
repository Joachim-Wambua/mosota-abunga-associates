import Footer from "../components/Footer";
import LawyerCard from "../components/LawyerCard";
import DynamicHeader from "../components/DynamicHeader";
import { profiles } from "../constants/data";

const Lawyers = () => {
  return (
    <>
      <DynamicHeader
        headerTitle="Our Team"
        src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712006469/litigation-header_p6p1y7.png"
        backgroundPosition="center"
        header_height="100vh"
      />
      {profiles.map((profile) => (
        <LawyerCard
          id={profile.id}
          name={profile.name}
          profile_img={profile.profile_img}
          credentials={profile.credentials}
          role={profile.role}
          profile={profile.profile}
          key={profile.name}
        />
      ))}
      <Footer />
    </>
  );
};

export default Lawyers;
