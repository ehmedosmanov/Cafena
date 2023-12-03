import React from 'react'
import "./index.scss"
import Reserv from '../Reserv'
import GoogleMapComponent from '../BookingMap'

const BookingTable = () => {
  return (
    <>
<section id='booking-table'>
<div className='container-fluid'>
  <div className="row">
    <div className="col-12 col-md-12 col-lg-6 map">
      <GoogleMapComponent></GoogleMapComponent>
    </div>
    <div className="col-12 col-md-12 col-lg-6 res">
      <div className="map-reserv">
        <div className="resrv-heading text-center">
<span className='sub-title'>Reservation</span>
<h2 className='title'>booking a table</h2>
        </div>
        <div className="reservation-form">
        <Reserv></Reserv>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
    </>
  )
}

export default BookingTable