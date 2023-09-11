// MySkills.jsx
import React from 'react';
import "../styles/myskills.scss";


const skillsData = [
  {
    category: 'Frontend Technologies',
    skills: [
      {
        name: 'HTML5',
        progress: 90,
        image: 'https://cdn-icons-png.flaticon.com/256/174/174854.png', // Add image path here
      },
      {
        name: 'CSS3',
        progress: 70,
        image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png', // Add image path here
      },
      {
        name: 'JavaScript',
        progress: 75,
        image: 'https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png', // Add image path here
      },
      {
        name: 'React.Js',
        progress: 70,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png'
      },
      {
        name: 'Next.Js',
        progress: 50,
        image: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg'
      },
      {
        name: 'Tailwind CSS',
        progress: 40,
        image: 'https://w7.pngwing.com/pngs/771/978/png-transparent-tailwind-css-css-framework-customizable-low-level-tailwind-logo-3d-icon.png'
      },
      {
        name: 'Bootstrap CSS',
        progress: 85,

        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/602px-Bootstrap_logo.svg.png'
      },
      {
        name: 'Material UI',
        progress: 50,
        image: 'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png'
      },
    ],
  },
  {
    category: 'Backend Technologies',
    skills: [
      {
        name: 'Node.Js',
        progress: 60,
        image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png', // Add image path here
      },
      {
        name: 'Express.Js',
        progress: 40,
        image: 'https://camo.githubusercontent.com/9270fc40ed052b4158b76122cc9984c9c9670b717577d3e89497629fc25782e7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67', 
      },
      {
        name: 'MongoDB',
        progress: 60,
        image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
      },
      {
        name: 'Firebase',
        progress: 75,
        image: 'https://static-00.iconduck.com/assets.00/firebase-icon-1492x2048-zznoc9pm.png',
      },
      {
        name: 'Github',
        progress: 75,
        image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      },
      {
        name: 'MySQL',
        progress: 75,
        image: 'https://pngimg.com/d/mysql_PNG9.png',
      },
      {
        name: 'WordPress',
        progress: 75,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png',
      }
      // Add more backend skills as needed
    ],
  },
  {
    category: 'Designing Stack',
    skills: [
      {
        name: 'Figma',
        progress: 95,
        image: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format', // Add image path here
      },
      {
        name: 'Adobe Photoshop',
        progress: 85,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png', // Add image path here
      },
      {
        name: 'Adobe Illustrator',
        progress: 85,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png', // Add image path here
      },
      {
        name: 'Adobe XD',
        progress: 85,
        image: 'data:image/png;base64,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',
      },
      // Add more design skills as needed
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      {
        name: 'C++',
        progress: 80,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png'
      },
      {
        name: 'C Language',
        progress: 50,
        image:'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'
      },
      {
        name:"Python",progress :62 ,image :"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
      }

    ]
  }
];

const MySkills = () => {
  return (
    <div id="myskills">
      <h2>Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill">
                <img src={skill.image} alt={skill.name} />
                <span>{skill.name}</span>
                <progress max="100" value={skill.progress}></progress>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySkills;
