import SectionTitle from "../SectionTitle"
import "./sponsors.css";
import { SponsorsData } from "./SponsorsData";

const Sponsors = () => {
  return (
    <>
      <SectionTitle title="Sponsors" />
      <section className="sponsors">

        <div className="sponsors_slider">
          <div className="sponsors_slide" data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <img src={SponsorsData[0].img} alt="" />
          </div>
          <div className="sponsors_slide" data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <img src={SponsorsData[0].img} alt="" />
          </div>
          <div className="sponsors_slide" data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <img src={SponsorsData[0].img} alt="" />
          </div>
        </div>

      </section>
    </>
    // <div className="sponsors-page">
    //   <SectionTitle title="Sponsors" />
    //   <div className="container">
    //     {
    //     SponsorsData.map((Sponsor,index) => {
    //       return(
    //         <div className= "card" key={index} >
    //           <div className="box">
    //             <div className="content">
    //               <img src={Sponsor.img} alt="" />
    //               <h3>{Sponsor.name}</h3>
    //             </div>
    //           </div>
    //         </div>
    //       )
    //     }) 
    //   }

    //   </div>
    // </div>
  );
}

export default Sponsors;

