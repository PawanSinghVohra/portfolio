/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Pawan Singh Vohra",
  title: "Hi all, I'm Pawan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web Application with JavaScript / Reactjs / Nodejs / Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xeNJ_4xowSjYzLozg35m6PAe53s0Kdy9/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PawanSinghVohra",
  linkedin: "https://www.linkedin.com/in/pawan-s-69935899/",
  gmail: "psinghvohra@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web "
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Work with data and make it usefull as a Data Engineer"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amity University, Noida, India",
      logo: require("./assets/images/amity.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "September 2016 - August 2020",
      desc: "Bachelors degree with Major in IT",
      descBullets: [
        "Won various inter college technical competition",
        "Participated and won various Coding Competition",
        "Member of IIC-MHRD"
      ]
    },
    {
      schoolName: "Navguy School",
      logo: require("./assets/images/school.jpg"),
      subHeader: "High School",
      duration: "March 2014 - April 2016",
      // desc: "",
      descBullets: ["Won Science fair award 2015"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Accenture",
      companylogo: require("./assets/images/accenture.jpg"),
      date: "September 2020 – Present",
      desc: "Working as a Azure Data Engineer, integrating, transforming, and consolidating data from various structured and unstructured data systems into structures that are suitable for building analytics solutions",

    },
    {
      role: "MERN Developer",
      company: "Bient Technologies",
      companylogo: require("./assets/images/bient.jpg"),
      date: "May 2019 – Aug 2019",
      desc: "Worked as a Web Developer using various technologies like MongoDB, Express, NodeJS, ReactJS."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I WORKED ON",
  projects: [
    {
      image: require("./assets/images/d3s.jpg"),
      projectName: "D3 System",
      projectDesc: "Drowsy Driver Detection System (D3 system) was made using Tensorflow and Brainwaves with upto 90% of accuracy",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/PawanSinghVohra/D3System"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/website.PNG"),
      projectName: "Web application ",
      projectDesc: "News reporting web application using React, Node, Express, MongoDB",
      footerLink: [
        {
          name: "front-end repository",
          url: "https://gitlab.com/Adityakesarwani/frontend"
        },
        {
          name: "back-end repository",
          url: "https://gitlab.com/psinghvohra/block-front"
        }
      ]
    },
    {
      image: require("./assets/images/monster.png"),
      projectName: "Fun website ",
      projectDesc: "spare time project",
      footerLink: [
        {
          name: "view wibsite",
          url: "https://pawansinghvohra.github.io/monster-rolodex/"
        },
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Performance in Academic based Contribution",
      subtitle:
        "Received the Award during Graduation Cememony by Amity University.",
      image: require("./assets/images/award.jpg"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Award Letter",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Az-900 Certification",
      subtitle:
        "Azure Fundamental Certified.",
      image: require("./assets/images/az900.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "DP-900 Certification",
      subtitle:
        "Azure Data Fundamental Certified.",
      image: require("./assets/images/dp900.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Published 3 research Paper",
      subtitle: "Research done on 'freespace optical communication'",
      image: require("./assets/images/ieee.jpg"),
      footerLink: [
        {
          name: "Paper 1",
          url: "https://ieeexplore.ieee.org/document/8742829"
        },
        {
          name: "Paper 2",
          url: "https://ieeexplore.ieee.org/document/8748589"
        },
        {
          name: "Paper 3",
          url: "https://ieeexplore.ieee.org/document/8897440"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7838429492",
  email_address: "psinghvohra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
