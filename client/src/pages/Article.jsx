import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import DynamicHeader from "../components/DynamicHeader";

const Articles = () => {
  return (
    <>
      <DynamicHeader
        headerTitle="Articles"
        src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1706036176/article-3_vtiaib.png"
        backgroundPosition='top'
        header_height="60vh"
      />
      <ArticleCard />
      <Footer />
    </>
  );
};

export default Articles;
