import { AiOutlineArrowRight } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover & Explore Historical Artifacts
        </h1>
        <p className="text-xl md:text-2xl mb-8">
        Unearthing Timeless Artifacts in just 6 days!
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 mx-auto hover:bg-gray-200 transition">
          Learn More <AiOutlineArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}
