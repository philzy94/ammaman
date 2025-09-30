import React from 'react';

import Slider from 'react-slick';
import wn1 from '../assets/projects/worknation.png';
import dsr1 from '../assets/projects/prospera.png';
import vreg from '../assets/projects/vrag.png';
import og from '../assets/projects/og.png';
import oga1 from '../assets/projects/oga1.png';
import otni from '../assets/projects/otni.png';
import pay from '../assets/projects/pay.png';
import cake from '../assets/projects/cake.png';
import Footer from '../components/footer';

export default function Projects() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="flex min-h-[95vh] flex-col justify-between">
      <div
        data-aos="zoom-in"
        className="relative flex flex-col justify-center overflow-hidden p-5 py-8 md:px-52 md:py-20"
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
                    <div 
                      className={`${proj?.bg} rounded-lg p-2 shadow-lg h-full flex flex-col relative group cursor-pointer`}
                      title={proj?.description}
                    >
                      <h3 className="text-2xl font-bold">{proj?.title}</h3>
                      <p className="my-3 truncate text-justify font-medium">{proj?.description}</p>
                      <div className="flex-1 flex items-center justify-center mb-4">
                        <img
                          src={proj?.image}
                          className="w-full h-48 object-cover shadow-lg rounded"
                          align={proj?.title}
                        />
                      </div>
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
                      
                      {/* Fancy Custom Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform-translate-x-1/2 mb-3 px-4 py-3 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-sm rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-20 max-w-sm transform-gpu scale-95 group-hover:scale-100">
                        <div className="text-center whitespace-normal leading-relaxed font-medium">
                          {proj?.description}
                        </div>
                        {/* Fancy Tooltip arrow with gradient */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                          <div className="border-6 border-transparent border-t-gray-900"></div>
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-6 border-transparent border-t-gray-800"></div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-sm -z-10"></div>
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{padding: '1px'}}>
                          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <br />
          <h3 className="mt-3 text-2xl font-extrabold">Let&apos;s work together</h3>
          <p className="text-gray-6500 mb-8 text-justify">
            I am currently open to work engagements. If i look like who you&apos;re looking for, you
            can reach out to me via email at holyphilzy@gmail.com or social media.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const projects = [
  {
    title: 'Worknation',
    description:
      'Workrnation is a workforce platform that connects employers with job seekers and also provides training opportunities to interested users.',
    image: wn1,
    link: 'https://www.worknation.africa',
    textColour: 'text-white',
    bg: 'bg-[#12A670]',
    stack: ['Next.js', 'Nest.js'],
  },
  {
    title: 'Prosoera',
    description:
      'Prospera is a digital social protection platform built for governments, NGOs, and donors across Africa. The platform is designed to streamline and digitize aid delivery—covering cash, food, and services—ensuring transparency, security, and dignity for beneficiaries.',
    image: dsr1,
    link: 'https://prospera.com.ng',
    textColour: 'text-white',
    stack: ['Next.js', 'Laravel'],
    bg: 'bg-[#10182A]',
  },
  {
    title: 'VREG',
    description:
      'VREG (Vehicle Registry Nigeria) is a government portal developed through collaboration between the Federal Ministry of Finance and FourCore Technology Solutions Limited. It functions as a centralized database for vehicle import/export VIN data, integrated with agencies like Nigerian Customs, NAICOM, FRSC, etc.',
    image: vreg,
    link: 'https://vreg.gov.ng',
    textColour: 'text-white',
    stack: [''],
    bg: 'bg-[#219653]',
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
    title: 'Springcakes',
    description:
      "SpringCakes is a UK-based online bakery crafting fresh, custom-designed celebration cakes for a wide range of occasions. They combine professional themes, full customizability, and a user-friendly ordering experience—including their app and order tracking. With clear lead times, delivery options, and safety/storage/allergen policies in place, it's a comprehensive service for anyone planning a celebratory or themed cake in the UK.",
    image: cake,
    link: 'https://springcakes.co.uk',
    textColour: 'text-white',
    stack: ['Next.js', 'Laravel'],
    bg: 'bg-[#496724]',
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
