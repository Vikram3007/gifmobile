import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Homefooter from './Homefooter';

const testimonials = [
  {
    img: 'sliderman1.jpg',
    quote:
      "What truly sets Promatics apart is their personalized approach to each project. They treated my web application as if it were their own, investing time and effort to ensure its success.",
    name: 'Charles Hamya',
    title: 'Executive Director, HCH Financial Services Limited',
  },
  {
    img: 'sliderman2.png',
    quote:
      "They delivered our mobile app on time with impressive design and flawless functionality. Communication was clear throughout. We highly recommend their team!",
    name: 'Sarah Johnson',
    title: 'Product Manager, FinWave Inc.',
  },
  {
    img: 'sliderman3.jpg',
    quote:
      "I was impressed with the level of professionalism and attention to detail. They consistently exceeded expectations in both performance and creativity.",
    name: 'David Kumar',
    title: 'CEO, TechNest Solutions',
  },
  {
    img: 'sliderman4.png',
    quote:
      "Their team's passion is unmatched. They helped us scale our idea into a working product with incredible dedication. Would work with them again!",
    name: 'Aisha Thompson',
    title: 'Founder, StartupX',
  },
];

const Home5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="bg-[#2c2f36] py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-sky-400 mb-4">
            HEAR IT FROM THOSE WHO KNOW BEST.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the experiences of our valued partners and discover the difference we make firsthand.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 text-black rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="text-lg mb-4 font-semibold">“{item.quote}”</p>
                  <div className="text-sm text-gray-700">
                    <p className="font-bold text-lg">- {item.name}</p>
                    <p>{item.title}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-auto rounded-md object-cover shadow-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Homefooter/>
    </>
  );
};

export default Home5;
