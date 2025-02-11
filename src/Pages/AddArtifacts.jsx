import useAuthDetails from "../Context/AuthContext/useAuthDetails";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddArtifacts = () => {
  const { user } = useAuthDetails();
  //console.log(user);

  const handleAddArtifact = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());

    const updateData = { ...initialData, likeCount: 0 };

    axios
      .post("https://artifacts-server.vercel.app/add-artifact", updateData)
      .then((result) => {
        const data = result.data;
        //console.log(data);
        if (data.insertedId) {
          e.target.reset();
          toast.success("Artifact Added Successfully");
        } else {
          toast.error("Faild to add. Try again");
        }
      });
  };

  return (
    <div className="card rounded-none bg-gray-700 w-full shrink-0 shadow-2xl pt-16  lg:px-[300px]">
      <form onSubmit={handleAddArtifact} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Artifact Name</span>
          </label>
          <input
            type="text"
            placeholder="Artifact Name"
            className="input input-bordered"
            name="ArtifactName"
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
            required
          />
        </div>

        <div className="form-control">
          <select
            defaultValue="Artifact Type"
            className="select w-full max-w-xs"
            name="ArtifactType"
            required
          >
            <option disabled>Artifact Type</option>
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
          <button className="btn btn-primary">Add Artifact</button>
        </div>
      </form>
    </div>
  );
};

export default AddArtifacts;
