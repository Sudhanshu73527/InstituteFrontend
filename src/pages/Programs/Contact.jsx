import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We’d love to hear from you! Reach out for admissions, course details, or general inquiries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Phone */}
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <FaPhoneAlt className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-green-700 mb-1">Phone Numbers</h4>
              <p className="text-gray-600">+91 87579 21402</p>
              <p className="text-gray-600">+91 73718 71737</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <FaEnvelope className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-green-700 mb-1">Email</h4>
              <p className="text-gray-600">cihs.institute@gmail.com</p>
              <p className="text-gray-600">support@cihs.org.in</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-green-700 mb-1">Address</h4>
              <p className="text-gray-600">
                CIHS Institute, Main Road,<br />
                 Infront of Mufassil Thana, Mansha Tola, Bettiah-Bihar
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <FaClock className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-green-700 mb-1">Working Hours</h4>
              <p className="text-gray-600">Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
