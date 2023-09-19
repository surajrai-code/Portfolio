import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import surajpic from "../../assets/surajpic.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={surajpic} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a Full-Stack web developer with top-notch skills in
                JavaScript, React, HTML, and CSS. Additionally, I am proficient
                in Node.js, Express, Java, SQL, MongoDB, and Redux Toolkit. My
                expertise spans both front-end and back-end development,
                allowing me to create dynamic and user-friendly web
                applications.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
