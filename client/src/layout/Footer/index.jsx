import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { FaPaperPlane } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaGooglePlusG } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import './index.scss'
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='top-footer'>
          <a className='go-top position-absolute d-flex align-items-center justify-content-center'>
            <div className='top' onClick={scrollToTop}>
              <FaArrowUpLong className='top-fa' />{' '}
            </div>
            <span>go to top</span>
          </a>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='info d-flex'>
                  <div className='img-tel'>
                    <img
                      src='https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-phone.png'
                      alt=''
                    />
                  </div>
                  <span className='phone'>Phone :</span>
                  <a className='num'>+88019 339 702 520</a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='info d-flex'>
                  <div className='img-tel'>
                    <img
                      src='https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-map-marker.png'
                      alt=''
                    />
                  </div>
                  <span className='phone'>address :</span>
                  <a className='num'>30 North West New</a>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-12'>
                <div className='footer-widget'>
                  <div className='subscribe'>
                    <form action=''>
                      <input type='email' placeholder='Enter your email' />
                      <button type='submit'>
                        Subscribe <FaPaperPlane />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='middle-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-12 col-md-12'>
                <div className='footer__logo--content'>
                  <img
                    src='https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png'
                    alt=''
                  />
                  <p>
                    Donec et nibh maximus, congue est eu, mattis nunc. Praesent
                    ut quam quis quam venenatis fringilla. Morbi vestibulum
                  </p>
                </div>
              </div>
              <div className='col-lg-5  col-12 col-md-12 align-self-end'>
                <div className='social-links d-flex align-items-center justify-content-lg-end'>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaFacebookF />
                  </a>
                  <a>
                    <FaYoutube />
                  </a>
                  <a>
                    <FaGooglePlusG />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__menu-area d-flex '>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-9 col-md-12 col-12'>
                <div className='footer__menu'>
                  <nav>
                    <ul className='nav-footer'>
                      <li>
                        <a>Home</a>
                      </li>
                      <li>
                        <a>about</a>
                      </li>
                      <li>
                        <a>menu</a>
                      </li>
                      <li>
                        <a>reservation</a>
                      </li>
                      <li>
                        <a>pages</a>
                      </li>
                      <li>
                        <a>shop</a>
                      </li>
                      <li>
                        <a>blog</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='col-lg-3 col-md-12 col-12 top-bot'>
                <a href='' className='go-top-bottom'>
                  <span>
                    go top <FaArrowUpLong />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
