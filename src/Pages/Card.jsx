import { Link } from "react-router-dom";
import useSlicecontext from "../Hooks/useSliceContext";

const Card = ({ artifact }) => {
  //console.log(artifact?._id);

  const context = useSlicecontext(artifact?.HistoricalContext, 20);

  console.log(context);

  // const context = (text, wordLimit) => {
  //   const words = text.split(" ");
  //   return words.length > wordLimit
  //     ? words.slice(0, wordLimit).join(" ") + "..."
  //     : text;
  // };

  return (
    <div className="card bg-[#ffffff] text-[#111111]  shadow-xl border">
      <figure className="px-6 pt-10">
        <img
          src={artifact?.ArtifactImage}
          alt="Shoes"
          className="rounded-xl h-[230px] w-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center justify-between">
        <h1 className="text-2xl font-bold ">{artifact?.ArtifactName}</h1>
        <div className="flex gap-2 font-medium">
          <p>Created:{artifact?.CreatedAt}</p>
          <p>Discovered:{artifact?.DiscoveredAt}</p>
        </div>
        <h2 className="">{context}</h2>
        <Link to={`/allArtifacts/${artifact._id}`}>
          <button className="btn bg-blue-500 text-white font-semibold">
            view Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
