import mystries from "../assets/icon/mystries.jpg";
import pot from "../assets/icon/pot.jpg";
const Details = () => {
  return (
    <div className="mt-16 mb-8">
      <h2 className="text-center text-4xl text-[#000000] font-bold mb-8">
        "Unearth the Past Through Artifacts"
      </h2>

      <div className="mb-24 text-[#000000] ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:w-5/6">
            <div className="h-38 bg-gradient-to-r from-red-100 to-red-50 rounded-xl"></div>
            <div className="rounded-xl row-span-2">
              <img
                className="mx-auto my-5 w-[260px] h-[240px] rounded-xl"
                src={pot}
                alt=""
              />
            </div>
            <div className=" rounded-xl row-span-2">
              <img
                className="mx-auto my-5 w-[290px] h-[260px] rounded-xl"
                src={mystries}
                alt=""
              />
            </div>
            <div className="h-38 bg-gradient-to-r from-stone-200 to-stone-100 rounded-xl"></div>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-5">
              Artifacts, Richly Presented
            </h1>
            <p className="text-gray-500">
              Our collection brings history to life, showcasing the finest
              artifacts that represent the essence of ancient civilizations.
              From weapons to inscriptions, each artifact tells a story of
              culture, power, and legacy.
            </p>
            <br />
            <h1 className="text-2xl font-bold mb-5">Unique Significance</h1>
            <p className="text-gray-500">
              Each artifact stands apart, reflecting a different time and place,
              with craftsmanship that speaks to the ingenuity and skill of past
              societies.
            </p>
            <br />
            <h1 className="text-2xl font-bold mb-5">Timeless Legacy</h1>
            <p className="text-gray-500">
              Preserving the beauty and craftsmanship of the past, these
              artifacts continue to tell their stories with elegance and
              historical value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
