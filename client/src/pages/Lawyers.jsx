import Footer from "../components/Footer";
import LawyerCard from "../components/LawyerCard";
import DynamicHeader from "../components/DynamicHeader";
import { profiles } from "../constants/data";

const Lawyers = () => {
  return (
    <>
      <DynamicHeader
        headerTitle="Our Lawyers"
        src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1706117437/closeup-gavel-judgement-concept_2_hcuagb.jpg"
        backgroundPosition="center"
      />
      {profiles.map((profile) => (
        <LawyerCard
          id={profile.id}
          name={profile.name}
          profile_img={profile.profile_img}
          credentials={profile.credentials}
          role={profile.role}
          profile={profile.profile}
          profileLink={profile.profileLink}
          key={profile.name}
        />
      ))}
      ;
      <Footer />
    </>
  );
};

export default Lawyers;
