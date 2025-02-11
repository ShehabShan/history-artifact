import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthDetails from "../Context/AuthContext/useAuthDetails";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ViewDetail = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { user } = useAuthDetails();
  const axiosSecure = useAxiosSecure();

  //console.log(artifact?.likeCount);
  //console.log(likeCount);

  useEffect(() => {
    if (artifact?.likeCount !== undefined) {
      setLikeCount(artifact.likeCount);
    }
  }, [artifact?.likeCount]);

  useEffect(() => {
    axiosSecure
      .get(`https://artifacts-server.vercel.app/allArtifacts/${id}`)
      .then((result) => {
        //console.log(result.data);
        setArtifact(result.data);
      });
  }, [id]);

  //   like button code

  useEffect(() => {
    axios
      .get(
        `https://artifacts-server.vercel.app/likedArtifact?email=${user.email}&artifactId=${artifact._id}`
      )
      .then((result) => {
        setIsLiked(result.data.isLiked);
      });
  }, [user.email, artifact._id]);

  const handleLikeCount = () => {
    const updateLike = !isLiked;
    setIsLiked(updateLike);

    const likeDetails = { email: user.email, artifactId: artifact._id };

    if (updateLike) {
      axios
        .post(`https://artifacts-server.vercel.app/likedArtifact`, likeDetails)
        .then((result) => {
          //console.log(result.data);
          if (result.data.insertedId) {
            axios
              .patch(
                `https://artifacts-server.vercel.app/allArtifacts/${artifact._id}`,
                {
                  action: "increment",
                }
              )
              .then((result) => {
                setIsLiked(true);
                setLikeCount((prevLikeCount) => prevLikeCount + 1);
              });
          }
        });
    } else {
      axios
        .delete(
          `https://artifacts-server.vercel.app/likedArtifact?email=${user.email}&artifactId=${artifact._id}`
        )
        .then((result) => {
          //console.log(result.data);
          if (result.data.deletedCount) {
            axios
              .patch(
                `https://artifacts-server.vercel.app/allArtifacts/${artifact._id}`,
                {
                  action: "decrement",
                }
              )
              .then((result) => {
                //console.log(result.data);
                if (result.data.modifiedCount > 0) {
                  setIsLiked(false);
                  setLikeCount((prevLikeCount) => prevLikeCount - 1);
                }
              });
          }
        });
    }
  };

  return (
    <div className="card bg-gray-50 rounded-none shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={artifact?.ArtifactImage}
          alt="Shoes"
          className="rounded-xl w-[700px] h-[450px] "
        />
      </figure>
      <div className="card-body items-center text-center ml-2 gap-5">
        <p>Liked: {likeCount}</p>
        <h1 className="text-4xl lg:ml-28 text-gray-800">
          {artifact?.ArtifactName}
          <span className="text-sm">{artifact?.PresentLocation}</span>
        </h1>
        <p className="text-xl text-gray-800 font-medium">
          ArtifactType: {artifact?.ArtifactType}
        </p>
        <div className="flex text-xl text-gray-800 gap-6 font-medium">
          <p> CreatedAt: {artifact?.CreatedAt}</p>
          <p>DiscoveredAt: {artifact?.DiscoveredAt}</p>
        </div>
        <div className="flex text-xl text-gray-800 gap-6 font-medium">
          <p>SellerName: {artifact?.SellerName}</p>
          <p>SellerEmail: {artifact?.SellerEmail}</p>
        </div>
        <div className="text-lg text-gray-700 gap-6 font-light px-10">
          {artifact?.HistoricalContext}
        </div>
        <div>
          <button
            onClick={handleLikeCount}
            className={
              isLiked
                ? "btn bg-red-500 font-semibold text-gray-100"
                : "btn bg-blue-500 font-semibold text-gray-100"
            }
          >
            {isLiked ? "dislike" : "like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
