import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Format message for WhatsApp
    const whatsappMessage = `Hello CIHS Team,%0A%0AYou have received a new feedback:%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A📝 Message: ${message}`;

    // Replace with your actual WhatsApp number (without +)
    const phoneNumber = "9187579 21402";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Feedback Form</h2>
        <p className="text-lg text-gray-600 mb-10">
          We value your feedback! Whether you're a student or visitor, please share your thoughts to help us improve.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 text-left space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Share your feedback..."
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
