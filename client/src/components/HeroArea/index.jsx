import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'

import './index.scss'
const HeroArea = () => {
  return (
    <section id='hero-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-7'>
            <div className='hero-content'>
              <h1 className='text-uppercase'>rosted coffee for you</h1>
              <p>
                The coffee is brewed by first roasting the green coffee beans
                over hot coals in a brazier. given an opportunity to sample.
              </p>
              <div className='hero-buttons'>
                <button className='custom-btn_primary'>Testy Coffe</button>
                <button className='custom-btn_secondary'>Read More</button>
              </div>
              <div className='hero-social_medias'>
                <span className='social-media d-flex align-items-center '>
                  <FaFacebookSquare />
                  <span className='icon'>Facebook</span>
                </span>
                <span className='social-media d-flex  align-items-center '>
                  <FaSquareXTwitter />
                  <span className='icon'>Twitter</span>
                </span>
                <spa className='social-media d-flex align-items-center '>
                  <FaYoutube />
                  <span className='icon'>Youtube</span>
                </spa>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroArea
