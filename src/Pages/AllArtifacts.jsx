import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import NoDataPage from "../Component/NoDataPage";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [originalArtifacts, setOriginalArtifacts] = useState([]);

  const searchInputRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://artifacts-server.vercel.app/allArtifacts")
      .then((result) => {
        setArtifacts(result.data);
        setOriginalArtifacts(result.data);
      });
  }, []);

  const handleSearchInput = (e) => {
    e.preventDefault();
    const search = e.target.search.value.toLowerCase();

    if (search) {
      const result = artifacts.filter((artifact) =>
        artifact.ArtifactName.toLowerCase().includes(search)
      );

      setArtifacts(result);
    } else {
      setArtifacts(originalArtifacts);
    }
  };

  const handleGoBack = () => {
    setArtifacts(originalArtifacts);

    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  //console.log(artifacts);

  return (
    <div className="pt-16">
      <form
        onSubmit={handleSearchInput}
        className="input input-bordered flex items-center  w-[40%] mx-auto mt-5 mb-5"
      >
        <input
          type="text"
          className="grow"
          placeholder="Search"
          name="search"
          ref={searchInputRef}
        />

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-90"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>

      {artifacts.length === 0 ? (
        <NoDataPage></NoDataPage>
      ) : (
        <div className="grid p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
          {artifacts.map((artifact) => (
            <Card key={artifact._id} artifact={artifact}></Card>
          ))}
        </div>
      )}

      {/* dinamic part */}
    </div>
  );
};

export default AllArtifacts;
