import React, { useState, useEffect } from 'react';
import {
  assignSubjectToCourse,
  getSubjectsForCourse,
} from '../../../services/examApi';
import AssignedSubjectRow from './AssignedSubjectRow';
import { getAllCourses } from '../../../services/CourseApi';
import { getAllSubjects } from '../../../services/subjectApi';

const ExamSubjectManager = () => {
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formData, setFormData] = useState({
    subjectId: '',
    examDate: '',
    startTime: '',
    endTime: '',
  });
  const [assignedSubjects, setAssignedSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const courseRes = await getAllCourses();
        const subjectRes = await getAllSubjects();

        setCourses(courseRes.courses || []);
        setSubjects(subjectRes.subjects || []);
      } catch (err) {
        setError('Failed to load courses or subjects');
      }
    }
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (!selectedCourse) {
      setAssignedSubjects([]);
      setFormData({ subjectId: '', examDate: '', startTime: '', endTime: '' });
      return;
    }

    async function fetchAssignedSubjects() {
      try {
        setLoading(true);
        const res = await getSubjectsForCourse(selectedCourse);
        setAssignedSubjects(res.subjects || []);
        setError(null);
      } catch (err) {
        setError('Failed to load assigned subjects');
      } finally {
        setLoading(false);
      }
    }

    fetchAssignedSubjects();
  }, [selectedCourse]);

  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAssign = async e => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const { subjectId, examDate, startTime, endTime } = formData;

    if (!selectedCourse || !subjectId || !examDate || !startTime || !endTime) {
      setError('Please fill in all fields');
      return;
    }

    if (startTime >= endTime) {
      setError('Start time must be before end time');
      return;
    }

    try {
      await assignSubjectToCourse({
        courseId: selectedCourse,
        subjectId,
        examDate,
        startTime,
        endTime,
      });

      setMessage('Subject assigned successfully!');
      setFormData({ subjectId: '', examDate: '', startTime: '', endTime: '' });

      // Refresh assigned subjects after successful assignment
      const res = await getSubjectsForCourse(selectedCourse);
      setAssignedSubjects(res.subjects || []);
    } catch (err) {
      const msg = err?.response?.data?.message || 'Failed to assign subject';
      setError(msg);
    }
  };

  const availableSubjects = subjects.filter(
    subject => !assignedSubjects.some(as => as.subjectId?._id === subject._id)
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Exam Subjects</h1>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Select Course:</label>
        <select
          className="w-full border border-gray-300 rounded p-2"
          value={selectedCourse}
          onChange={e => setSelectedCourse(e.target.value)}
        >
          <option value="">-- Choose a course --</option>
          {courses.map(course => (
            <option key={course._id} value={course._id}>
              {course.name} ({course.code})
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleAssign} className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Assign Subject</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-600">Subject</label>
            <select
              name="subjectId"
              value={formData.subjectId}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">-- Select subject --</option>
              {availableSubjects.map(subject => (
                <option key={subject._id} value={subject._id}>
                  {subject.name} ({subject.code})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">Exam Date</label>
            <input
              type="date"
              name="examDate"
              value={formData.examDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Assign Subject
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}
        {message && <p className="text-green-600 mt-2">{message}</p>}
      </form>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Assigned Subjects</h2>

        {loading ? (
          <p className="text-blue-600">Loading assigned subjects...</p>
        ) : assignedSubjects.length === 0 ? (
          <p className="text-gray-500">No subjects assigned for this course.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b border-gray-300 text-left">Subject Name</th>
                  <th className="p-3 border-b border-gray-300 text-left">Code</th>
                  <th className="p-3 border-b border-gray-300 text-left">Type</th>
                  <th className="p-3 border-b border-gray-300 text-left">Exam Date</th>
                  <th className="p-3 border-b border-gray-300 text-left">Start Time</th>
                  <th className="p-3 border-b border-gray-300 text-left">End Time</th>
                  <th className="p-3 border-b border-gray-300 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignedSubjects.map(assignedSubject => (
                  <AssignedSubjectRow
                    key={assignedSubject._id}
                    assignedSubject={assignedSubject}
                    onUpdated={(id, updatedData) => {
                      setAssignedSubjects(prev =>
                        prev.map(as => (as._id === id ? { ...as, ...updatedData } : as))
                      );
                    }}
                    onDeleted={id => {
                      setAssignedSubjects(prev => prev.filter(as => as._id !== id));
                    }}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExamSubjectManager;
