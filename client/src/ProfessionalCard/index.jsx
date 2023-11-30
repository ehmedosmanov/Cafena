import React from 'react'
import { LuPlus } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./index.scss"

const ProfessionalCard = ({image,name,experience}) => {
  return (
    <div className='prof-card col-lg-4 col-md-6 col-12'>
<div className="team__box">
    <div className="thumb">
        <img src={image} alt="" />
        <div className="social-links">
            <div className="social-links__trigger">
            <LuPlus />
            </div>
            <ul className='list-unstyled'>
                <li><a href=""><FaFacebookF /></a></li>
                <li><a href=""><FaTwitter /></a></li>
                <li><a href=""><FaPinterestP /></a></li>
                <li><a href=""><FaLinkedinIn /></a></li>
            </ul>
        </div>

    </div>
    <div className="content">
        <h4>{name}</h4>
        <span>{experience} year experience</span>
    </div>
</div>
    </div>
  )
}

export default ProfessionalCard