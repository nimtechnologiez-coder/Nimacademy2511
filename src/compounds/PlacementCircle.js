import React from "react";
import "../Style/PlacementCircle.css";


// Placement icons
import iconSupport from "../Images/abc.png";
import iconSkills from "../Images/skills.png";
import iconGlobal from "../Images/global.png";
import iconCareer from "../Images/career.png";
import iconEndless from "../Images/endless.png";

// OPTIONAL: Circle faded BG image
// import circleBg from "../Images/circlebg.png";

const PlacementAndCollaboration = () => {
  return (
    <div>

      {/* ====================== FIRST SECTION (PLACEMENT CIRCLE) ====================== */}

      <div className="place-main-wrapper">

        <h1 className="place-title">
          Placement at <span>NIM</span> Academy
        </h1>

        <h2 className="place-subheading">
          Our mission doesn’t stop at training — it continues until you get hired
        </h2>

        <p className="place-description">
          NIM Academy’s dedicated Placement Cell works closely with tech companies,
          startups, and MNCs to connect skilled learners with real opportunities.
          From resume building to mock interviews, we prepare you to shine in every
          stage of your career journey. With NIM’s continuous guidance, our students
          have been placed across top companies in India and overseas — and the list
          keeps growing.
        </p>

        <div className="place-circle">

          {/* Uncomment if you want faded BG:
          <img src={circleBg} className='place-bg' alt='' />
          */}

          <div className="place-content">

            <div className="place-row">
              <div className="place-line"></div>
              <img src={iconSupport} className="place-icon" alt="" />
              <p className="place-text">Placement Support 100%</p>
            </div>

            <div className="place-row">
              <div className="place-line"></div>
              <img src={iconSkills} className="place-icon" alt="" />
              <p className="place-text">Interview & Soft Skills Training</p>
            </div>

            <div className="place-row">
              <div className="place-line"></div>
              <img src={iconGlobal} className="place-icon" alt="" />
              <p className="place-text">Global Placement Opportunities</p>
            </div>

            <div className="place-row">
              <div className="place-line"></div>
              <img src={iconCareer} className="place-icon" alt="" />
              <p className="place-text">Career Counseling by Industry Experts</p>
            </div>

            <div className="place-row">
              <div className="place-line"></div>
              <img src={iconEndless} className="place-icon" alt="" />
              <p className="place-text">Endless Successful Placements</p>
            </div>

          </div>
        </div>
      </div>


      {/* ====================== SECOND SECTION (COLLEGE COLLABORATION) ====================== */}

      <div className="cc-wrapper">

        <h1 className="cc-titlee">
          Collaborations & College <span>Partnerships</span>
        </h1>

        <h2 className="cc-subtitle">
          Partnered with Leading Colleges & Universities
        </h2>

        <p className="cc-description">
          NIM Academy collaborates with top institutions across Tamil Nadu and Kerala,
          building bridges between academic learning and industry expectations. Through
          our MoUs, workshops, and placement-driven programs, we empower students with
          the skills that employers demand — preparing campuses for a future-ready
          generation.
        </p>

        <h2 className="cc-network-title">
          Our <span>Institutional</span> Network
        </h2>

        <p className="cc-description">
          We’ve partnered with N+ colleges — delivering technical training,
          certification programs, and internship opportunities directly on campus.
        </p>

      </div>

    </div>
  );
};

export default PlacementAndCollaboration;
