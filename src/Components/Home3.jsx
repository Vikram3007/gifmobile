import React from "react";
import { Home4 } from "./Home4";

const stats = [
    {
        value: "14+",
        label: "Years of Growth",
        description:
            "From a rented cubicle to a company-owned campus, from zilch to a recognizable & awarded company, but we are just getting started",
    },
    {
        value: "120+",
        label: "Product Experts",
        description:
            "A world-class agile product team pressing digital acceleration while designing, developing, and shipping your vision",
    },
    {
        value: "1000+",
        label: "Projects Delivered",
        description:
            "Web or PWA, iOS or Android, Native or Cross Platform. For Startups, Scale-ups, or Enterprises",
    },
    {
        value: "50+",
        label: "Countries Served",
        description:
            "From India to the world. Our offices full of good vibes and talented techies making a global impact and empowering businesses worldwide",
    },
];

const techStacks = [
    {
        icon: "/icon1.gif",
        title: "Swift for iOS App Development",
        description:
            "Our iOS artisans meticulously design bespoke interfaces using Swift, guaranteeing high-performance applications finely tuned to unique requirements.",
    },
    {
        icon: "/icon2.gif",
        title: "Kotlin for Android App Development",
        description:
            "Our in-house Android maestros employ Kotlin to craft native apps that are robust, efficient, and tailored to our exacting standards.",
    },
    {
        icon: "/icon3.gif",
        title: "React Native App Development",
        description:
            "Harnessing modern approaches, our React Native developers utilize JavaScript and React to engineer top-notch mobile applications.",
    },
    {
        icon: "/icon4.gif",
        title: "Flutter App Development",
        description:
            "Using Flutter, our developers deliver sleek apps with a native feel, supported by Google's powerful ecosystem and thriving community.",
    },
];

const Home3 = () => {
    return (
        <>
            <section className="bg-gray-400 py-16 px-6 md:px-10 mt-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
                    Our Success In Numbers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-r-4 animate-bounce border-orange-500 hover:border-pink-500 p-6 shadow-md hover:shadow-lg transition duration-500"
                        >
                            <h2 className="text-5xl text-gray-300 font-extrabold text-center mb-2">
                                {item.value}
                            </h2>
                            <h3 className="text-xl text-black font-bold text-center mb-4">
                                {item.label}
                            </h3>
                            <p className="text-gray-700 text-sm text-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-400 py-16 px-6 md:px-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-2 ml-2">
                    Our Preferred Mobile Tech Stacks
                    <span className="text-blue-600">.</span>
                </h2>
                <div className="w-32 h-1 ml-2 mt-2 mb-6 bg-gradient-to-r from-blue-500 to-blue-900 animate-pulse rounded-full"></div>
                <p className="text-sm font-semibold text-gray-800 mb-8 ml-2">
                    Excelling by harnessing state-of-the-art tools and battle-tested methods to proactively meet user needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {techStacks.map((tech, index) => (
                        <div key={index} className="flex flex-col items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <img src={tech.icon} alt={tech.title} className="w-16 h-16" />
                            <h3 className="text-xl font-bold text-gray-800">{tech.title}</h3>
                            <p className="text-sm text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Home4/>
        </>
    );
};

export default Home3;
