import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      src: "/Team/somu2.jpg",
      name: "Soma Sekhar",
      role: "President"
    },
        {
      src: "/Team/bhargavi_pic.jpg",
      name: "Bhargavi ",
      role: "Vice President"
    },
    {
      src: "/Team/sirisha.jpg",
      name: "Sirisha",
      role: "TECHNICAL LEAD"
    },
    {
      src: "/Team/Mouli.jpg",
      name: "Mouli K",
      role: "AI Lead"
    },

    
    
     {
      src: "/Team/Hemanth_Moka1.jpg",
      name: "Hemanth Moka",
      role: "</>Web Developer"
    }, 
    {
      src: "/Team/Nithya2.jpg",
      name: "Nithya",
      role: "Core Member"
    }, 
    {
      src: "/Team/swathi2.jpg",
      name: "Swathi",
      role: "Core Member"
    },
        {
      src: "/Team/Praveen.jpg",
      name: "Praveen",
      role: "Founder"
    }

  ];

  const partnerLogos = [
    "logo-waverio.svg",
    "logo-squarestone.svg",
    "logo-creaty.svg",
    "logo-creaty.svg",
    "logo-creaty.svg"
  ];

  return (
    <section className="mt-0 py-20 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-20 mb-19 text-2xl font-bold text-violet-300 sm:text-4xl xl:text-5xl font-poppins">
  The Blockchain Hub Core Team
</h2>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mt-10 px-6 sm:px-10">

          {teamMembers.map((member, idx) => (
            <div key={idx} className="text-center">
              <img
                className="object-cover w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 mx-auto rounded-full shadow-lg"
                src={member.src}
                alt={member.name}
              />
              <p className="mt-4 text-base sm:text-lg font-semibold font-poppins">{member.name}</p>
              <p className="mt-1 text-sm text-gray-400 font-poppins">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Dotted Divider */}
        <div className="mt-14">
          <svg className="w-auto h-4 mx-auto text-gray-600 opacity-50" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${i * 7 + 4} 1)`}
              />
            ))}
          </svg>
        </div>

        {/* Partner Logos */}
        {/* <div className="max-w-3xl mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              className="h-10 sm:h-14 opacity-70 hover:opacity-100 transition"
              src="/TBH_logo.png"
              alt="partner logo"
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Team;
