import React, { useState } from 'react';

const AdmissionRequest = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    course: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow digits for phone field
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, email, course, phone, message } = formData;

    // Simple email validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const whatsappMessage = `*Admission Request Form*%0A
👦 Student Name: ${studentName}%0A
📧 Email: ${email}%0A
📚 Course: ${course}%0A
📞 Contact: ${phone}%0A
📝 Message: ${message || 'N/A'}`;

    const phoneNumber = '91 87579 21402'; // Your WhatsApp number
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
          name="email"
          placeholder="Email ID"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.email}
          onChange={handleChange}
        />
        <select
          name="course"
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Safety Course</option>
          <option value="Diploma in Fire and Industrial Safety">Diploma in Fire and Industrial Safety</option>
          <option value="IOSH (Managing Safely)">IOSH (Managing Safely)</option>
          <option value="ADIS & PDIS">ADIS & PDIS</option>
          <option value="OSHA 30-Hour Training">OSHA 30-Hour Training</option>
          <option value="NEBOSH IGC">NEBOSH IGC</option>
          <option value="First Aid & CPR Training">First Aid & CPR Training</option>
          <option value="Health and Safety Officer">Health and Safety Officer</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          required
          pattern="\d*"
          maxLength="12"
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
