import Footer from "../components/Footer";
import LawyerCard from "../components/LawyerCard";
import DynamicHeader from "../components/DynamicHeader";
import { profiles } from "../constants/data";

const Lawyers = () => {
  return (
    <>
      <DynamicHeader
        headerTitle="Our Lawyers"
        src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1710238692/MAA_afisws.jpg"
        backgroundPosition="top"
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
      ;
      <Footer />
    </>
  );
};

export default Lawyers;
