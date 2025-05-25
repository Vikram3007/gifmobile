import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home5 from "./Home5";

export const Home4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cases = [
    {
      bg: "bg-rose-600",
      img: "slidarimg1.png",
      gif: "slidergif1.gif",
      title: "SUPERNAN",
      text: "In an era where convenience and safety are paramount concerns for parents, the founders of Supernan recognized a gap in the childcare finding...",
      button: true,
    },
    {
      bg: "bg-blue-300",
      img: "slidarimg2.png",
      gif: "slidergif2.gif",
      title: "NetZero",
      text: "Amidst the climate crisis, NetZero approaches sustainability with innovation. We helped build an intuitive app to drive eco-awareness...",
      button: true,
    },
    {
      bg: "bg-gray-400",
      img: "slidarimg3.svg",
      gif: "slidergif3.gif",
      title: "EduTrack",
      text: "EduTrack bridges the gap between students and institutions with seamless scheduling, attendance tracking, and more...",
      button: true,
    },
  ];

  const [selected, setSelected] = useState(0);

  const scrollToSlide = (index) => {
    setSelected(index);
  };

  return (
    <>
      {/* Title Section */}
      <div className="bg-gray-200" data-aos="fade-up">
        <h1 className="text-3xl font-extrabold m-6 py-6">
          Case Studies<span className="text-blue-600">.</span>
        </h1>
      </div>

      {/* Slider Section */}
      <div className="w-full px-4 md:w-4/5 lg:w-2/4 xl:w-2/3 mx-auto">
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${selected * (100 / cases.length)}%)`,
              width: `${cases.length * 100}%`,
            }}
          >
            {cases.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} w-full md:w-full flex flex-col md:flex-row p-10 md:p-20 text-white`}
                style={{ width: `${100 / cases.length}%` }}
              >


                {/* left Side - Text */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start gap-3">
                  <img
                    src={`/${item.img}`}
                    alt={`Slide ${index + 1}`}
                    className="w-1/3 md:w-2/5 max-h-20 object-contain"
                    data-aos="fade-up"
                  />
                  <h2 className="text-lg md:text-2xl font-bold" data-aos="fade-up">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-center md:text-left" data-aos="fade-up">
                    {item.text}
                  </p>
                  <div>
                    {item.button && (
                      <button
                        onClick={() => scrollToSlide(index)}
                        className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-gray-300 hover:text-black transition text-xs md:text-sm mt-2"
                      >
                        VIEW CASE STUDY
                      </button>
                    )}
                  </div>
                  
                </div>
                   <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
                  <img
                    src={`/${item.gif}`}
                    alt={`GIF ${index + 1}`}
                    className="w-96 h-96 md:w-96 md:h-66 rounded-xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="flex justify-center gap-3 mt-3 mb-6">
          {cases.map((_, index) => (
            <label key={index}>
              <input
                type="radio"
                name="slider"
                value={index}
                checked={selected === index}
                onChange={() => scrollToSlide(index)}
                className="hidden"
              />
              <span
                className={`inline-block w-3 h-3 rounded-full border-2 border-blue-500 cursor-pointer transition ${
                  selected === index ? "bg-blue-500" : "bg-white"
                }`}
              ></span>
            </label>
          ))}
        </div>
      </div>

      <Home5/>
    </>
  );
};
