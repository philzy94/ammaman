import React from 'react';
import profilePic from '../assets/dp.png'; // Update the path to your image
import SocialIcons from '../components/socialIcons';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div id="home" className="flex min-h-[95vh] flex-col items-center justify-between bg-gray-50">
      <div
        data-aos="zoom-in"
        className=" flex flex-1 flex-col items-center justify-center text-center"
      >
        <div className="mx-auto mb-3 h-40 w-40 overflow-hidden rounded-full shadow">
          <img
            src={profilePic}
            alt="Philemon Shekari Ammaman"
            className="h-48 w-full rounded-full object-cover object-center shadow"
          />
        </div>

        <h3 className="text-3xl font-extrabold">Hi, my name is Philemon Shekari Ammaman.</h3>
        <p className="text-xl text-gray-600">
          I&apos;m a full-stack developer based in Kaduna, Nigeria.
        </p>
        <Link to="/about">
          <a href="" className="inline-flex items-center text-xs font-medium text-gray-500">
            Read more about me →
          </a>
        </Link>

        <br />
        <br />
        <br />
        <div className="bottom-0 left-0 right-0 flex justify-center py-2">
          <ul>
            <SocialIcons />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
