import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { upsertMarksheet } from '../../../services/marksheetApi';
import { getAdmitCardByStudentId } from '../../../services/admitApi';

const ManualMarksheetForm = ({ onCancel, onSave }) => {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [admitSubjects, setAdmitSubjects] = useState([]);
  const [saving, setSaving] = useState(false);

  const handleFetchSubjects = async () => {
    if (!studentId) {
      toast.error('Enter student ID');
      return;
    }

    try {
      const res = await getAdmitCardByStudentId(studentId);
      const subjects = res.data?.subjects || [];

      if (!subjects.length) {
        toast.error('No subjects found in admit card');
        return;
      }

      setAdmitSubjects(subjects.map((s) => ({
        ...s,
        marksObtained: 0
      })));
    } catch (err) {
      toast.error('Failed to fetch admit card');
    }
  };

  const handleMarkChange = (i, value) => {
    setAdmitSubjects(prev => {
      const updated = [...prev];
      updated[i].marksObtained = Number(value);
      return updated;
    });
  };

  const handleSubmit = async () => {
    if (!studentId || admitSubjects.length === 0) {
      toast.error('Missing student ID or subjects');
      return;
    }

    try {
      setSaving(true);
      await upsertMarksheet({
        studentId,
        marks: admitSubjects.map((s) => ({
          subjectId: s.subjectId,
          marksObtained: s.marksObtained
        }))
      });

      toast.success('Marksheet saved');
      setStudentId('');
      setStudentName('');
      setAdmitSubjects([]);
      onSave?.();
    } catch (err) {
      toast.error('Failed to save marksheet');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="mt-10 p-4 border rounded shadow bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Manual Marksheet Entry</h2>

      <div className="space-y-3">
        <input
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          placeholder="Student Name (optional)"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleFetchSubjects}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Load Subjects from Admit Card
        </button>
      </div>

      {admitSubjects.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Subjects</h3>
          <table className="w-full text-sm border">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2 text-left">Subject</th>
                <th className="border p-2 text-left">Marks</th>
              </tr>
            </thead>
            <tbody>
              {admitSubjects.map((s, i) => (
                <tr key={s.subjectId}>
                  <td className="border p-2">{s.subjectName}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={s.marksObtained}
                      onChange={(e) => handleMarkChange(i, e.target.value)}
                      className="w-20 border rounded px-2 py-1"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleSubmit}
          disabled={saving || admitSubjects.length === 0}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
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
    </section>
  );
};

export default ManualMarksheetForm;
