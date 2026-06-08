import React from 'react';

// Formatted data from your screenshot
const timelineEvents = [
  {
    id: 1,
    startYear: '1996',
    endYear: '1998',
    title: 'VARDHMAN NAGAR PHASE NO. 1',
    description: '40 Acre - 800 Member Migrated',
  },
  {
    id: 2,
    startYear: '1998',
    endYear: '1999',
    title: 'VARDHMAN NAGAR PHASE NO. 2',
    description: '35 Acre - 700 Member Migrated',
  },
  {
    id: 3,
    startYear: '2001',
    endYear: '2002',
    title: 'NANES NAGAR PHASE NO. 1',
    description: '35 Acre - 600 member Migrated',
  },
  {
    id: 4,
    startYear: '2002',
    endYear: '2004',
    title: 'NANES NAGAR PHASE NO. 2',
    description: '30 Acre - 500 Member Migrated',
  },
  {
    id: 5,
    startYear: '2006',
    endYear: '2007',
    title: 'ARIHANT VIHAR TAKEOVER',
    description: '20 Acre - 300 Member Migrated',
  },
  {
    id: 6,
    startYear: '2009',
    endYear: '2010',
    title: 'HIRAPUR - WELLWORTH CITY',
    description: '30 Member - 32500 Sq.ft.',
  },
  {
    id: 7,
    startYear: '2011',
    endYear: '2012',
    title: 'CHHACHHANPERI & SALONI',
    description: '100 Acre Land Acqiured',
  },
  {
    id: 8,
    startYear: '2012',
    endYear: '2013',
    title: 'DEVPURI WELL WORTH TOWER',
    description: 'Land Acquire',
  },
  {
    id: 9,
    startYear: '2015',
    endYear: '2016',
    title: 'KAMAL VIHAR',
    description: '90000 Sq.ft. Plot Allotted',
  },
  {
    id: 10,
    startYear: '2025',
    endYear: null,
    title: 'ACACIA PREMIUM RESIDENTIAL PROJECT',
    description: '28.50 ACRE',
  },
];

export default function AlternatingTimeline() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1b5e20] mb-16">
          Our Journey
        </h2>

        <div className="relative wrap overflow-hidden h-full">
          {/* Main Vertical Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute h-full border-l-[2px] border-gray-200 left-8 md:left-1/2 md:-translate-x-1/2 z-0"></div>

          {timelineEvents.map((event, index) => {
            // Automatically alternate left/right based on array index
            const isLeft = index % 2 === 0;

            return (
              <div
                key={event.id}
                className={`mb-12 flex justify-between items-center w-full ${
                  isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-row-reverse`}
              >
                {/* Empty Spacer Column for Desktop */}
                <div className="hidden md:block md:w-5/12"></div>

                {/* Center Node / Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-[#1b5e20] rounded-full ring-4 ring-white shadow-sm"></div>
                </div>

                {/* Connecting Horizontal Line (Visible only on Desktop) */}
                <div
                  className={`hidden md:block absolute w-[4%] border-t-[2px] border-gray-200 left-1/2 -translate-x-1/2 z-0 ${
                    isLeft ? 'ml-[-2%]' : 'ml-[2%]'
                  }`}
                ></div>

                {/* Card Container */}
                <div className="w-full pl-16 md:pl-0 md:w-5/12 z-10 hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-[#f8f9fa] p-5 shadow-sm flex items-stretch gap-4 w-full relative">
                    
                    {/* Green Date Box (Adjusted for Years) */}
                    <div className="bg-[#1b5e20] text-white flex flex-col justify-center items-center w-[75px] py-3 flex-shrink-0">
                      <span className="text-[15px] font-bold leading-none">{event.startYear}</span>
                      {event.endYear && (
                        <>
                          <div className="w-4 h-[1px] bg-white/60 my-1.5"></div>
                          <span className="text-[15px] font-bold leading-none">{event.endYear}</span>
                        </>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 py-1">
                      <h3 className="font-bold text-[#1b5e20] text-[13px] tracking-wider uppercase mb-1.5">
                        {event.title}
                      </h3>

                      <div className="flex items-start gap-3 mt-1.5">
                        {/* Decorative Horizontal Line next to text */}
                        <div className="w-6 h-[2px] bg-[#388e3c] mt-2.5 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}