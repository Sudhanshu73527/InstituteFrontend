import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdmitCard = () => {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [batch, setBatch] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all students once
//  useEffect(() => {
//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get('/api/students');
//       console.log('Fetched students:', res.data); // 👈 Add this
//       setStudents(res.data);
//     } catch (err) {
//       console.error('Failed to fetch students:', err);
//       setStudents([]); // 👈 Ensure it's always an array
//     }
//   };
//   fetchStudents();
// }, []);


  const handleGenerateSingle = async () => {
  if (!studentId) return alert("Please select a student");
  try {
    setLoading(true);
    const res = await axios.post('http://localhost:5001/api/admitCard/generate/single', { studentId }, {
      responseType: 'blob',
    });
    const blob = new Blob([res.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  } catch (err) {
    console.error('Error generating single admit card:', err);
    alert('Failed to generate admit card');
  } finally {
    setLoading(false);
  }
};

const handleGenerateBulk = async () => {
  if (!batch) return alert("Please select a batch");
  try {
    setLoading(true);
    const res = await axios.post('http://localhost:5001/api/admitCard/generate/bulk', { batch }, {
      responseType: 'blob',
    });
    const blob = new Blob([res.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  } catch (err) {
    console.error('Error generating bulk admit cards:', err);
    alert('Failed to generate bulk admit cards');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">🎓 	Download Admit Card</h2>

      {/* Single Admit Card */}
      <div className="mb-8 bg-white p-6 shadow rounded">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Generate for Individual Student</h3>
        <select
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2 mb-3"
        >
          <option value="">-- Select Student --</option>
          {students.map((stu) => (
            <option key={stu._id} value={stu._id}>
              {stu.userId?.fullName || stu.rollNumber} ({stu.passingYear})
            </option>
          ))}
        </select>
        <button
          onClick={handleGenerateSingle}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Admit Card'}
        </button>
      </div>

      {/* Bulk Admit Cards */}
      <div className="bg-white p-6 shadow rounded">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Generate for Entire Batch</h3>
        <select
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2 mb-3"
        >
          <option value="">-- Select Passing Year --</option>
          {[...Array(20)].map((_, idx) => {
            const year = new Date().getFullYear() - idx;
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>
        <button
          onClick={handleGenerateBulk}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Bulk Admit Cards'}
        </button>
      </div>
    </div>
  );
};

export default AdmitCard;
