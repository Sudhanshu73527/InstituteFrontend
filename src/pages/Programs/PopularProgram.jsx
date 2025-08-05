import React from 'react';

const CourseTable = () => {
  const courses = [
    {
      no: 1,
      name: 'Diploma in Fire and Industrial Safety',
      description:
        'A comprehensive program focusing on fire prevention techniques, industrial safety systems, emergency response planning, risk assessment, and legal compliance under the Factories Act and BOCW Act. Ideal for individuals seeking careers as safety officers in industries and construction.',
      fee: '₹38,000',
    },
    {
      no: 2,
      name: 'IOSH (Managing Safely)',
      description:
        'A globally recognized certification from the UK, designed for managers and supervisors. Covers risk identification, control, legal responsibilities, and modern incident investigation methods.',
      fee: '₹9,000',
    },
    {
      no: 3,
      name: 'OSHA (30 Hours)',
      description:
        'U.S.-based certification in occupational health standards, hazard identification, and workplace compliance. Perfect for supervisors in global industrial settings.',
      fee: '₹12,000',
    },
    {
      no: 4,
      name: 'IOSH + OSHA (Combo Offer)',
      description:
        'A dual certification merging IOSH (UK) and OSHA (USA). Elevates employability and international safety compliance. Ideal for oil & gas and manufacturing jobs.',
      fee: '₹19,000',
    },
    {
      no: 5,
      name: 'NEBOSH IGC',
      description:
        'One of the world’s most prestigious safety certificates. Based on ILO standards, covering global laws, leadership, and risk management. Ideal for HSE careers abroad.',
      fee: '₹42,000',
    },
    {
      no: 6,
      name: 'First Aid & CPR Training',
      description:
        'Hands-on emergency training including CPR, bleeding control, and shock management. Crucial for all workplace responders.',
      fee: '₹2,500',
    },
    {
      no: 7,
      name: 'Advanced Diploma in Industrial Safety (ADIS)',
      description:
        'Professional-level diploma in industrial safety, audits, and disaster preparedness. Valid under BSS and MSBTE boards. Fees vary based on board.',
      fee: 'As per Board',
    },
  ];

  return (
    <div className="px-4 py-10 bg-gradient-to-br from-white via-green-50 to-white">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">🎓 Our Popular Safety Courses</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.no}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500 font-medium">Course #{course.no}</span>
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                {course.fee}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">{course.name}</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTable;
