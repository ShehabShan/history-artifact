import Countdown from "../../Component/Countdown";
import EmailSignup from "../../Component/EmailSignup";
import Features from "../../Component/Features";
import Hero from "../../Component/Hero";

const ExtraFeature = () => {
  return (
    <div className="pt-16">
      <Hero></Hero>
      <Features></Features>
      <Countdown></Countdown>
      <EmailSignup></EmailSignup>
    </div>
  );
};

export default ExtraFeature;
