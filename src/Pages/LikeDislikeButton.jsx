import axios from "axios";
import { useEffect, useState } from "react";
import useAuthDetails from "../Context/AuthContext/useAuthDetails";

const LikeDislikeButton = ({ artifact }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(artifact.likeCount);
  const { user } = useAuthDetails();

  //console.log(!isLiked);

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
                if (result.data.insertedId) {
                  setIsLiked(true);
                }
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
                }
              });
          }
        });
    }
  };

  return (
    <div>
      <button
        onClick={handleLikeCount}
        className="btn bg-blue-500 font-semibold text-gray-100"
      >
        {isLiked ? "dislike" : "like"}
      </button>
    </div>
  );
};

export default LikeDislikeButton;
