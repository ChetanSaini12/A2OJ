import SectionTitle from "../SectionTitle";
import "../../App.css";
import { Fade } from "react-reveal";
import CfRating from "./CfRating";
import { useEffect, useState } from "react";
import Form from "../Form/form";
import FloatingButton from "../FloatingLeaderBoard/Floating";

export default function Leaderboard() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="leaderboard">
      <SectionTitle title="NITA Leaderboard" />
      <div className="text-white">
        {/* <Fade duration={500} bottom> */}
        <CfRating />
        <Form setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        <FloatingButton
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
        {/* </Fade>       */}
      </div>
    </section>
  );
}
