import {React, useState} from "react";
import SectionTitle from "../SectionTitle";
import ContestBody from "./ContestBody";
import "./Contest.css"

function Contest() {

  const [activeTab, setActiveTab] = useState("Fastforces");

  const handleClick = (platform) => {
    setActiveTab(platform);
  };


  return (
    <section
      id="contest"
      data-aos="zoom-in-down"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-easing="ease-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >

    <SectionTitle title="Contests"/>
    <div className="contestSection">
      <div className="tabSection">
      <div className="tabs flex">
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "Fastforces" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("Fastforces")}
        >
          DCCForces
        </a>
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "Codeforces" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("Codeforces")}
        >
          Codeforces
        </a>
        <a      
          className={`tab tab-lifted flex-1 ${
            activeTab === "Codechef" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("Codechef")}
        >
          Codechef
        </a>
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "LeetCode" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("LeetCode")}
        >
          LeetCode
        </a>
        <a
          className={`tab tab-lifted flex-1 ${
            activeTab === "AtCoder" ? "tab-active" : ""
          }`}
          onClick={() => handleClick("AtCoder")}
        >
          AtCoder
        </a>
      </div>
      </div>
      <ContestBody platform={activeTab}/>
    </div>
    </section>
  );
}

export default Contest;
