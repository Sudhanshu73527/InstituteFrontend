import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    admissionDate: "",
    fatherName: "",
    dob: "",
    bloodGroup: "",
    learningMode: "",
    presentAddress: {
      village: "",
      po: "",
      pin: "",
      ps: "",
      state: "",
      landmark: "",
    },
    permanentAddress: {
      village: "",
      po: "",
      pin: "",
      ps: "",
      state: "",
      landmark: "",
    },
    emergency1: "",
    emergency2: "",
    qualification: [],
    selectedCourses: [],
    totalFee: "",
    advanceFee: "",
    receiptNo: "",
    hostel: "",
    ac: "",
    medicalIssue: "",
    medicalNote: "",
    batchNo: "",
    batchStartDate: "",
  });

  const courses = [
    "DIFS (1 Year)", "ADIS", "PDIS", "PG Diploma", "NEBOSH", "IOSH", "OSHA", "Diploma (Engg.)", "B. Tech", "MBA"
  ];

  const handleInputChange = (e, section, key) => {
    if (section === "presentAddress" || section === "permanentAddress") {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [key]: e.target.value,
        },
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleCheckboxChange = (course) => {
    setFormData((prev) => ({
      ...prev,
      selectedCourses: prev.selectedCourses.includes(course)
        ? prev.selectedCourses.filter((c) => c !== course)
        : [...prev.selectedCourses, course],
    }));
  };

  const formatMessage = () => {
  const data = formData;
  return `
*📋 Admission Form Submission*
👤 *Name:* ${data.studentName}
📅 *Date of Admission:* ${data.admissionDate}
👨‍👧 *Father's Name:* ${data.fatherName}
🎂 *DOB:* ${data.dob}
🩸 *Blood Group:* ${data.bloodGroup}
🧑‍💻 *Learning Mode:* ${data.learningMode}

📍 *Present Address:*
🏘️ Village: ${data.presentAddress.village}
🏤 P.O: ${data.presentAddress.po}
🛂 PS: ${data.presentAddress.ps}
🗺️ State: ${data.presentAddress.state}
📮 PIN: ${data.presentAddress.pin}
📌 Landmark: ${data.presentAddress.landmark}

🏠 *Permanent Address:*
🏘️ Village: ${data.permanentAddress.village}
🏤 P.O: ${data.permanentAddress.po}
🛂 PS: ${data.permanentAddress.ps}
🗺️ State: ${data.permanentAddress.state}
📮 PIN: ${data.permanentAddress.pin}
📌 Landmark: ${data.permanentAddress.landmark}

📞 *Emergency Contacts:*
📱 1: ${data.emergency1}
📱 2: ${data.emergency2}

🎓 *Courses Chosen:* ${data.selectedCourses.join(", ")}

💰 *Fee Details:*
📊 Total Fee: ₹${data.totalFee}
💵 Advance Fee: ₹${data.advanceFee}
🧾 Receipt No: ${data.receiptNo}

🏨 *Hostel:* ${data.hostel} (${data.ac})
🩺 *Medical Issues:* ${data.medicalIssue}
📝 *Doctor's Note:* ${data.medicalNote}

📚 *Batch Details:*
🔢 Batch No: ${data.batchNo}
📆 Start Date: ${data.batchStartDate}
  `.trim();
};


  const sendToWhatsApp = () => {
    const message = encodeURIComponent(formatMessage());
    const whatsappNumber = "91 87579 21402";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 bg-green-100 text-black">
      <h1 className="text-2xl font-bold text-center uppercase mb-6">Admission Form</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="studentName" placeholder="Name of Student" className="input-style" onChange={handleInputChange} />
        <input name="admissionDate" placeholder="Date of Admission" className="input-style" onChange={handleInputChange} />
        <input name="fatherName" placeholder="Father's Name" className="input-style" onChange={handleInputChange} />
        <input name="dob" placeholder="Date of Birth" className="input-style" onChange={handleInputChange} />
        <input name="bloodGroup" placeholder="Blood Group" className="input-style" onChange={handleInputChange} />
        <input name="learningMode" placeholder="Mode of Learning (Online/Offline/Hybrid)" className="input-style" onChange={handleInputChange} />
      </div>

      <h3 className="mt-6 font-semibold text-lg">Present Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Village" className="input-style" onChange={(e) => handleInputChange(e, "presentAddress", "village")} />
        <input placeholder="P.O." className="input-style" onChange={(e) => handleInputChange(e, "presentAddress", "po")} />
        <input placeholder="PIN Code" className="input-style" onChange={(e) => handleInputChange(e, "presentAddress", "pin")} />
        <input placeholder="PS" className="input-style" onChange={(e) => handleInputChange(e, "presentAddress", "ps")} />
        <input placeholder="State" className="input-style" onChange={(e) => handleInputChange(e, "presentAddress", "state")} />
        <input placeholder="Landmark" className="input-style" onChange={(e) => handleInputChange(e, "presentAddress", "landmark")} />
      </div>

      <h3 className="mt-6 font-semibold text-lg">Permanent Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Village" className="input-style" onChange={(e) => handleInputChange(e, "permanentAddress", "village")} />
        <input placeholder="P.O." className="input-style" onChange={(e) => handleInputChange(e, "permanentAddress", "po")} />
        <input placeholder="PIN Code" className="input-style" onChange={(e) => handleInputChange(e, "permanentAddress", "pin")} />
        <input placeholder="PS" className="input-style" onChange={(e) => handleInputChange(e, "permanentAddress", "ps")} />
        <input placeholder="State" className="input-style" onChange={(e) => handleInputChange(e, "permanentAddress", "state")} />
        <input placeholder="Landmark" className="input-style" onChange={(e) => handleInputChange(e, "permanentAddress", "landmark")} />
      </div>

      <h3 className="mt-6 font-semibold text-lg">Emergency Contacts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="emergency1" placeholder="Emergency Contact 1" className="input-style" onChange={handleInputChange} />
        <input name="emergency2" placeholder="Emergency Contact 2" className="input-style" onChange={handleInputChange} />
      </div>

      <h3 className="mt-6 font-semibold text-lg">Course Selection</h3>
      <div className="flex flex-wrap gap-3 mt-2">
        {courses.map((course) => (
          <label key={course} className="text-sm flex items-center space-x-1">
            <input
              type="checkbox"
              checked={formData.selectedCourses.includes(course)}
              onChange={() => handleCheckboxChange(course)}
            />
            <span>{course}</span>
          </label>
        ))}
      </div>

      <h3 className="mt-6 font-semibold text-lg">Fee Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="totalFee" placeholder="Total Fee" className="input-style" onChange={handleInputChange} />
        <input name="advanceFee" placeholder="Advance Fee" className="input-style" onChange={handleInputChange} />
        <input name="receiptNo" placeholder="Fee Receipt No." className="input-style" onChange={handleInputChange} />
      </div>

      <h3 className="mt-6 font-semibold text-lg">Hostel & Medical</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="hostel" placeholder="Hostel (Yes/No)" className="input-style" onChange={handleInputChange} />
        <input name="ac" placeholder="AC/Non-AC" className="input-style" onChange={handleInputChange} />
        <input name="medicalIssue" placeholder="Medical Issues (Yes/No)" className="input-style" onChange={handleInputChange} />
        <input name="medicalNote" placeholder="Doctor's Note if any" className="input-style" onChange={handleInputChange} />
      </div>

      <h3 className="mt-6 font-semibold text-lg">Batch Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="batchNo" placeholder="Batch Number" className="input-style" onChange={handleInputChange} />
        <input name="batchStartDate" placeholder="Batch Starting Date" className="input-style" onChange={handleInputChange} />
      </div>

      <div className="mt-8 text-center">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full md:w-auto"
          onClick={sendToWhatsApp}
        >
          Submit Your data 
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
