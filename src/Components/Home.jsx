import React from 'react';
import Home2 from './Home2'

const Home = () => {
    return (
        <>

            {/* Main Section: GIF + Form */}
            <div className="min-h-screen flex flex-col md:flex-row items-center justify-center w-full p-4 gap-6">
                {/* GIF Image */}
                <img
                    src="/homemobilegif1.gif"
                    alt="Animated Logo"
                    className="w-full md:w-[500px] rounded-lg"
                />

                {/* Form */}
                <form className="w-full md:w-[400px] flex flex-col rounded-lg p-6 shadow-2xl gap-4 bg-white">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-500 rounded px-4 py-2"
                    />

                    {/* Country Code + Phone */}
                    <div className="flex">
                        <select className="border border-gray-500 rounded-l px-3 py-2 bg-white">
                            <option value="+91">🇮🇳 +91 India</option>
                            <option value="+1">🇺🇸 +1 USA</option>
                            <option value="+44">🇬🇧 +44 UK</option>
                            <option value="+61">🇦🇺 +61 Australia</option>
                            <option value="+81">🇯🇵 +81 Japan</option>
                            <option value="+49">🇩🇪 +49 Germany</option>
                            <option value="+33">🇫🇷 +33 France</option>
                            <option value="+86">🇨🇳 +86 China</option>
                            <option value="+65">🇸🇬 +65 Singapore</option>
                            <option value="+971">🇦🇪 +971 UAE</option>
                            <option value="+880">🇧🇩 +880 Bangladesh</option>
                            <option value="+92">🇵🇰 +92 Pakistan</option>
                            <option value="+94">🇱🇰 +94 Sri Lanka</option>
                            <option value="+966">🇸🇦 +966 Saudi Arabia</option>
                            <option value="+27">🇿🇦 +27 South Africa</option>
                        </select>
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="border border-gray-500 rounded-r px-4 py-2 w-full"
                        />
                    </div>

                    {/* Email Field */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-500 rounded px-4 py-2"
                    />

                    {/* Message Box */}
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="border border-gray-500 rounded px-4 py-2 resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Tagline Section */}
            <div className="px-20 line-clamp-3 ">
                <p className="text-3xl font-bold">
                    Crafting the
                </p>
                <p className="text-3xl font-bold">
                    Future, One App <span className="text-blue-500">at a Time</span>
                </p>
                <p className="text-sm text-gray-500 font-stretch-condensed mt-2  ">
                    Building Apps that don't just meet industry standards – they set them.
                </p>
            </div>
            
            <Home2/>
        </>
    );
};

export default Home;
