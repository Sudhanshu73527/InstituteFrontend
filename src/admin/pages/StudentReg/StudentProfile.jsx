import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentProfile, deleteStudentProfile } from '../../../services/studentApi';
import {
  FaArrowLeft,
  FaEnvelope,
  FaUser,
  FaUniversity,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaIdCard,
  FaBuilding,
  FaBirthdayCake,
  FaUserTie,
  FaLock,
  FaUserCheck,
  FaCheckCircle,
  FaClock,
} from 'react-icons/fa';

const StudentProfile = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await getStudentProfile(studentId);
        setStudent(res.data?.student || null);
      } catch (err) {
        setError('Failed to fetch student details');
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  if (loading) return <p className="text-blue-500 p-6">Loading student profile...</p>;
  if (error) return <p className="text-red-500 p-6">{error}</p>;
  if (!student) return <p className="text-gray-500 p-6">Student not found.</p>;

  const { userId, courseId, educationDetails } = student;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-blue-600 hover:underline"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src={userId?.avatar || student.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-700">
              {userId?.firstName} {userId?.lastName}
            </h2>
            <p className="text-sm text-gray-500">{userId?.email}</p>
          </div>
        </div>

        {/* Admin Account Info */}
        <div className="bg-blue-50 p-4 rounded border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Account Info</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <ProfileItem icon={<FaUser />} label="Username" value={userId?.username} />
            <ProfileItem icon={<FaLock />} label="Password" value={userId?.password || 'N/A'} />
            <ProfileItem icon={<FaUserCheck />} label="Status" value={userId?.status} />
            <ProfileItem icon={<FaCheckCircle />} label="Email Verified" value={userId?.isEmailVerified ? 'Yes' : 'No'} />
            <ProfileItem icon={<FaClock />} label="Last Login" value={userId?.lastLogin ? new Date(userId.lastLogin).toLocaleString() : 'Never'} />
            <ProfileItem icon={<FaCalendarAlt />} label="Created At" value={new Date(userId?.createdAt).toLocaleString()} />
            {/* <ProfileItem icon={<FaCalendarAlt />} label="Updated At" value={new Date(userId?.updatedAt).toLocaleString()} /> */}
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <ProfileItem icon={<FaPhone />} label="Phone" value={student.phoneNumber} />
          <ProfileItem icon={<FaBirthdayCake />} label="Date of Birth" value={new Date(student.dob).toDateString()} />
          <ProfileItem icon={<FaUserTie />} label="Father's Name" value={student.fatherName} />
          <ProfileItem icon={<FaUniversity />} label="Course" value={`${courseId?.name} (${courseId?.code})`} />
          <ProfileItem icon={<FaCalendarAlt />} label="Passing Year" value={student.passingYear} />
        </div>

        {/* Address & Institution */}
        <div className="grid sm:grid-cols-2 gap-4">
          <ProfileItem icon={<FaMapMarkerAlt />} label="Address" value={student.address} />
          <ProfileItem icon={<FaBuilding />} label="Institution" value={student.institutionName} />
          <ProfileItem icon={<FaMapMarkerAlt />} label="Institution Address" value={student.institutionAddress} />
        </div>

        {/* Documents */}
        <div className="grid sm:grid-cols-2 gap-4">
          <ProfileItem icon={<FaIdCard />} label="Aadhar Number" value={student.aadharNumber} />
          <ProfileItem icon={<FaIdCard />} label="Roll Number" value={student.rollNumber} />
        </div>

        {/* Education Details */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Education Details:</h3>
          <div className="space-y-2">
            {educationDetails?.map((edu, idx) => (
              <div key={idx} className="border p-3 rounded bg-gray-50">
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Major:</strong> {edu.major}</p>
                <p><strong>Grade:</strong> {edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: Edit & Delete */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => navigate(`/admin/students/${studentId}/edit`)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          ✏️ Edit Profile
        </button>
        <button
          onClick={async () => {
            if (window.confirm("Are you sure you want to delete this student?")) {
              try {
                await deleteStudentProfile(studentId);
                alert("Student deleted successfully.");
                navigate('/admin/students');
              } catch (err) {
                alert("Failed to delete student.");
              }
            }
          }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-2 text-gray-700">
    <div className="mt-1 text-blue-600">{icon}</div>
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm">{value || 'N/A'}</p>
    </div>
  </div>
);

export default StudentProfile;
