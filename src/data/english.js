import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  FaChessKnight,
  FaReact,
  FaRegCalendarCheck,
  FaBook,
  FaRunning,
} from 'react-icons/fa';

const data = {
  /**
   * Full name
   */
  fullName: 'ASHUTOSH SHARMA',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `
      Front-end developer that has 6 month of experience developing web 
      applications and building websites.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'LinkedIn.com',
        url: 'www.linkedin.com/in/ashutosh-sharma-47869218b',
        icon: <FaGlobe />,
      },
      {
        text: 'ashu2896',
        url: 'https://github.com/ashu2896',
        icon: <FaGithub />,
      },
      {
        text: 'ashus6377@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: '+917081258809',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Karnataka, Bangalore',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
    list: [
      { text: 'React' },
       {text:'MySql'},
      { text: 'JavaScript, ' },
      { text: 'Responsive Web Design' },
      { text: 'HTML5, CSS3' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Additional skills',
    list: [
          { text: 'GitHub, Git' },
         ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: 'Languages',
    list: [
      
      { text: 'English - intermediate'},
      
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Playing chess', icon: <FaChessKnight /> },
      { text: 'Learning new things', icon: <FaReact /> },
          { text: 'Reading', icon: <FaBook /> },
      { text: 'Being active', icon: <FaRunning /> },
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'News Portal Web App', 
        techList: [
          'React',
          'JavaScript',
          'Html',
          'Material-UI',
        ],
        description: `
        Any one can see the latest news about All current affairs.
        News can be update as well. It shows 7 country news .`,
      
      },
      {
        name: 'CV', 
        techList: [
          'React',
          'JavaScript',
          'Html',
          'Material-UI',
        ],
        description: `
        I created my profile in Application .`,
      
      },
      {
        name: 'Expences-App', 
        techList: [
          'React',
          'JavaScript',
          'Html',
          'Material-UI',
        ],
        description: `
        In this App you mention all day expences and check day by day .`,
      
      },
      
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Work experience',
    list: [
      {
        company: 'Chauhan Computers',
        location: 'Delhi, ',
        date: {
          start: '2021-02',
          end: '2021-08',
        },
        jobTitle: 'Freelancer',
        description: `
        	Worked as  in some of the below web application for client .
          I have done all the UI Parts `,
      },
    
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
    list: [
      {
        name: 'JavaScript',
        provider: 'Microsoft Technology associate',
      },
      
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'LDC INSTITUTE OF TECHNIAL STUDIES',
        description: 'Engineering',
        date: {
          start: '2018-08',
          end: '2021-08',
        },
      },
    ],
  },
};

export default data;
