import React, { useState } from 'react';

const AdmissionRequest = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    studentClass: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, parentName, studentClass, phone, message } = formData;

    const whatsappMessage = `*Admission Request Form*%0A
👦 Student Name: ${studentName}%0A
👨‍👩‍👧 Parent Name: ${parentName}%0A
🏫 Class: ${studentClass}%0A
📞 Contact: ${phone}%0A
📝 Message: ${message || 'N/A'}`;

    const phoneNumber = '917739692245'; // Add your WhatsApp number here (with country code)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="bg-green-50 py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Admission Request</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg space-y-4"
      >
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.studentName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="parentName"
          placeholder="Parent Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.parentName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="studentClass"
          placeholder="Class Applying For"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.studentClass}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          className="w-full border border-gray-300 rounded px-4 py-2"
          rows="3"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default AdmissionRequest;
