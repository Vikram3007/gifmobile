import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Homefooter = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // You can process or send formData here
    console.log('Form submitted:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row mx-10 bg-gray-100 shadow-md rounded mt-10 overflow-hidden">
        {/* Left Side - 12 Images */}
        <div className="md:w-1/3 bg-gray-200 p-4 grid grid-cols-3 gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="p-2 rounded transition duration-300 hover:bg-gray-200"
            >
              <img
                src={`company${i + 1}.png`}
                alt={`Company ${i + 1}`}
                className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition duration-100"
              />
            </div>
          ))}
        </div>

        {/* Right Side - Form */}
        <div className="md:w-2/3 bg-gray-300 p-6">
          <h2 className="text-3xl font-bold text-center mb-8">WITH MOBILE ENGINEERING EXPERT</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-1" htmlFor="fullName">Full Name *</label>
              <input id="fullName" name="fullName" type="text" placeholder="Enter Full Name*" className="w-full border px-4 py-2 rounded" required />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="+91" className="w-full border px-4 py-2 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="email">Enter Email *</label>
              <input id="email" name="email" type="email" placeholder="Enter Email*" className="w-full border px-4 py-2 rounded" required />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="contactID">WhatsApp / Skype ID</label>
              <input id="contactID" name="contactID" type="text" placeholder="Skype / Whatsapp" className="w-full border px-4 py-2 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Company Name" className="w-full border px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="website">Website</label>
              <input id="website" name="website" type="url" placeholder="Enter URL" className="w-full border px-4 py-2 rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1" htmlFor="projectType">Project Type</label>
              <select id="projectType" name="projectType" className="w-full border px-4 py-2 rounded" required>
                <option value="" disabled>Select a project type</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Web App">Web App</option>
                <option value="Consulting">Consulting</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="estimatedBudget">Estimated Budget</label>
              <select id="estimatedBudget" name="estimatedBudget" className="w-full border px-4 py-2 rounded" required>
                <option value="" disabled>Select budget range</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block font-semibold mb-1" htmlFor="description">Tell us more about your project or idea</label>
              <textarea id="description" name="description" placeholder="Describe your project..." className="w-full border px-4 py-2 rounded h-28" />
            </div>

            <div className="md:col-span-2 border-2 border-dashed border-gray-400 p-4 text-center rounded cursor-pointer">
              <label htmlFor="file-upload" className="cursor-pointer block">
                {fileName || 'Drag and drop a file here, or click to select a file'}
              </label>
              <input
                name="file"
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input name="nda" type="checkbox" id="nda" defaultChecked />
              <label htmlFor="nda">Send me your NDA</label>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side */}
          <p className="text-center md:text-center ml-30 text-sm">
            © 2025 Promatics Technologies Private Limited. All Rights Reserved |{' '}
            <a href="/privacy-policy" className="underline hover:text-blue-400">Privacy Policy</a>
          </p>

          {/* Right Side - Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homefooter;
