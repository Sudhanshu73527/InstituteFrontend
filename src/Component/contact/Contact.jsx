import React, { useState } from "react";
import consultImage from "../../assets/chuma1.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = form;

    const whatsappMessage = `Hello, I would like to book a free consultancy.%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Message:* ${message}`;

    const phoneNumber = "918757921402";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <section className="bg-green-600 w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8">
        Book Your <span className="text-yellow-300">Free Consultancy</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-2xl shadow-xl max-w-6xl mx-auto overflow-hidden md:scale-105 lg:scale-110 transition-transform duration-300">
        {/* Left: Image + Text */}
        <div className="md:w-1/2 bg-green-600 p-6 sm:p-8 lg:p-12 text-center space-y-4">
          <h3 className="text-lg md:text-2xl font-bold text-yellow-300">
            Book a <span className="underline decoration-yellow-400">Free Consultation</span>
          </h3>
          <p className="text-yellow-100 text-sm md:text-base max-w-xs md:max-w-md mx-auto">
          Need expert guidance on workplace safety or compliance?
          </p>
          <img
            src={consultImage}
            alt="Consultation"
            className="w-full max-w-xs md:max-w-sm mx-auto rounded-xl shadow-md"
          />
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 p-6 sm:p-8 lg:p-12 bg-white">
          <form onSubmit={handleSubmit} className="space-y-4 text-sm md:text-base">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 md:py-3 border border-green-300 rounded-md focus:outline-none focus:border-yellow-400 text-gray-800"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 md:py-3 border border-green-300 rounded-md focus:outline-none focus:border-yellow-400 text-gray-800"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 md:py-3 border border-green-300 rounded-md focus:outline-none focus:border-yellow-400 text-gray-800"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 md:py-3 border border-green-300 rounded-md focus:outline-none focus:border-yellow-400 text-gray-800 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold py-2 md:py-3 rounded-full transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
