import React from 'react';

const services = [
  {
    name: "Learn Blockchain",
    role: "Workshops & Hands-on Labs",
    image: "https://img.icons8.com/color/96/classroom.png",
    feedback: "From fundamentals to advanced topics — we organize interactive workshops, sessions, and labs tailored for all skill levels.",
  },
  {
    name: "Build Projects",
    role: "Real-World dApps & Smart Contracts",
    image: "https://img.icons8.com/color/96/code.png",
    feedback: "Collaborate in peer groups to build real-world blockchain applications like decentralized apps and smart contracts.",
  },
  
  {
    name: "Hackathons & Research",
    role: "Innovation & Ecosystem Engagement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0Rz8dMdYe5qE7RgB14DFnscOtbBbjhdCfw&s",
    feedback: "Participate in hackathons, explore trends like ZKPs, Layer 2 scaling, and contribute to next-gen Web3 infrastructure.",
  }
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 
        1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 
        3.292c.3.921-.755 1.688-1.54 
        1.118l-2.8-2.034a1 1 0 
        00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
        1 0 00-.364-1.118L2.98 
        8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
        00.951-.69l1.07-3.292z" />
  </svg>
);

const ServicesShowcase = () => {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-white font-pj">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
              The Blockchain Hub
            </h2>
          </div>

          <div className="mt-8 text-center md:mt-16">
            <a href="#" className="pb-2 text-base font-bold leading-7 text-white border-b-2 border-white transition-all duration-200 hover:border-gray-600 hover:text-gray-600 font-pj">
              Explore our initiatives
            </a>
          </div>

          <div className="relative mt-10 md:mt-24 w-full">
            <div
              className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6 w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
              style={{
                background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “{service.feedback}”
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={service.image}
                        alt={`Icon of ${service.name}`}
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{service.name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{service.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
