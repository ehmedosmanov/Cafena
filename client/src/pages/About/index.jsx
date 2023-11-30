import React from 'react'
import Professional from '../../Professional'
 
import "./index.scss"
const About = () => {
  return (
    <>
<section id='professional'>
<div className="container">
    <div className="row">
        <div className='col-lg-12 text-center'>
            <div className='section-heading'>
                <span className='sub-title'>Our Chef</span>
                <h2 className='title'>Meet our Professional</h2>
            </div>
        </div>
    </div>
    <Professional></Professional>
</div>
</section>
    </>
  )
}

export default About