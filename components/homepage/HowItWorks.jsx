import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Match with one of our talented designers and get inspired.",
      description:
        "Take a style quiz to help us get to know you a little bit better, then choose your real estateer from our personalized recommendations. With over 10 years of experience and nearly 1 million designs, our expert team will help you turn your vision into reality.",
      images: (
        <div className="grid grid-cols-[1.5fr_1fr] gap-2  h-[250px] w-[440px]">
          <div className=" overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
              alt="Living room"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className=" overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
                alt="Bed detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
                alt="Textiles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "Partner with your designer to create a home you love.",
      description:
        "Great design doesn't happen alone. Let your designer guide you to solutions that meet your functional needs and products that suit your unique style. See it come to life with a 3D rendering of the design in your actual space.",
      images: (
        <div className="grid  gap-2 h-[250px] w-[450px]">
          <div className=" overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
              alt="Living room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "Shop exclusive deals, and bring your design home with ease.",
      description:
        "Access the best prices on your favorite home brands, get exclusive discounts, and shop everything you need for your space in a single, streamlined checkout. The result? Even better than your dreams.",
      images: (
        <div className="grid  gap-2 h-[250px] w-[450px]">
          <div className=" overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
              alt="Living room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#F6F6F4] w-full">
      <section className="max-w-6xl mx-auto px-6 py-30 ">
        <h2 className="text-center text-xl max-lg:text-base tracking-widest uppercase mb-16 font-sans ">
          How Wellworth Estate Works
        </h2>

        <div className="space-y-24">
          {steps.map((step) => (
            <div
              key={step.id}
              className="grid grid-cols-1  md:grid-cols-12 gap-10 items-start justify-center"
            >
              {/* Numbering Column */}
              <div className="md:col-span-1 font-mono text-4xl text-[#E3C77A] pt-1">
                {step.id}
              </div>

              {/* Content Column */}
              <div className="md:col-span-5 ">
                <h3 className="text-3xl font-[Bodoni_Moda] md:text-4xl mb-6 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-sans text-base">
                  {step.description}
                </p>
              </div>

              {/* Image Column */}
              <div className="md:col-span-6 justify-end items-end flex ">
                {step.images}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
