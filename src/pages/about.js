import React from 'react';

export default function About() {
  return (
    <div
      data-aos="zoom-in"
      className="flex h-screen flex-col justify-center p-5 py-8  md:px-52 md:py-20"
      id="about"
    >
      <div className="">
        <h3 className="mb-3 text-2xl font-extrabold">A little more about me</h3>

        <div className="items-center space-y-8 md:space-y-0">
          <div className="basis-2/3 space-y-4">
            <div className="text-justify text-sm font-normal text-gray-500">
              I am a highly enthusiastic and competitive person who enjoys being around individuals
              who challenge my limits, and I, in turn, strive to push them as well. I have a passion
              for acquiring new skills and sharing my knowledge. Taking on complex challenges is a
              personal passion of mine. I prefer not to adhere to a single technique for an extended
              period and instead proactively seek alternative approaches to tasks. I strongly
              believe that being a jack of all trades and master of one is often better.
            </div>
          </div>
        </div>
        <div className="items-center justify-between md:flex">
          <div className="flex items-center justify-center space-x-4 py-10">
            {social.map((link, index) => {
              return (
                <a
                  key={`about${index}`}
                  href={link.link}
                  target={'_blank'}
                  rel="noreferrer"
                  className="relative rounded-full"
                >
                  <img src={link.icon} className="h-[20px] w-[20px]" alt=""></img>
                </a>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <a
              className="flex w-max cursor-pointer items-center space-x-4 rounded-lg border bg-slate-200 p-2 px-9"
              href={'https://drive.google.com/file/d/1L-MxXB76Db6NCn7eTmeS2OZa-PhlBEt5/view'}
              target={'_blanck'}
              rel="noreferrer"
            >
              <div>Resume</div>
              <img
                className="h-6 w-6"
                src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/6422/6422202.png',
    link: 'https://www.linkedin.com/in/shekari-philemon-85882a179',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/philzy94',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/12107/12107562.png',
    link: 'https://x.com/Philzy94',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/3916/3916849.png',
    link: 'mailto: holyphilzy@gmail.com',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/5068/5068731.png',
    link: '+2349079603505',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/6422/6422213.png',
    link: 'https://wa.me/+2348182746404',
  },
];
