import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { upsertMarksheet } from '../../../services/marksheetApi';
import { getAdmitCardByStudentId } from '../../../services/admitApi';
import { searchStudents } from '../../../services/studentApi';

const ManualMarksheetForm = ({ onCancel, onSave }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [admitSubjects, setAdmitSubjects] = useState([]);
  const [saving, setSaving] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const searchTimeoutRef = useRef(null);
  const inputRef = useRef(null);

  // Close dropdown if click outside input or dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search students with debounce
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setStudentId('');
    setStudentName('');
    setAdmitSubjects([]);
    setSearchResults([]);

    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    if (val.trim().length < 2) {
      // If less than 2 chars, hide dropdown and clear results
      setDropdownVisible(false);
      return;
    }

    searchTimeoutRef.current = setTimeout(async () => {
      try {
        setLoadingSearch(true);
        const res = await searchStudents(val.trim());
        const results = res.data || [];
        setSearchResults(results);
        setDropdownVisible(results.length > 0); // Show dropdown only if results found
      } catch (error) {
        console.error('Search error:', error);
        toast.error('Error searching students');
        setDropdownVisible(false);
      } finally {
        setLoadingSearch(false);
      }
    }, 300);
  };

  // When user clicks a student from dropdown
  const handleSelectStudent = (student) => {
    setStudentId(student._id);
    setStudentName(`${student.user.firstName} ${student.user.lastName}`);
    setSearchQuery(`${student.user.firstName} ${student.user.lastName} (${student.rollNumber})`);
    setDropdownVisible(false);
    setSearchResults([]);
    setAdmitSubjects([]);
  };

  // Fetch subjects from API based on selected student ID
  const handleFetchSubjects = async () => {
    if (!studentId) return toast.error('Select a student first');
    try {
      const res = await getAdmitCardByStudentId(studentId);
      const { data } = res.data || {};
      const subjects = data?.subjects || [];
      if (!subjects.length) return toast.error('No subjects found');
      const formatted = subjects.map((s) => ({
        subjectId: s.subjectId._id,
        subjectName: s.subjectId.name,
        subjectType: s.subjectId.type,
        minMarks: s.subjectId.type === 'Theory' ? 40 : 20,
        marksObtained: ''
      }));
      setAdmitSubjects(formatted);
    } catch (err) {
      console.error(err);
      toast.error('Error fetching admit card');
    }
  };

  const handleMarkChange = (i, value) => {
    const updated = [...admitSubjects];
    updated[i].marksObtained = value;
    setAdmitSubjects(updated);
  };

  const handleSubmit = async () => {
    if (!studentId) return toast.error('No student selected');
    if (admitSubjects.some(s => s.marksObtained === '')) {
      return toast.error('Please fill in all marks');
    }
    try {
      setSaving(true);
      const payload = {
        studentId,
        marks: admitSubjects.map((s) => ({
          subjectId: s.subjectId,
          marksObtained: Number(s.marksObtained)
        }))
      };
      await upsertMarksheet(payload);
      toast.success('Marksheet saved');
      setStudentId('');
      setStudentName('');
      setSearchQuery('');
      setAdmitSubjects([]);
      onSave?.();
    } catch (err) {
      console.error(err);
      toast.error('Error saving marksheet');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="mt-10 p-6 border rounded shadow bg-white max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manual Marksheet Entry</h2>

      {/* Search input & dropdown */}
      <div className="relative mb-4" ref={inputRef}>
        <input
          type="text"
          placeholder="Search student by name or roll number..."
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => { if (searchResults.length > 0) setDropdownVisible(true); }}
          className="border px-3 py-2 rounded w-full"
          autoComplete="off"
        />

        {/* Dropdown */}
        {dropdownVisible && (
          <ul className="absolute bg-white border w-full max-h-48 overflow-y-auto mt-1 z-50 rounded shadow">
            {loadingSearch && (
              <li className="p-2 text-gray-500">Searching...</li>
            )}
            {!loadingSearch && searchResults.length === 0 && (
              <li className="p-2 text-gray-500">No students found</li>
            )}
            {!loadingSearch && searchResults.map((student) => (
              <li
                key={student._id}
                onClick={() => handleSelectStudent(student)}
                className="cursor-pointer px-3 py-2 hover:bg-blue-100"
              >
                {student.user.firstName} {student.user.lastName} ({student.rollNumber})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Load Subjects Button */}
      <div className="mb-4">
        <button
          onClick={handleFetchSubjects}
          disabled={!studentId}
          className={`px-4 py-2 rounded text-white ${studentId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Load Subjects
        </button>
      </div>

      {/* Selected Student */}
      {studentName && (
        <p className="mb-4 text-gray-700 font-medium">Student: {studentName}</p>
      )}

      {/* Subjects Table */}
      {admitSubjects.length > 0 && (
        <div>
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Subject</th>
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Min Marks</th>
                <th className="border p-2 text-left">Marks Obtained</th>
              </tr>
            </thead>
            <tbody>
              {admitSubjects.map((s, i) => (
                <tr key={s.subjectId}>
                  <td className="border p-2">{s.subjectName}</td>
                  <td className="border p-2">{s.subjectType}</td>
                  <td className="border p-2">{s.minMarks}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={s.marksObtained}
                      min={0}
                      max={100}
                      onChange={(e) => handleMarkChange(i, e.target.value)}
                      className="border px-2 py-1 rounded w-24"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-5 flex gap-3">
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {saving ? 'Saving...' : 'Save Marksheet'}
            </button>
            <button
              onClick={onCancel}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManualMarksheetForm;
