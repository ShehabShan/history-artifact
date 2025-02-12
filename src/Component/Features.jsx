import {
  AiOutlineClockCircle,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from "react-icons/ai";

const features = [
  {
    icon: <AiOutlineClockCircle className="h-8 w-8 text-blue-600" />,
    title: "In-Depth Narratives",
    description:
      "Dive into detailed descriptions and captivating stories behind each piece.",
  },
  {
    icon: <AiOutlineThunderbolt className="h-8 w-8 text-blue-600" />,
    title: "Accessible History",
    description: "Experience a rich journey through time—anytime, anywhere.",
  },
  {
    icon: <AiOutlineTrophy className="h-8 w-8 text-blue-600" />,
    title: "Engaging Exploration",
    description:
      "Our intuitive design lets you uncover the hidden stories of the past with ease",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000000]">
        Expert Curation?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#000000]">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
