import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./index.scss"

const NewsCard = ({image,name,about,date,description}) => {
  return (
  
        <div className='news-card col-lg-4 col-md-6 mt-30 col-12'>
<div className='thumb p-0 position-relative'>
    <div className="img">
        <img src={image} alt="" />
    </div>
</div>
<div className="content">
    <ul className='blog__meta list-unstyled d-flex align-items-center justify-content-start'>
        <li><span>By: </span> {name}</li>
        <li>\</li>
        <li>{about}</li>
        <li>\</li>
        <li>{date}</li>
    </ul>
    <h3 className='blog__title border-effect'><a href="">{description}</a></h3>
    <a className='read-more' href="">Read more <FaArrowRightLong className='strelka' /></a>
</div>
        </div>
    
  )
}

export default NewsCard