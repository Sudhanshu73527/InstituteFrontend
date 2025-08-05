import React from "react";
import { motion } from "framer-motion";

const data = {
  vision: {
    title: "Our Vision",
    description: `At CIHS studies, our vision is to become a globally recognized center of excellence in safety, health, and environmental education where knowledge transforms into safe practices, and safety becomes a core value across every industry and community we serve.

We envision a future where:

• Every individual is empowered with the knowledge, skills, and mindset to prevent incidents, reduce risk, and respond confidently to hazards in the workplace and beyond.

• Organizations foster a proactive safety culture, integrating QHSE best practices into their operations, driven by continuous improvement and a commitment to the well-being of their people.

• Technology, innovation, and research are at the heart of safety training, ensuring our programs are future-ready, practical, and aligned with real-world challenges and regulatory standards.

• Collaboration with industry leaders, government bodies, and academic institutions drives progress in occupational safety, environmental responsibility, and sustainable development.

• Communities are safer and more resilient, with reduced occupational injuries, illnesses, and environmental harm through widespread education and awareness.

Our ultimate goal is to shape a world where safety is not just a policy or procedure, but a deeply embedded value respected, practiced, and lived by all.`,
    icon: "🌍",
  },
  mission: {
    title: "Our Mission",
    description: `Our mission at CIHS Studies is to deliver high-quality, industry-relevant education and training in occupational health, safety, and environmental practices that empower individuals and organizations to create safer, more sustainable work environments.

We are committed to:

• Equipping professionals with practical skills, certifications, and knowledge that meet national and international safety standards.

• Promoting a culture of prevention and accountability, where safety is seen as a shared responsibility at every level of an organization.

• Bridging the gap between theory and practice, by offering hands-on, scenario-based training programs that reflect real-world workplace challenges.

• Supporting continuous professional development through innovative learning methods, expert instructors, and up-to-date course content.

• Advancing workplace safety through research, partnerships, and advocacy, helping to shape policies and practices that protect people and the environment.

Through these efforts, we aim to be a trusted partner in shaping a safer future for industries, workers, and communities around the world.`,
    icon: "🎯",
  },
};

const Visionmission = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-slate-500 mb-12">
        Vision & Mission
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8 border-l-8 border-orange-500 text-center md:text-left overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4 flex justify-center md:justify-start">
            {data.vision.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            {data.vision.title}
          </h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
            {data.vision.description}
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8 border-l-8 border-blue-500 text-center md:text-left overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-4 flex justify-center md:justify-start">
            {data.mission.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            {data.mission.title}
          </h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
            {data.mission.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Visionmission;
