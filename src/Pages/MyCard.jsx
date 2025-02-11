import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useSlicecontext from "../Hooks/useSliceContext";

const MyCard = ({ artifact, onDelete }) => {
  //console.log(artifact?._id);

  const context = useSlicecontext(artifact?.HistoricalContext, 15);

  const handleDelete = () => {
    axios
      .delete(
        `https://artifacts-server.vercel.app/allArtifacts/${artifact?._id}`
      )
      .then((result) => {
        //console.log(result.data);
        if (result.data.deletedCount > 0) {
          toast.success("Artifact deleted successfully");
          onDelete(artifact._id);
        }
      });
  };

  return (
    <div className="card bg-[#ffffff] text-[#111111]   shadow-xl border">
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
        <div>{context}</div>
        <div className="flex gap-4">
          <Link to={`/updateMyArtifact/${artifact._id}`}>
            <button className="btn bg-blue-500 text-white font-semibold">
              Update
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="btn bg-blue-500 text-white font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
