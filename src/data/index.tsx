import { Experience, Education, ContactInfo } from "../types";

export const contactInfo: ContactInfo = {
  email: `kolby.sisk@gmail.com`,
  phone: "205 903 7337",
  website: `www.kolbysisk.com`,
};

export const profile = `Results-driven builder of software with a passion for learning. I specialized in software development and user experience design. With ${
  new Date().getFullYear() - 2013
} years of industry experience building software my goal is to achieve results while cultivating a positive environment conducive to learning and success.`;

export const educations: Education[] = [
  {
    degree: `Bachelor of Science`,
    description: `Full Sail University's Web Design and Development Program.`,
  },
];

export const experiences: Experience[] = [
  {
    jobTitle: `Tech Lead`,
    companyName: `Walmart`,
    start: `2021`,
    end: `Present`,
    description: `Led Walmart's insurance data team in large efforts to develop solutions to manage and distribute Walmart's insurance data.`,
    bulletPoints: [
      `Managed and supported a team of over 10 engineers to develop a data management application.`,
      `Architected and managed development of services allowing teams within Walmart to access insurance data. These solutions included REST APIs and Kafka event streams.`,
      `Designed and developed a solution to document, and onboard clients to, our services.`,
    ],
  },
  {
    jobTitle: `Senior Software Engineer`,
    companyName: `Walmart`,
    start: `2020`,
    end: `2021`,
    description: `Led UX/UI design & development of a data management application for Walmart's next-gen pharmacy solution.`,
    bulletPoints: [
      `Handled discovery and design for the application's UX/UI.`,
      `Led UI development utilizing React & Next.js.`,
      `Worked with tech leads to architect supporting systems.`,
    ],
  },
  {
    jobTitle: `Tech Lead, Senior Software Engineer`,
    companyName: `NCR`,
    start: `2017`,
    end: `2020`,
    description: `Provided engineering expertise and leadership for NCR's Design System team.`,
    bulletPoints: [
      `Architected a design system to meet the requirements of a fortune 500 company.`,
      `Led engineering teams to successfully accomplish crucial efforts within the organization.`,
      `Engineered various team infrastructure including: PM & development processes, CI/CD, documentation processes, and governance systems.`,
    ],
  },
  {
    jobTitle: `Software Engineer`,
    companyName: `DATA, Inc.`,
    start: `2014`,
    end: `2017`,
    description: `Developed web and mobile applications for government and commercial professionals in education, engineering, and medical sectors.`,
    bulletPoints: [
      `Led multiple software projects from planning to launch.`,
      `Developed and published multiple mobile apps on Apple, Android, and Windows app stores.`,
      `Led efforts to define and improve development processes throughout the company.`,
    ],
  },
  {
    jobTitle: `Full Stack Developer`,
    companyName: `Designzillas`,
    start: `2013`,
    end: `2014`,
    description: `Worked with numerous clients at a fast paced web development agency in Orlando.`,
    bulletPoints: [
      `Designed and developed highly performant Drupal CMS websites and web apps.`,
      `Worked with clients to gather requirements and create proposals to meet their needs.`,
      `Handled Linux DevOps to launch and support projects.`,
    ],
  },
];
