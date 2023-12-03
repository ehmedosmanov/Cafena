// // SliderButtons.js
// import React from 'react';
// import { useSwiper } from 'swiper/react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import './index.scss';

// export const SliderButtons = () => {
//   const swiper = useSwiper();

//   const handlePrevClick = () => {
//     if (swiper) {
//       swiper.slidePrev();
//     }
//   };

//   const handleNextClick = () => {
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };

//   return (
//     <div className="swiper-nav-btns">
//       <button className='nav-btn nav_btn_prev' onClick={handlePrevClick}>
//         <FaArrowLeft />
//       </button>
//       <button className='nav-btn nav_btn_next' onClick={handleNextClick}>
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };
