import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import gmailIcon from '../assets/icons/gmail.png';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[#aaa6c3] text-[18px] font-bold text-center">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="md:-mt-[6rem] -mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
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

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-20">
        <motion.div variants={textVariant(0.2)}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Connect with me.</h2>
        </motion.div>

        <motion.div
          variants={fadeIn('', 'tween', 0.1, 1)}
          className="mt-8 flex justify-center items-center gap-10"
        >
          <a
            href="https://github.com/ChetanThorat18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="transition-all duration-300 transform hover:scale-110"
          >
            <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 p-2 flex items-center justify-center">
              <GithubIcon className="w-full h-full text-black" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ChetanThorat18/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-[#0A66C2] transition-all duration-300 transform hover:scale-110"
          >
            <LinkedinIcon className="w-16 h-16 md:w-20 md:h-20" />
          </a>
          <a
            href="mailto:chetanthorat146@gmail.com"
            aria-label="Send an email"
            className="transition-all duration-300 transform hover:scale-110"
          >
            <div className="bg-white rounded-full w-16 h-16 md:w-20 md:h-20 p-2 flex items-center justify-center">
              <img
                src={gmailIcon}
                alt="Gmail"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');