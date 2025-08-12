import React, { useState, useEffect } from 'react';
import axios from '../../utils/Axios';
import { motion } from 'framer-motion';

const VerifyMarksheet = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [marksheetUrl, setMarksheetUrl] = useState(null);
  const [progress, setProgress] = useState(0); // Progress state

  const handleRollNumberChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleVerifyMarksheet = async () => {
    if (!rollNumber) {
      setError('Please enter a roll number');
      return;
    }

    setLoading(true);
    setError(null);
    setMarksheetUrl(null);
    setProgress(0); // Reset progress bar

    // Simulate progress increment during processing
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100%

          setTimeout(() => {
            // Hold at 100% for 2-3 seconds after completion
            if (marksheetUrl && !error) {
              setProgress(100); // Make sure progress stays at 100%
            }
          }, 3000); // Hold for 3 seconds before showing the result

          return prevProgress;
        }
        return prevProgress + 5; // Increment progress by 2% for smoother progress
      });
    }, 1000); // Increment every 1 second

    try {
      const response = await axios.get(`/marksheet/verify/${rollNumber}`, { responseType: 'arraybuffer' });

      // Create a Blob for the PDF data
      const file = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);

      setMarksheetUrl(fileURL); // Set URL to show the PDF download link
    } catch (err) {
      setError('Error generating marksheet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 border-l-8 border-green-500"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Verify Marksheet
        </h2>

        <div className="mb-6">
          <label htmlFor="rollNumber" className="block text-lg font-medium text-gray-700 mb-2">Enter Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={handleRollNumberChange}
            placeholder="Enter roll number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {loading ? (
          <div className="mb-6">
            <p className="text-gray-700 mb-2 text-center">Processing...</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm mt-2">{progress}%</p>
          </div>
        ) : (
          <motion.button
            onClick={handleVerifyMarksheet}
            // disabled={loading}
            className={`w-full p-4 text-white font-medium rounded-lg ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-green-500`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Verify Marksheet
          </motion.button>
        )}

        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

        {marksheetUrl && (
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700">Marksheet found! You can download it:</p>
            <motion.a
              href={marksheetUrl}
              download={`marksheet_${rollNumber}.pdf`}
              className="inline-block mt-4 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Download Marksheet
            </motion.a>

            {/* Celebration effect */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="text-xl font-semibold text-green-700">🎉 Congratulations! 🎉</p>
              <p className="text-gray-600 mt-2">Record found and verified</p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyMarksheet;
