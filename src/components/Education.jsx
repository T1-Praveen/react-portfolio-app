import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({education}) => (
  <VerticalTimelineElement 
  contentStyle={{background: "#1d1836", color: "#fff"}}
  contentArrowStyle={{borderRight: "7px solid #232631"}}
  date={education.date}
  iconStyle={{background: education.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img 
      className="w-[70%] h-[70%] object-contain" src={education.icon} 
      alt={education.college_name}/>
    </div>}
  >
    <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
          <p className="text-secondary text-xs text-right pt-1.5" style={{margin: 0, fontSize: '0.8rem'}}>{education.percentage}</p>
        </div>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{education.college_name}</p>
      
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {education.points.map((point, index) => (
        <li
          key={`education-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The field of study</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

       <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <ExperienceCard 
              key={index} education={education}/>
          ))}
        </VerticalTimeline>
       </div>
    </>
  )
}

export default SectionWrapper(Education, "")