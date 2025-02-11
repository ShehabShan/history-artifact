import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthDetails from "../Context/AuthContext/useAuthDetails";
import { toast } from "react-hot-toast";

const UpdateMyArtifact = () => {
  const { id } = useParams();
  const { user } = useAuthDetails();
  const [artifact, setArtifact] = useState({});
  const navigate = useNavigate();
  //console.log(id);

  useEffect(() => {
    axios
      .get(`https://artifacts-server.vercel.app/updateMyArtifact/${id}`)
      .then((result) => {
        setArtifact(result.data);
      });
  }, [id]);

  const handleUpdateArtifact = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());

    axios
      .patch(
        `https://artifacts-server.vercel.app/updateMyArtifact/${id}`,
        initialData
      )
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          toast.success("Artifact Successfully update");

          setTimeout(() => {
            navigate("/myArtifacts");
          }, 700);
        } else {
          toast.error("Change value!!");
        }
      });
  };

  return (
    <div
      onSubmit={handleUpdateArtifact}
      className="card rounded-none bg-gray-700 w-full shrink-0 shadow-2xl  lg:px-[300px]"
    >
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Artifact Name</span>
          </label>
          <input
            type="text"
            placeholder="Artifact Name"
            className="input input-bordered"
            name="ArtifactName"
            defaultValue={artifact?.ArtifactName}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Artifact Image</span>
          </label>
          <input
            type="url"
            placeholder="Artifact Image"
            className="input input-bordered"
            name="ArtifactImage"
            defaultValue={artifact?.ArtifactImage}
            required
          />
        </div>

        <div className="form-control">
          <select
            className="select w-full max-w-xs"
            name="ArtifactType"
            required
          >
            <option defaultValue={artifact?.ArtifactType} disabled>
              Artifact Type
            </option>
            <option value="Tools"> Tools</option>
            <option value="Weapons"> Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Historical Context</span>
          </label>
          <textarea
            type="text"
            rows={3}
            cols={10}
            placeholder="Historical Context"
            className="px-3 py-2 bg-[#1d232a]"
            name="HistoricalContext"
            defaultValue={artifact?.HistoricalContext}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Created At</span>
          </label>
          <input
            type="text"
            placeholder="e.g:  '100 BC'"
            className="input input-bordered"
            name="CreatedAt"
            defaultValue={artifact?.CreatedAt}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discovered At</span>
          </label>
          <input
            type="text"
            placeholder="e.g: '1830'"
            className="input input-bordered"
            name="DiscoveredAt"
            defaultValue={artifact?.DiscoveredAt}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Present Location</span>
          </label>
          <input
            type="text"
            placeholder="Present Location"
            className="input input-bordered"
            name="PresentLocation"
            defaultValue={artifact?.PresentLocation}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            placeholder={user?.displayName}
            className="input input-bordered"
            name="SellerName"
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input
            type="email"
            defaultValue={user?.email}
            placeholder={user?.email}
            className="input input-bordered"
            name="SellerEmail"
            readOnly
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Artifact</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyArtifact;
