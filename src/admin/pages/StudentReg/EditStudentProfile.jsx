import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentProfile, updateStudentProfile } from '../../../services/studentApi';
import { getAllCourses, getCourseById } from '../../../services/CourseApi'; // To fetch courses if needed

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
    courseId: '',  // To handle course selection
    educationDetails: [], // To store education details independently
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [courses, setCourses] = useState([]);  // To store available courses
  const [courseDetails, setCourseDetails] = useState(null);  // To store selected course details

  useEffect(() => {
    (async () => {
      try {
        // Fetch the student profile
        const res = await getStudentProfile(studentId);
        const student = res.data.student;
        
        setForm({
          firstName: student.userId?.firstName || '',
          lastName: student.userId?.lastName || '',
          phoneNumber: student.phoneNumber || '',
          address: student.address || '',
          passingYear: student.passingYear || '',
          password: '',
          confirmPassword: '',
          courseId: student.courseId?._id || '', // Set the student's current courseId
          educationDetails: student.educationDetails || [] // Set the student's education details
        });

        // Fetch courses using the getAllCourses function
        const coursesRes = await getAllCourses();
        if (coursesRes && coursesRes.courses) {
          setCourses(coursesRes.courses); // Populate course dropdown
        } else {
          console.error("Courses data is not available in the expected format.");
          setCourses([]);
        }

        // Fetch course details if courseId is already selected
        if (student.courseId?._id) {
          const courseRes = await getCourseById(student.courseId._id);
          setCourseDetails(courseRes.data); // Save course details in state
        }
      } catch (err) {
        setError("Failed to load student profile or courses");
      } finally {
        setLoading(false);
      }
    })();
  }, [studentId]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCourseChange = async (e) => {
    const selectedCourseId = e.target.value;
    setForm({ ...form, courseId: selectedCourseId });

    // Fetch course details based on selected courseId
    if (selectedCourseId) {
      try {
        const courseRes = await getCourseById(selectedCourseId);
        setCourseDetails(courseRes.data);  // Save course details

        // Auto-fill education details based on course information
        setForm((prevForm) => ({
          ...prevForm,
          educationDetails: [
            {
              degree: courseRes.data.name || '', // Use course name as degree
              major: courseRes.data.department || '', // Use department as major
              grade: '', // You can set a default grade or leave it empty
            }
          ]
        }));
      } catch (err) {
        console.error("Error fetching course details:", err);
      }
    } else {
      setCourseDetails(null);  // Clear course details if no course is selected
      setForm({ ...form, educationDetails: [] });  // Clear education details
    }
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationDetails = [...form.educationDetails];
    updatedEducationDetails[index][name] = value;
    setForm({ ...form, educationDetails: updatedEducationDetails });
  };

  const handleAddEducation = () => {
    setForm({
      ...form,
      educationDetails: [
        ...form.educationDetails,
        { degree: '', major: '', grade: '' }
      ],
    });
  };

  const handleRemoveEducation = (index) => {
    const updatedEducationDetails = form.educationDetails.filter((_, i) => i !== index);
    setForm({ ...form, educationDetails: updatedEducationDetails });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Basic password confirmation validation
    if (form.password !== form.confirmPassword) {
      setSubmitError("Passwords do not match");
      return;
    }

    try {
      const userData = {
        firstName: form.firstName,
        lastName: form.lastName,
      };
      if (form.password.trim()) {
        userData.password = form.password;
      }

      // Send updated profile to the backend
      await updateStudentProfile(studentId, {
        userData,
        studentData: {
          phoneNumber: form.phoneNumber,
          address: form.address,
          passingYear: form.passingYear,
          educationDetails: form.educationDetails, // Send updated education details
        },
        courseId: form.courseId,  // Send selected courseId in the payload
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

        {/* Password fields */}
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

        {/* Course Dropdown */}
        <div>
          <label className="block font-medium text-gray-700">Course</label>
          <select
            name="courseId"
            value={form.courseId}
            onChange={handleCourseChange} // Call handleCourseChange here
            className="w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Education Details Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-blue-600">Education Details</h3>
          {form.educationDetails.map((edu, index) => (
            <div key={index} className="space-y-2">
              <Input
                label="Degree"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <Input
                label="Major"
                name="major"
                value={edu.major}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <Input
                label="Grade"
                name="grade"
                value={edu.grade}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <button
                type="button"
                onClick={() => handleRemoveEducation(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove Education
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddEducation}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Add Education
          </button>
        </div>

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
