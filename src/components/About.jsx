import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        I'm Chetan Thorat, a passionate Full Stack Developer with a strong
        foundation in C++, Python, Go, JavaScript, and TypeScript. With hands-on
        experience in building scalable applications, I specialize in React.js,
        Next.js, and Express.js, complemented by Tailwind CSS for crafting clean
        and responsive UIs. During my internship at Sumago Infotech, I led a
        team in developing a full-fledged Property Booking platform, handling
        both frontend and backend development.
        <br />
        <br />
        I’ve worked on impactful projects like <strong>Meet.AI</strong>, a SaaS
        platform integrating OpenAI and real-time video infra using Stream, and
        a <strong>Resume Sorting Tool</strong> powered by NLP and machine
        learning. I'm AWS Certified Cloud Practitioner and have solved over 300 LeetCode problems,
        reflecting my strong grasp on algorithms and cloud concepts.
        <br />
        <br />
        I’m driven by curiosity, innovation, and a passion for clean code and
        always ready to explore new technologies and turn ideas into reality.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
