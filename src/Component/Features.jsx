import {
  AiOutlineClockCircle,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from "react-icons/ai";

const features = [
  {
    icon: <AiOutlineClockCircle className="h-8 w-8 text-blue-600" />,
    title: "Quick Turnaround",
    description: "Get your website up and running in just 3 days.",
  },
  {
    icon: <AiOutlineThunderbolt className="h-8 w-8 text-blue-600" />,
    title: "Instant Results",
    description: "No waiting for weeks. Your online presence starts now.",
  },
  {
    icon: <AiOutlineTrophy className="h-8 w-8 text-blue-600" />,
    title: "Quality Assured",
    description: "Professional designs tailored to your needs.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000000]">
          Why Choose Infotech Clinic?
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
