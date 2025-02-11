import { Link } from "react-router-dom";
import useSlicecontext from "../Hooks/useSliceContext";

const FeatureCard = ({ artifact }) => {
  const historyContext = useSlicecontext(artifact?.HistoricalContext, 20);

  return (
    <div className="card bg-[#ffffff] text-[#111111]   shadow-xl border">
      <figure className="px-6 pt-10">
        <img
          src={artifact?.ArtifactImage}
          alt="Shoes"
          className="rounded-xl h-[260px] w-[390px]"
        />
      </figure>
      <div className="card-body items-center text-center justify-between">
        <p className="text-2xl text-blue-500 font-bold">
          Like: {artifact?.likeCount}
        </p>
        <h1 className="text-2xl font-bold ">{artifact?.ArtifactName}</h1>
        <div className="flex gap-2 font-medium">
          <p>Created:{artifact?.CreatedAt}</p>
          <p>Discovered:{artifact?.DiscoveredAt}</p>
        </div>
        <div className="p-2">{historyContext}</div>
        <Link to={`/allArtifacts/${artifact._id}`}>
          <button className="btn  bg-blue-500 text-white font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
