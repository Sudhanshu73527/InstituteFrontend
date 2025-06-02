import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    admissionDate: "",
    fatherName: "",
    dob: "",
    bloodGroup: "",
    learningMode: "",
    presentAddress: { village: "", po: "", pin: "", ps: "", state: "", landmark: "" },
    permanentAddress: { village: "", po: "", pin: "", ps: "", state: "", landmark: "" },
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

  const courses = ["DIFS (1 Year)", "ADIS", "PDIS", "PG Diploma", "NEBOSH", "IOSH", "OSHA", "Diploma (Engg.)"];

  const handleInputChange = (e, section, key) => {
    if (section) {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [key]: e.target.value },
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
    const d = formData;
    return `*📋 Admission Form Submission*
👤 *Name:* ${d.studentName}
📅 *Date of Admission:* ${d.admissionDate}
👨‍👧 *Father's Name:* ${d.fatherName}
🎂 *DOB:* ${d.dob}
🩸 *Blood Group:* ${d.bloodGroup}
🧑‍💻 *Learning Mode:* ${d.learningMode}

📍 *Present Address:*
🏘️ Village: ${d.presentAddress.village}
🏤 P.O: ${d.presentAddress.po}
🛂 PS: ${d.presentAddress.ps}
🗺️ State: ${d.presentAddress.state}
📮 PIN: ${d.presentAddress.pin}
📌 Landmark: ${d.presentAddress.landmark}

🏠 *Permanent Address:*
🏘️ Village: ${d.permanentAddress.village}
🏤 P.O: ${d.permanentAddress.po}
🛂 PS: ${d.permanentAddress.ps}
🗺️ State: ${d.permanentAddress.state}
📮 PIN: ${d.permanentAddress.pin}
📌 Landmark: ${d.permanentAddress.landmark}

📞 *Emergency Contacts:*
📱 1: ${d.emergency1}
📱 2: ${d.emergency2}

🎓 *Courses Chosen:* ${d.selectedCourses.join(", ")}

💰 *Fee Details:*
📊 Total Fee: ₹${d.totalFee}
💵 Advance Fee: ₹${d.advanceFee}
🧾 Receipt No: ${d.receiptNo}

🏨 *Hostel:* ${d.hostel} (${d.ac})
🩺 *Medical Issues:* ${d.medicalIssue}
📝 *Doctor's Note:* ${d.medicalNote}

📚 *Batch Details:*
🔢 Batch No: ${d.batchNo}
📆 Start Date: ${d.batchStartDate}`;
  };

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(formatMessage());
    const whatsappNumber = "918757921402";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-100 via-white to-green-200 rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6 uppercase">Admission Form</h1>

      {/* Form Sections */}
      <FormSection title="Basic Details">
        <Input name="studentName" placeholder="Student Name" onChange={handleInputChange} />
        <Input name="admissionDate" placeholder="Admission Date" onChange={handleInputChange} type="date" />
        <Input name="fatherName" placeholder="Father's Name" onChange={handleInputChange} />
        <Input name="dob" placeholder="Date of Birth" onChange={handleInputChange} type="date" />
        <Input name="bloodGroup" placeholder="Blood Group" onChange={handleInputChange} />
        <Input name="learningMode" placeholder="Learning Mode (Online/Offline)" onChange={handleInputChange} />
      </FormSection>

      <FormSection title="Present Address">
        <Input placeholder="Village" onChange={(e) => handleInputChange(e, "presentAddress", "village")} />
        <Input placeholder="P.O." onChange={(e) => handleInputChange(e, "presentAddress", "po")} />
        <Input placeholder="PIN" onChange={(e) => handleInputChange(e, "presentAddress", "pin")} />
        <Input placeholder="PS" onChange={(e) => handleInputChange(e, "presentAddress", "ps")} />
        <Input placeholder="State" onChange={(e) => handleInputChange(e, "presentAddress", "state")} />
        <Input placeholder="Landmark" onChange={(e) => handleInputChange(e, "presentAddress", "landmark")} />
      </FormSection>

      <FormSection title="Permanent Address">
        <Input placeholder="Village" onChange={(e) => handleInputChange(e, "permanentAddress", "village")} />
        <Input placeholder="P.O." onChange={(e) => handleInputChange(e, "permanentAddress", "po")} />
        <Input placeholder="PIN" onChange={(e) => handleInputChange(e, "permanentAddress", "pin")} />
        <Input placeholder="PS" onChange={(e) => handleInputChange(e, "permanentAddress", "ps")} />
        <Input placeholder="State" onChange={(e) => handleInputChange(e, "permanentAddress", "state")} />
        <Input placeholder="Landmark" onChange={(e) => handleInputChange(e, "permanentAddress", "landmark")} />
      </FormSection>

      <FormSection title="Emergency Contacts">
        <Input name="emergency1" placeholder="Emergency Contact 1" onChange={handleInputChange} />
        <Input name="emergency2" placeholder="Emergency Contact 2" onChange={handleInputChange} />
      </FormSection>

      <FormSection title="Course Selection">
        <div className="flex flex-wrap gap-4">
          {courses.map((course) => (
            <label key={course} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={formData.selectedCourses.includes(course)}
                onChange={() => handleCheckboxChange(course)}
              />
              {course}
            </label>
          ))}
        </div>
      </FormSection>

      <FormSection title="Fee Details">
        <Input name="totalFee" placeholder="Total Fee" onChange={handleInputChange} />
        <Input name="advanceFee" placeholder="Advance Fee" onChange={handleInputChange} />
        <Input name="receiptNo" placeholder="Receipt No." onChange={handleInputChange} />
      </FormSection>

      <FormSection title="Hostel & Medical">
        <Input name="hostel" placeholder="Hostel (Yes/No)" onChange={handleInputChange} />
        <Input name="ac" placeholder="AC/Non-AC" onChange={handleInputChange} />
        <Input name="medicalIssue" placeholder="Medical Issues (Yes/No)" onChange={handleInputChange} />
        <Input name="medicalNote" placeholder="Doctor's Note" onChange={handleInputChange} />
      </FormSection>

      <FormSection title="Batch Details">
        <Input name="batchNo" placeholder="Batch Number" onChange={handleInputChange} />
        <Input name="batchStartDate" placeholder="Batch Start Date" onChange={handleInputChange} type="date" />
      </FormSection>

      <div className="mt-6 text-center">
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          onClick={sendToWhatsApp}
        >
          Submit Details
        </button>
      </div>
    </div>
  );
};

const FormSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-green-800 mb-2 border-b pb-1">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const Input = ({ name, placeholder, onChange, type = "text" }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className="border border-green-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
  />
);

export default RegistrationForm;