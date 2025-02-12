import ExtraFeature from "../Pages/Countdown/ExtraFeature";
import FeaturedArtifacts from "../Pages/FeaturedArtifacts";
import ContactPage from "../Pages/shared/ContactPage";
import Banner from "./Banner";
import Details from "./Details";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedArtifacts></FeaturedArtifacts>
      <Details></Details>
      <ExtraFeature></ExtraFeature>
      <ContactPage></ContactPage>
    </div>
  );
};

export default Home;
