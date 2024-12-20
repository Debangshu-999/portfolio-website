import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import resume from "../assets/Debangshu_resume.pdf";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <a href={resume} download="resume">
        <FaFileDownload />
      </a>
    </div>
  </div>
);

export default SocialMedia;
