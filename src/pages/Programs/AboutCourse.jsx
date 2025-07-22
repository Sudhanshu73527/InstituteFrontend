import React from 'react';

const safetyCourses = [
  {
    title: "Diploma in Fire and Industrial Safety",
    description: `This diploma program is designed for individuals looking to build a strong foundation in both fire prevention and industrial safety management. The course covers fire dynamics, rescue techniques, fire risk assessment, and also focuses on safety systems in industrial environments including hazard identification, safety inspections, emergency planning, and PPE usage. Ideal for freshers and professionals looking to work in factories, refineries, and heavy industries.`,
  },
  {
    title: "IOSH (Managing Safely)",
    description: `A globally recognized course by the Institution of Occupational Safety and Health (IOSH) based in the UK. The IOSH Managing Safely course is designed specifically for supervisors and managers to equip them with practical knowledge of managing health and safety within their teams. It covers modules like risk control, hazard spotting, incident investigation, and responsibilities of employers and employees. Certification boosts international job opportunities.`,
  },
  {
    title: "ADIS & PDIS",
    description: `ADIS (Advanced Diploma in Industrial Safety) and PDIS (Post Diploma in Industrial Safety) are advanced government-recognized certifications aimed at safety professionals and diploma holders. These programs cover detailed modules on safety legislation, industrial hygiene, accident prevention, environmental health, safety audits, and safety engineering. Suitable for candidates looking to progress into senior safety roles, HSE management, or consultancy in various sectors.`,
  },
  {
    title: "Comprehensive Fire & Safety Training Program",
    description: `This intensive program offers in-depth practical and theoretical knowledge in fire safety operations. It includes fire behavior, use of fire extinguishers, firefighting equipment, evacuation planning, disaster management, and real-life fire drill training. Ideal for fire wardens, safety team members, and individuals employed in high-risk workplaces such as hospitals, malls, oil and gas, and aviation sectors.`,
  },
];

const AboutCourse = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Professional Safety Officer Courses
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Our carefully curated safety officer courses provide globally and nationally recognized certifications. These programs are tailored to develop highly skilled safety professionals ready to take on challenging roles across industries.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {safetyCourses.map((course, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-all border border-green-100"
          >
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-700 mb-3">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCourse;
