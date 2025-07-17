import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentProfile, updateStudentProfile } from '../../../services/studentApi';

const EditStudentProfile = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    passingYear: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await getStudentProfile(studentId);
        const s = res.data.student;
        setForm({
          firstName: s.userId?.firstName || '',
          lastName: s.userId?.lastName || '',
          phoneNumber: s.phoneNumber || '',
          address: s.address || '',
          passingYear: s.passingYear || '',
          password: '',
          confirmPassword: '',
        });
      } catch (err) {
        setError("Failed to load student");
      } finally {
        setLoading(false);
      }
    })();
  }, [studentId]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Basic password confirmation validation
    if (form.password !== form.confirmPassword) {
      setSubmitError("Passwords do not match");
      return;
    }

    try {
      // Prepare userData payload including password only if changed
      const userData = {
        firstName: form.firstName,
        lastName: form.lastName,
      };
      if (form.password.trim()) {
        userData.password = form.password;
      }

      await updateStudentProfile(studentId, {
        userData,
        studentData: {
          phoneNumber: form.phoneNumber,
          address: form.address,
          passingYear: form.passingYear,
        },
      });
      alert('Profile updated!');
      navigate(`/admin/students/${studentId}`);
    } catch (err) {
      setSubmitError('Update failed');
    }
  };

  if (loading) return <p className="p-6 text-blue-500">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Edit Student Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
        <Input label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
        <Input label="Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
        <Input label="Address" name="address" value={form.address} onChange={handleChange} />
        <Input label="Passing Year" name="passingYear" value={form.passingYear} onChange={handleChange} />
        
        <Input
          label="New Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        
        {submitError && <p className="text-red-500">{submitError}</p>}

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);

export default EditStudentProfile;
