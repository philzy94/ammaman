import React from 'react';

export default function Experience() {
  return (
    <div
      data-aos="zoom-in"
      className="justify-cente flex h-full w-screen flex-col bg-slate-50 p-5 pt-20 md:px-52"
      id="experience"
    >
      <div>
        <h3 className="mt-5 text-2xl font-extrabold">Who I&apos;ve worked with</h3>
        <p className="mb-4 text-gray-600">
          I&apos;ve worked with quite a lot of client/companies, these are some of the notable ones.
        </p>
        {experiences.map((exp) => {
          return (
            <div className=" mb-10" key={`experience${exp?.company}`}>
              <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
                <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                  <img
                    className="max-h-full max-w-full transform cursor-pointer rounded-md transition ease-in hover:scale-150"
                    src={
                      exp?.img ||
                      'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                    }
                    alt=""
                    onClick={() => window.open(exp?.companyUrl || window.location, '_blank')}
                  />
                </div>

                <div className="flex-1 cursor-pointer">
                  <div className="text-lg font-bold md:text-lg">{exp?.company}</div>
                  <div className="flex justify-between md:flex-row">
                    <div className="text-md md:text-md font-semibold text-gray-600">
                      {exp?.position}
                    </div>
                    <div className="text-sm font-semibold">{exp?.date}</div>
                  </div>
                </div>
              </div>

              <div className=" text-md px-4 text-justify font-normal  text-gray-500">
                <p>{exp?.details}</p>
              </div>
              {exp?.companyUrl && (
                <div className="flex flex-row justify-end">
                  <a
                    href={exp?.companyUrl}
                    target="_blank"
                    className=" pl-4 text-xs font-medium text-gray-500"
                    rel="noreferrer"
                  >
                    Visit website →
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const experiences = [
  {
    position: 'Frontend Developer',
    company: 'Outsource Global',
    details:
      'Outsource Global is an outsourcing company that connects with cleints both national and international to provide services in different sectors. I am currently working as a frontend developer, building a web application with React.Js to consume an API built in the company.',
    date: 'Sep 2022 – Till Date',
    img: 'https://www.outsourceglobal.com/logo.png',
    companyUrl: 'https://www.outsourceglobal.com/',
  },

  {
    position: 'Full-Stack Developer',
    company: 'CodeIcon,',
    details:
      'CodeIcon is an IT firm in Nigerian based in Kaduna State, it provides solutions to clients to help them achieve their goals. I stated working as an intern but currently working as a full software developer, building solutions to for clients.',
    date: 'July 2019 - Till date',
    img: 'https://codeicontechnologies.com/images/codeicon.png',
    companyUrl: 'https://codeicontechnologies.com',
  },
  {
    position: 'Full-Stack Developer',
    company: 'Lotusfort Technologies Limited',
    details:
      'Lotusfort Technologies Limited (LTL) is a Technology development, Research and IT consulting company. I worked as a full-stack developer, building and developing applications like paylidate, digital wallet and other applications using VueJs and Laravel.',
    date: 'Jan 2022 - Jul 2023',
    img: 'https://static.b2bhint.com/_next/image?url=https%3A%2F%2Fcdn.b2bhint.com%2Fcompany-avatar%2Fupload_830f5c4651aa231d783dc61482450a58.jpg&w=128&q=75',
    companyUrl: '',
  },
  {
    position: 'Full-Stack Developer Intern',
    company: '(ICTSS)',
    details:
      'ICTSS is an IT security institute that deals with IT security. I worked with ICTSS as an itern during my 6 months indurial traing, I was working as a software developer intern building software applications,',
    date: 'Oct 2016 - OMar 2017',
    img: null,
    companyUrl: '',
  },
];
