import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tommorw"s Lecture's Today </h2>
        <p>
          Embark on a transformative educational journey with our University's
          comprehensive education program. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.{" "}
        </p>
        <p>
          With a focus on innovation, hands-on learning, personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offer the perfect
          pathway to achieve the goal and unlock your full potential in shaping
          the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
