import React from 'react';

import Slider from 'react-slick';
import wn1 from '../assets/projects/wn1.png';
import dsr1 from '../assets/projects/dsr1.png';
import isch from '../assets/projects/isch.png';
import og from '../assets/projects/og.png';
import oga1 from '../assets/projects/oga1.png';
import otni from '../assets/projects/otni.png';
import pay from '../assets/projects/pay.png';

export default function Projects() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      data-aos="zoom-in"
      className="relative flex h-full flex-col justify-center overflow-hidden p-5 pt-20 md:px-52"
      id="projects"
    >
      <div className=" mx-auto w-full pb-8">
        <h3 className="text-2xl font-extrabold">Featured Projects</h3>
        <p className="mb-4 text-gray-600">Here are few of the projects i&apos;ve worked on.</p>

        <div className="">
          <Slider {...settings}>
            {projects.map((proj, index) => {
              return (
                <div className={`${proj?.textColour} mb-2 h-full px-2`} key={`project${index}`}>
                  <div className={`${proj?.bg} rounded-lg p-2 shadow-lg`}>
                    <h3 className="text-2xl font-bold">{proj?.title}</h3>
                    <p className="my-3 truncate text-justify font-medium">{proj?.description}</p>
                    <img
                      src={proj?.image}
                      className="mb-4 w-full object-fill shadow-lg"
                      align={proj?.title}
                    />
                    <p className="mb-2 font-medium">
                      <svg
                        className="mr-1 inline h-4 w-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                      </svg>
                      {proj?.stack?.map((item) => {
                        return item + ', ';
                      })}
                    </p>
                    <p className=" flex flex-row items-center font-medium">
                      <svg
                        className="mr-1 inline h-4 w-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                      </svg>
                      {proj?.link ? (
                        <a
                          target="_blank"
                          href={proj?.link}
                          className=" truncate font-medium"
                          rel="noreferrer"
                        >
                          {proj?.link}
                        </a>
                      ) : (
                        'Link not available at the moment'
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <br />
        <h3 className="mt-3 text-2xl font-extrabold">Let&apos;s work together</h3>
        <p className="mb-8 text-gray-600">
          I am currently open to work engagements. If i look like who you&apos;re looking for,you
          can reach out to me via email at holyphilzy@gmail.com or social media.
        </p>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'Worknation',
    description:
      'Workrnation is a workforce platform that connects employers with job seekers and also provides training opportunities to interested users.',
    image: wn1,
    link: 'https://www.worknation.ng',
    textColour: 'text-white',
    bg: 'bg-[hsl(165,60%,47%)]',
    stack: ['React.js', 'Nest js'],
  },
  {
    title: 'NasarawaDSR',
    description:
      'NasarawaDSR is a digital distribution system for adiquately distributing palliative to needed individuals in Nasarawa State.',
    image: dsr1,
    link: 'https://nasarawadsr.vercel.app',
    textColour: 'text-white',
    stack: ['Next.js', 'Laravel'],
    bg: 'bg-[#CA8A04]',
  },
  {
    title: 'Ischools',
    description:
      'Ischools is a school management system that provides a digitalized school management system for schools and also provides detailed data about schools around a region. It harmonises the activities among schools and brings the best out of schools.',
    image: isch,
    link: 'https://ischools.ng',
    textColour: 'text-white',
    stack: ['Angular', 'Laravel'],
    bg: 'bg-[#2B3EEE]',
  },
  {
    title: 'Ourakademy',
    description:
      'Ourakademy is a platform that provides training in partnership with Qwasar to produce well skilled and tallented individuals in the tech industry',
    image: oga1,
    link: 'https://ourakademy-admin.ogtlprojects.com',
    textColour: 'text-white',
    stack: ['React.js', 'Nest.js'],
    bg: 'bg-[rgb(1,174,239)]',
  },
  {
    title: 'OTNI',
    description:
      "Outsource to Nigeria Initiative is a private sector lead National Job Creation Initiative in conjunction with the Presidency under the Office of the Vice President. Its primary aim is to bolster Nigeria's economic standing by generating foreign exchange through BPO/ITES service exports resulting in massive job creation, thereby enhancing the nation's GDP and balance of trade.",
    image: otni,
    link: 'https://otni.gov.ng',
    textColour: 'text-white',
    stack: ['Next.js'],
    bg: 'bg-[#22C55E]',
  },
  {
    title: 'Outsource Global',
    description:
      'Outsource Global is an outsourcing company that connects with cleints both national and international to provide services in different sectors.',
    image: og,
    link: 'https://www.outsourceglobal.com',
    textColour: 'text-white',
    stack: ['Next.js'],
    bg: 'bg-[#01AEEF]',
  },
  {
    title: 'Paylidate',
    description:
      'Paylidate is an Escrow platform that mitigates online fraud between buyers and sellers, and also provides digital wallet tp interested users for payment.',
    image: pay,
    link: '',
    textColour: 'text-white',
    stack: ['Vue.js', 'Laravel'],
    bg: 'bg-[#F5722C]',
  },
];
