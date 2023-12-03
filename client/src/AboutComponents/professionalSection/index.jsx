import React from 'react'
import "./inde.scss"
import Professional from '../Professional'

// https://xpressrow.com/html/cafena/cafena/assets/images/logo/favicon.ico 
const ProfessionalSection = () => {
  return (
    <>
    {/* section with proffessional start  */}
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
    {/* section with proffessional end  */}
    </>
  )
}

export default ProfessionalSection