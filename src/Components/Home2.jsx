import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Home3 from "./Home3";

const awards = [
  { img: "/svg1.svg", title: "Top Mobile App Developers", org: "Clutch, 2023", alt: "Award for Top Mobile App Developers by Clutch, 2023" },
  { img: "/svg2.svg", title: "Fastest Growing Companies", org: "Mobile App Daily, 2023", alt: "Award for Fastest Growing Companies by Mobile App Daily, 2023" },
  { img: "/svg3.svg", title: "Top App Developers", org: "The Manifest, 2021", alt: "Award for Top App Developers by The Manifest, 2021" },
  { img: "/svg4.svg", title: "Best Reviews From Clients", org: "Techreviewer, 2022", alt: "Award for Best Reviews From Clients by Techreviewer, 2022" },
  { img: "/svg5.png", title: "Top PWA Developers", org: "Top Developers, 2021", alt: "Award for Top PWA Developers by Top Developers, 2021" },
];

const values = [
  {
    img: "/value1.svg",
    title: "Value-Driven Service",
    desc: "Offering flexible pricing models tailored to fit startups and enterprises alike",
  },
  {
    img: "/value2.svg",
    title: "Exceptional Support",
    desc: "Ongoing maintenance and support to keep your app competitive",
  },
  {
    img: "/value3.svg",
    title: "Superior Craftsmanship",
    desc: "Every app is meticulously coded for performance and reliability",
  },
];

const Home2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Awards Section */}
      <section className="bg-gray-400 p-10 mt-5">
        <h2 className="text-4xl font-bold text-center mt-20 mb-6" data-aos="fade-up">
          AWARDS AND RECOGNITIONS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 text-center">
          {awards.map((award, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={award.img} alt={award.alt} className="w-24 h-24 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">{award.title}</h3>
              <p className="text-sm">{award.org}</p>
            </div>
          ))}

          {/* 5-Star Rating Card */}
          <div data-aos="fade-up" data-aos-delay={awards.length * 100}>
            <img
              src="/svg6.png"
              alt="5-star rating badge"
              aria-label="5-star rating badge with five yellow stars"
              className="w-32 h-32 mx-auto mb-1"
            />
            <div className="mt-2">
              <div className="flex justify-center items-center space-x-1 text-yellow-400 text-xl" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm mt-1 text-black">5-Star Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Promatics Section */}
      <section data-aos="fade-up" className="bg-white px-4 py-10 mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-6">
            WHY PROMATICS FOR MOBILE APP DEVELOPMENT <span className="text-blue-500">?</span>
          </h2>
          <p className="text-lg text-gray-700">
            With <span className="font-bold text-xl text-black">over ten years</span> of excellence in digital product development,
            we deliver more than technical expertise – we bring <span className="font-bold text-xl text-black">visionary solutions</span>.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="flex flex-col md:flex-row justify-center items-start gap-8 px-6 md:px-10 py-16 bg-gray-100">
        {values.map((item, index) => (
          <div
            key={index}
            className="text-center max-w-xs"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={item.img} alt={`${item.title} icon`} className="mx-auto mb-4 w-20 h-20" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      <Home3 />
    </>
  );
};

export default Home2;
