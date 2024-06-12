import React from 'react';

export default function About() {
  return (
    <div className="flex h-screen flex-col justify-center p-5 py-8  md:px-52 md:py-20" id="about">
      <div className="">
        <h3 className="mb-3 text-2xl font-extrabold">A little more about me</h3>

        <div className="items-center space-y-8 md:space-y-0">
          <div className="basis-2/3 space-y-4">
            <div className="text-justify font-light text-gray-900">
              I am a highly enthusiastic and competitive person who enjoys being around individuals
              who challenge my limits, and I, in turn, strive to push them as well. I have a passion
              for acquiring new skills and sharing my knowledge. Taking on complex challenges is a
              personal passion of mine. I prefer not to adhere to a single technique for an extended
              period and instead proactively seek alternative approaches to tasks. I strongly
              believe that being a jack of all trades and master of none is often better than being
              a master of one.
            </div>
          </div>
        </div>
        <div className="justify-between md:flex">
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
                  <img src={link.icon} className="h-10 w-10" alt=""></img>
                </a>
              );
            })}
          </div>
          <a
            className="relative m-auto flex w-max cursor-pointer items-center space-x-4 rounded-lg border bg-slate-200 p-2 px-10"
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
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/vedant-daigavane-25785315a/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/daigavane70',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://www.instagram.com/vedant_daigavane/',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: daigavane70@gmail.com',
  },
];
