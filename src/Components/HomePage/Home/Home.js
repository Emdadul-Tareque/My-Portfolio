import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Typist from "react-typist";
import profile from "../../../images/profilePic.jpeg";
import Header from "../Header/Header";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <section className="section">
        <Header></Header>
        <div className=" main d-flex align-items-center justify-content-center">
        <div className="home-body d-flex align-items-center justify-content-center">
          <div className="mt-5">
            <div className="profile-img">
              <img
                data-aos="zoom-in"
                className="img-fluid"
                src={profile}
                alt=""
              />
            </div>

            <div className="intro">
              <h1 className="text-white" data-aos="fade-up-right">
                Emdadul Hoque Tareque
              </h1>
              <Typist className="text-white h4">
                <span> Web developer </span>
                <Typist.Backspace count={10} delay={200} />
                <span> developer | Programmer </span>
                <Typist.Backspace count={11} delay={200} />
                <span> Programmer | Learner </span>
                <Typist.Backspace count={8} delay={200} />
                <span> Learner </span>
              </Typist>
            </div>
            <div className=" d-flex justify-content-center ">
              <div className="icons" data-aos="fade-up">
                <a href="https://github.com/Emdadul-Tareque" target="blank">
                  <h2>
                    {" "}
                    <FaGithub />
                  </h2>{" "}
                </a>
                <a
                  href="https://www.facebook.com/emdadulhoque.tareque/"
                  target="blank"
                >
                  <h2>
                    <FaFacebook />
                  </h2>
                </a>
                <a
                  href="https://www.linkedin.com/in/emdadul-tareque-168937182/"
                  target="blank"
                >
                  <h2>
                    <FaLinkedin />
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <MessengerCustomerChat
          pageId="<106709411327830>"
          appId="<383950842866089>"
          
        />
      </section>
    </div>
  );
};

export default Home;
