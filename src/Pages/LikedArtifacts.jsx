import { useEffect, useState } from "react";
import useAuthDetails from "../Context/AuthContext/useAuthDetails";
import LikedCard from "./LikedCard";
import noDataImg from "../assets/icon/no-data-available.webp";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const LikedArtifacts = () => {
  const { user } = useAuthDetails();
  const axiosSecure = useAxiosSecure();
  const [artifactKey, setArtifactKey] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/myLikedArtifact?email=${user?.email}`).then((result) => {
      const uniqueArtifactId = [
        ...new Set(result.data.map((item) => item.artifactId)),
      ];
      setArtifactKey(uniqueArtifactId);
    });
  }, [user?.email]);

  return (
    <div>
      {artifactKey.length > 0 ? (
        <div>
          <table className="table text-gray-800">
            {/* head */}
            <thead>
              <tr className="text-[#000000] text-xl font-medium">
                <th>serial</th>
                <th>Image</th>
                <th>Artifact Name</th>
                <th> Hr Email</th>
                <th>Like Count</th>
              </tr>
            </thead>

            {/* row 1 */}
            <tbody>
              {artifactKey.map((artifact, index) => (
                <LikedCard
                  key={artifact}
                  artifact={artifact}
                  index={index}
                ></LikedCard>
              ))}
            </tbody>
            {/* row 2 */}

            {/* foot */}
          </table>
        </div>
      ) : (
        <div>
          <img
            className="w-full h-[calc(100vh - 206px)]"
            style={{ height: "calc(100vh - 206px)" }}
            src={noDataImg}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
