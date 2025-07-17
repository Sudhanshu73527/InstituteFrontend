import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAllStudents } from '../../../services/studentApi';
import { FaUserGraduate, FaEnvelope, FaUser, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import Select from 'react-select';


const AllStudent = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [passingYear, setPassingYear] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchStudents = async (year = '') => {
        setLoading(true);
        setError('');
        try {
            const res = await getAllStudents(year);
            setStudents(res.data?.students || []);
        } catch (err) {
            setStudents([]);
            setError(err.response?.data?.message || 'Failed to fetch students');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents(passingYear);
    }, [passingYear]);
    const yearOptions = [...Array(30)].map((_, i) => {
        const year = new Date().getFullYear() - i;
        return { value: year, label: year.toString() };
    });

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h2 className="text-3xl font-bold text-gray-800">All Registered Students</h2>
                <button
                    onClick={() => navigate('/admin/register')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    + Register Student
                </button>
            </div>

            {/* Filter by Passing Year */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
                <label
                    htmlFor="year"
                    className="text-lg font-semibold text-blue-700 tracking-wide"
                >
                    🎓 Select Student Passing Year:
                </label>
                <Select
                    options={[{ value: '', label: '-- Show All Years --' }, ...yearOptions]}
                    onChange={(selected) => setPassingYear(selected.value)}
                    value={yearOptions.find((opt) => opt.value === passingYear) || { value: '', label: '-- Show All Years --' }}
                    isClearable
                    placeholder="Select Passing Year..."
                    className="mb-6"
                    styles={{
                        control: (base) => ({ ...base, padding: '2px', borderColor: '#3b82f6' }),
                    }}
                />
            </div>

            {/* Feedback Messages */}
            {loading && <p className="text-blue-500">Loading students...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Student Grid */}
            {!loading && students.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {students.map((student, idx) => (
                        <div
                            key={student._id}
                            onClick={() => navigate(`/admin/students/${student._id}`)} // ✅ this is now active
                            className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition cursor-pointer"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <div className="text-blue-700 font-semibold text-lg flex items-center gap-2">
                                    <FaUserGraduate />
                                    {student.userId?.firstName} {student.userId?.lastName}
                                </div>
                                <div className="text-sm text-gray-500">#{idx + 1}</div>
                            </div>
                            <div className="text-gray-700 space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="text-gray-500" />
                                    {student.userId?.email}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser className="text-gray-500" />
                                    Username: {student.userId?.username}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUniversity className="text-gray-500" />
                                    {student.courseId?.name} ({student.courseId?.code})
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-gray-500" />
                                    Passing Year: {student.passingYear}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}


            {/* No Data Found */}
            {!loading && students.length === 0 && !error && (
                <p className="text-gray-500 mt-4">No students found for the selected year.</p>
            )}
        </div>
    );
};

export default AllStudent;
