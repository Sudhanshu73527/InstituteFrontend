import React, { useEffect, useState } from 'react';
import {
  getAllSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
} from '../../../services/subjectApi';
import toast from 'react-hot-toast';

const SubjectManagement = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    code: '',
    type: 'Theory',
    maxMarks: '',
    minMarks: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchSubjects();
  }, []);

const fetchSubjects = async () => {
  setLoading(true);
  try {
    const res = await getAllSubjects();
    setSubjects(res.subjects || []);
  } catch (err) {
    toast.error('Failed to load subjects');
  } finally {
    setLoading(false);
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim inputs for better validation
    const name = form.name.trim();
    const code = form.code.trim();
    const type = form.type;
    const maxMarks = Number(form.maxMarks);
    const minMarks = Number(form.minMarks);

    if (!name || !code || !type || isNaN(maxMarks) || isNaN(minMarks)) {
      toast.error('All fields are required and marks must be numbers');
      return;
    }

    if (maxMarks < 0 || minMarks < 0) {
      toast.error('Marks cannot be negative');
      return;
    }

    if (minMarks > maxMarks) {
      toast.error('Min Marks cannot be greater than Max Marks');
      return;
    }

    const payload = { name, code, type, maxMarks, minMarks };

    try {
      setSubmitting(true);
      if (editId) {
        await updateSubject(editId, payload);
        toast.success('Subject updated successfully');
      } else {
        await createSubject(payload);
        toast.success('Subject created successfully');
      }

      setForm({ name: '', code: '', type: 'Theory', maxMarks: '', minMarks: '' });
      setEditId(null);
      fetchSubjects();
    } catch (err) {
      console.error(err.response?.data || err);
      toast.error(err?.response?.data?.message || 'Operation failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (subject) => {
    setForm({
      name: subject.name,
      code: subject.code,
      type: subject.type,
      maxMarks: subject.maxMarks,
      minMarks: subject.minMarks
    });
    setEditId(subject._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (subjectId) => {
    if (window.confirm('Are you sure you want to delete this subject?')) {
      try {
        await deleteSubject(subjectId);
        toast.success('Subject deleted');
        fetchSubjects();
      } catch {
        toast.error('Failed to delete subject');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        {editId ? 'Edit Subject' : 'Add New Subject'}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8 grid grid-cols-2 gap-4"
        noValidate
      >
        <Input label="Subject Name" name="name" value={form.name} onChange={handleChange} />
        <Input label="Subject Code" name="code" value={form.code} onChange={handleChange} />
        <Select
          label="Type"
          name="type"
          value={form.type}
          options={['Theory', 'Practical']}
          onChange={handleChange}
        />
        <Input
          label="Max Marks"
          name="maxMarks"
          type="number"
          value={form.maxMarks}
          onChange={handleChange}
          min={0}
        />
        <Input
          label="Min Marks"
          name="minMarks"
          type="number"
          value={form.minMarks}
          onChange={handleChange}
          min={0}
        />

        <div className="col-span-2 flex justify-end gap-4">
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setForm({ name: '', code: '', type: 'Theory', maxMarks: '', minMarks: '' });
              }}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              disabled={submitting}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={submitting}
          >
            {submitting ? (editId ? 'Updating...' : 'Creating...') : (editId ? 'Update Subject' : 'Create Subject')}
          </button>
        </div>
      </form>

      <h3 className="text-xl font-semibold mb-3 text-gray-800">Subjects List</h3>

      {loading ? (
        <p className="text-blue-500">Loading subjects...</p>
      ) : subjects.length === 0 ? (
        <p className="text-gray-500">No subjects found.</p>
      ) : (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Code</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Max</th>
              <th className="border px-4 py-2">Min</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s) => (
              <tr key={s._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{s.name}</td>
                <td className="border px-4 py-2">{s.code}</td>
                <td className="border px-4 py-2">{s.type}</td>
                <td className="border px-4 py-2">{s.maxMarks}</td>
                <td className="border px-4 py-2">{s.minMarks}</td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(s)}
                    className="text-yellow-600 hover:underline"
                    disabled={submitting}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="text-red-600 hover:underline"
                    disabled={submitting}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = 'text', min }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      required
      className="w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border px-3 py-2 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-300"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default SubjectManagement;
