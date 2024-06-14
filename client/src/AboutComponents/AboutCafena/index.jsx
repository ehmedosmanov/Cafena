import React from 'react'
import "./index.scss"
import { IoCheckmarkOutline } from "react-icons/io5";
import Shape11 from '../../assets/images/about-shape-2-1.png'
import Shape12 from '../../assets/images/about-shape-2-2.png'
import About12 from '../../assets/images/about-img-2-1.png'
import About22 from '../../assets/images/about-img-2-2.png'
const AboutCafena = () => {
  return (
    <>
    {/* section about cafena start  */}
<section id='about-cafena'>
    <span className='shape shape__1 position-absolute'>
        <img src={Shape11} alt="Shape1-1" />
    </span>
    <span className='shape shape__2 position-absolute'>
        <img src={Shape12} alt="Shape1-2" />
    </span>
<div className="container">
  <div className="row">
    <div className='col-xl-7 col-lg-12  col-12 col-md-12'>
      <div className='about__left about__left--2 position-relative'>
        <img className='big' src={About12} alt="Abou11" />
<img className='small position-absolute' src={About22} alt="Abou22" />
      </div>
    </div>
    <div className=' col-xl-5 col-lg-12 col-12 col-md-12'>
      <div className='about__right about__right--2'>
        <div className='section-heading'>
          <span className='sub-title'>about Cafena</span>
          <h2 className='title'>one of the best coffee house in your home town</h2>
          <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
        </div>
        <ul className='about__list list-unstyled mt-25'>
          <li><span className='icon'><IoCheckmarkOutline /></span> What is Lorem Ipsum Lorem Ipsum is simply.</li>
          <li><span className='icon'><IoCheckmarkOutline /></span> Dummy text of the printing text.</li>
          <li><span className='icon'><IoCheckmarkOutline /></span> Typesetting industry Lorem Ipsum has been the industry's</li>
          
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

{/* section about cafena end */}
    </>
  )
}

export default AboutCafena