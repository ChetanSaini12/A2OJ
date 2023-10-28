import React from "react";
import SectionTitle from "../SectionTitle";
import { useEffect } from "react";
import "./About.css";
import { BsLinkedin } from "react-icons/bs";
import { SiCodeforces } from "react-icons/si";
import { BsInstagram, BsGithub } from "react-icons/bs";
const aryan = require("../Abouts/aryan.webp");
const chetan = require("../Abouts/chetan.webp");

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const contributorList = [
    {
      name: "Aryan",
      image: aryan,
      altText: "Aryan's photo",
      role: "Competitive Programmer",
      batch: "NITA CSE'25",
      instagram: "https://www.instagram.com/aryan2002_/",
      github: "https://github.com/Aryan20022003",
      linkedIn: "https://www.linkedin.com/in/aryan-280409221/",
      codeforces: "https://codeforces.com/profile/Aryan20022003",
    },
    {
      name: "Chetan Saini",
      image: chetan,
      altText: "Chetan's photo",
      role: "Competitive Programmer",
      batch: "NITA CSE'25",
      instagram: "https://www.instagram.com/chetan_saini_irreplaceable/",
      github: "https://github.com/ChetanSaini12",
      linkedIn: "https://www.linkedin.com/in/chetan-saini-391793223/",
      codeforces: "https://codeforces.com/profile/chetan_saini",
    },
  ];

  const contributors = contributorList.map((item, i) => {
    return (
      <div
        className=" h-62 w-full top-28  rounded-lg flex flex-col justify-center items-center"
        
        key={i}
      >
        <div className="border bhabhiji  w-5/6 py-8 px-4 md:p-8  md:w-7/12 mb-4 rounded ">
          <div className="mb-8 flex justify-center m-auto">
            <img
              src={item.image}
              width={100}
              height={100}
              className="object-center object-cover photo rounded-full h-44 w-44 md:h-48 md:w-48 "
              alt={item.altText}
            />
          </div>
          <div className="text-center">
            <p className="sm:text-xl text-white font-bold mb-2">{item.name}</p>
            <p className="text-sm mb-2 text-slate-300">
              {/* <span className="mb-1.5 sm:mb-0 block sm:inline">
                {item.role}
              </span>
              <span className="hidden sm:inline"> | </span> */}
              <span className="block sm:inline">{item.batch}</span>
              {/* <span className="hidden sm:inline"> | </span> */}
            </p>
            <p className=" flex gap-5 justify-center text-lg text-slate-300">
              <a
                className="ids inst"
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BsInstagram />
                </span>
              </a>
              <a
                className="ids git"
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BsGithub />
                </span>
              </a>
              <a
                className="ids cf"
                href={item.codeforces}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <SiCodeforces />
                </span>
              </a>
              <a
                className="ids lin"
                href={item.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BsLinkedin />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="about"
    data-aos="zoom-in-down"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
    >
      <SectionTitle title="About" />

      <div>
        {/* <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://unpkg.com/tailwindcss@2.2.4/dist/tailwind.min.css"
          rel="stylesheet"
        /> */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="grid grid-cols-1 pt-12  gap-4 hover:gap-8 sm:gap-8 sm:grid-cols-2">
            {contributors}
          </div>
        </section>
      </div>
    </section>
  );
}
