import React, { useState } from "react";
import "../styles/timeline.scss"; // Import the SCSS file

const data = [
  {
    role: "Full Stack Developer",
    company: "Bharat Intern.",
    date: "08/2023 - 09/2023",
    description: "Projects: Total of three projects were given to evaluate skills in design,development, and fundamentals.\nTasks: 1)Netflix Clone 2) Portfolio Page 3) Temperature-Convertor",
    // imgSrc: ".components\BharatIntern.jpg",
  },
  {
    role: "Front-end Developer",
    company: "Analytical Training Hub(ATH)",
    date: "09/2022 - 11/2022",
    description: "Project: Overhaul of Corporate Website, Achievement: Revamped the official company website, resulting in a 25% increase in site reach and a 30% rise in customer engagement,\n Approach: Designed a modern, user-friendly, multi-page website",
  },
  {
    role: "Graphic-Designer / Host",
    company: "The Orion Show",
    date: "05/2022 - 08/2022",
    description: "Project: Public Speaking & Networking Initiative, Role: Graphic Design and Social Media Management, Responsibility: Developed logo, designed social media content, Achievement: Boosted engagement and participation",
  },
  {
    role: "Web Developer",
    company: " SSA - HexaPaul",
    date: "12/2021 - 07/2022",
    description: "Project: Comprehensive Creation of Company's Official Website leveraging Bootstrap and JavaScript Frameworks, Solution: Orchestrated the development of a dynamic, interactive, and contemporary multi-page website, Achievement: Spearheaded a substantial 40% expansion in website reach, coupled with a commendable 25% upswing customer engagement",
  },
  {
    role: "Graphic Designer",
    company: "Younity.In",
    date: "07/2021 - 09/2021",
    description: "Project: Social Media Visual Content Creation for Instagram and, Platforms Solution: Utilized a blend of Canva and Adobe software to design and curate impactful posts aimed at fostering company growth Achievement: Accomplished a portfolio of engaging visual content that contributed to the overall digital presence of the company",
  },
  {
    role:"Educational Consultant",
    company : '3i Education (EdTech Startup)',
    date: "01/2021 - 06/2021",
    description: "Role: Orchestrated client engagement, resulting in a 20% increase in lead conversion. Skillfully oversaw a team of 8 members, enhancing overall productivity by 30%. \n Achievement: Navigated the internship with distinction, gaining invaluable experience in steering teams and amplifying communication prowess.",
  }
  
];

const Timeline = () => {
  return (
    <div id="timeline">
      <h1>Work TimeLine</h1>
      <div className="timelineBox">
        {data.map((item, index) => (
          <TimelineItem
            company={item.company}
            role={item.role}
            date={item.date}
            description={item.description}
            url={item.url}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ role, company, date, description, index, imgSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const timelineClass = index % 2 === 0 ? "leftTimeline" : "rightTimeline";

  return (
    <div
      className={`timelineItem ${timelineClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="timelineItemContent">
        <div className="timelineItemHeader">
          {imgSrc && (
            <div className="companyLogo">
              <img src={imgSrc} alt="Company Logo" />
            </div>
          )}
          <div className="companyInfo">
            <h2>{role}</h2>
            <p>{company}</p>
          </div>
        </div>
        <p>{date}</p>
      </div>
      {isHovered && (
        <div className="floatingCard">
          {/* Content of the floating card */}
          <div>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
