import axios from "axios";
import { useEffect, useState } from "react";

const LikedCard = ({ artifact, index }) => {
  //console.log(artifact);

  const [likedArtifact, setLikedArtifact] = useState({});
  //console.log(likedArtifact);

  useEffect(() => {
    axios
      .get(
        `https://artifacts-server.vercel.app/singleLikedArtifact/${artifact}`
      )
      .then((result) => {
        setLikedArtifact(result.data);
      });
  }, [artifact]);

  return (
    <tr>
      <th>
        <label>
          <p>{index + 1}</p>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={likedArtifact?.ArtifactImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{likedArtifact?.ArtifactName}</div>
            <div className="text-sm opacity-50">
              {likedArtifact?.PresentLocation}
            </div>
          </div>
        </div>
      </td>
      <td>
        Created: {likedArtifact?.CreatedAt}
        <br />
        <span className="badge badge-ghost badge-sm">
          Discovered: {likedArtifact?.DiscoveredAt}
        </span>
      </td>
      <td>{likedArtifact?.SellerEmail}</td>
      <th>
        <button className="btn btn-ghost btn-xs">
          {likedArtifact?.likeCount}
        </button>
      </th>
    </tr>
  );
};

export default LikedCard;
