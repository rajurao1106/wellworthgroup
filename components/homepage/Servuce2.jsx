import React from "react";

// const services = [
//   {
//     number: "01",
//     title: "INTERIOR DESIGN",
//     description:
//       "We implement interior design for buildings of all sizes. With a competent interior design, even a small apartment can be significantly expanded, modernised and visually enlarged, giving it more usable space.",
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200", // Replace with your image path
//   },
//   {
//     number: "02",
//     title: "TURNKEY RENOVATION",
//     description:
//       "A well-established system of managing all stages of work makes it possible to meet deadlines and complete the interior design without you. We visit the site, monitor the similarity between the design project and the actual situation, and control the correspondence to the colour scheme.",
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
//   },
//   {
//     number: "03",
//     title: "SELECTION OF MATERIALS",
//     description:
//       "Choosing materials and interior items together with a specialist is a comprehensive and cost-effective service for the client. It helps you to purchase stylistically justified and functional objects that will not stand out from the overall picture of your home.",
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
//   },
// ];

const services = [
  {
    number: "01",
    title: "Residential Interior Solutions",
    description:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
  },
  {
    number: "02",
    title: "Commercial & Office Interiors",
    description:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
  {
    number: "03",
    title: "Turnkey Execution Projects",
    description:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
  {
    number: "04",
    title: "Interior Design & 3D Visualization",
    description:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
];

const Service2 = () => {
  return (
    <section className="max-w-7xl max-lg:overflow-hidden mx-auto px-6 py-20 bg-white font-sans text-gray-800">
      <div className="space-y-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-24"
          >
            {/* Text Content */}
            <div
              className={`flex-1 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
            >
              <div className="max-w-md">
                <h2 className="text-4xl max-lg:text-2xl font-[Bodoni_Moda] font-bold tracking-wide mb-6 flex items-center gap-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed ">
                  {service.description}
                </p>
                <div className="mt-8">
                  <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-all duration-300 shadow-lg">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Image Content with Decorative Frames */}
            <div
              className={`flex-1 relative ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
            >
              {/* Large Outline Number */}
              <div
                className={`absolute -top-16 text-7xl  text-[#e3c77a80] font-semibold z-0 
                ${index % 2 !== 0 ? "left-0" : "right-0"}`}
              >
                {service.number}
              </div>

              {/* Decorative Frame */}
              <div
                className={`absolute border border-gray-200 w-full h-full -top-6 
                ${index % 2 !== 0 ? "-right-20" : "-left-20"} z-0`}
              ></div>

              {/* Actual Image */}
              <div className="relative z-10 overflow-hidden shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
    </section>
  );
};

export default Service2;
