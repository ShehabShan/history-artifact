import ExtraFeature from "../Pages/Countdown/ExtraFeature";
import FeaturedArtifacts from "../Pages/FeaturedArtifacts";
import Banner from "./Banner";
import Details from "./Details";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedArtifacts></FeaturedArtifacts>
      <Details></Details>
      <ExtraFeature></ExtraFeature>
    </div>
  );
};

export default Home;
