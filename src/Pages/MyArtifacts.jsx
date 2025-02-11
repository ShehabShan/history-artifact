import { useEffect, useState } from "react";
import useAuthDetails from "../Context/AuthContext/useAuthDetails";
import MyCard from "./MyCard";
import noDataImg from "../assets/icon/no-data-available.webp";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyArtifacts = () => {
  const { user } = useAuthDetails();
  const [artifacts, setArtifacts] = useState([]);
  const axiosSecure = useAxiosSecure();
  //console.log(artifacts);

  useEffect(() => {
    axiosSecure.get(`/myArtifacts?email=${user.email}`).then((result) => {
      //console.log(result);
      setArtifacts(result.data);
    });
  }, [user.email, axiosSecure]);

  const handleOnDelete = (id) => {
    const remainingId = artifacts.filter((artifact) => artifact._id !== id);
    setArtifacts(remainingId);
  };

  return (
    <div>
      {artifacts.length > 0 ? (
        <div className="grid p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {artifacts.map((artifact) => (
            <MyCard
              key={artifact._id}
              artifact={artifact}
              onDelete={handleOnDelete}
            ></MyCard>
          ))}
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

export default MyArtifacts;
