import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { CiPlay1 } from "react-icons/ci";

import Button from "../CommonComponents/Button";
import "./index.scss";

const HeroArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "visible";
  };
  return (
    <section id="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="hero-content">
              <h1 className="text-uppercase">rosted coffee for you</h1>
              <p>
                The coffee is brewed by first roasting the green coffee beans
                over hot coals in a brazier. given an opportunity to sample.
              </p>
              <div className="hero-buttons">
                <Button>Testy Coffe</Button>
                <Button secondary>Read More</Button>
              </div>
              <div className="hero-social_medias">
                <span className="social-media d-flex align-items-center ">
                  <FaFacebookSquare />
                  <span className="icon">Facebook</span>
                </span>
                <span className="social-media d-flex  align-items-center ">
                  <FaSquareXTwitter />
                  <span className="icon">Twitter</span>
                </span>
                <spa className="social-media d-flex align-items-center ">
                  <FaYoutube />
                  <span className="icon">Youtube</span>
                </spa>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="play-video">
              <span className="open-vide_modal" onClick={openModal}>
                <CiPlay1 />
              </span>
              <span>Play Video</span>
            </div>
            {isModalOpen && (
              <div className="video-content">
                <div className="video-modal" onClick={closeModal}>
                  <iframe
                    width="620"
                    height="445"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                  <span onClick={closeModal} className="close-vide_modal">
                    <IoMdCloseCircleOutline />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
