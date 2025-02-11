import axios from "axios";
import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  const featureArtifacts = artifacts.slice(0, 6);

  useEffect(() => {
    axios
      .get("https://artifacts-server.vercel.app/featureArtifacts")
      .then((result) => {
        setArtifacts(result.data);
      });
  }, []);

  return (
    <div className="flex flex-col place-items-center">
      <h2 className="text-center text-4xl text-[#000000]">
        Featured Artifacts
      </h2>
      <div className="grid p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featureArtifacts.map((artifact) => (
          <FeatureCard key={artifact?._id} artifact={artifact}></FeatureCard>
        ))}
      </div>
      <Link to={"/allArtifacts"}>
        <button className="btn mt-8 bg-green-500 text-xl px-8 border-none mb-3 text-[#ffffff] hover:bg-red-400 font-medium">
          Sell all
        </button>
      </Link>
    </div>
  );
};

export default FeaturedArtifacts;
