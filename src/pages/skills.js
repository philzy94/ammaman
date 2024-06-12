import React from 'react';

export default function Skills() {
  return (
    <div
      data-aos="fade-up"
      className="flex h-screen flex-col justify-center bg-slate-50 p-5 py-8 md:px-52 md:py-20"
      id="skills"
    >
      <h3 className="mb-3 text-2xl font-extrabold">Skills/Tools</h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill, index) => {
          return (
            <div className="flex items-center space-x-2" key={`skill${index}`}>
              {skill.icon && <div className="flex text-2xl">{skill.icon}</div>}
              {skill.img && <img src={skill.img} className="h-6 w-6" alt=""></img>}
              <div className=" text-gray-500">{skill.skill}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const skills = [
  {
    icon: <i className="devicon-spring-plain colored"></i>,
    skill: 'Spring',
  },
  {
    icon: <i className="devicon-go-original-wordmark colored"></i>,
    skill: 'Go',
  },
  {
    icon: <i className="devicon-apachekafka-original colored"></i>,
    skill: 'Apache Kafka',
  },
  {
    icon: <i className="devicon-nodejs-plain colored"></i>,
    skill: 'Node JS',
  },
  {
    icon: <i className="devicon-express-original colored"></i>,
    skill: 'Express JS',
  },
  {
    icon: <i className="devicon-nginx-original colored"></i>,
    skill: 'Nginx',
  },
  {
    icon: <i className="devicon-react-original colored"></i>,
    skill: 'React',
  },
  {
    icon: <i className="devicon-redux-original colored"></i>,
    skill: 'Redux',
  },
  {
    icon: <i className="devicon-storybook-plain colored"></i>,
    skill: 'Storybook',
  },
  {
    icon: <i className="devicon-bootstrap-plain colored"></i>,
    skill: 'Bootstrap',
  },
  {
    icon: <i className="devicon-materialui-plain colored"></i>,
    skill: 'Material UI',
  },
  {
    icon: <i className="devicon-tailwindcss-plain colored"></i>,
    skill: 'Tailwind CSS',
  },
  {
    icon: <i className="devicon-css3-plain colored"></i>,
    skill: 'CSS',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    skill: 'Postman',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    skill: 'C++',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    skill: 'Java',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    skill: 'Python',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    skill: 'C',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    skill: 'JavaScript',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    skill: 'Typescript',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    skill: 'MongoDB',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    skill: 'MySQL',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
    skill: 'PostgreSQL',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    skill: 'Redis',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    skill: 'Docker',
  },
];
