import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import './index.scss';
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const SignupSchema = Yup.object().shape({
  person: Yup.string()
  .matches(/^\d+$/, 'Must be a number')  
    .matches(/^(?:[4-9]|[1-4]\d|50)$/, 'We accept min 4 max 50 person')
    .required('Required'),
  date: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
});

const Reserv = () => {
  const showSweetAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'the reservation is complete',
      showCancelButton: false,
    });
  };

  return (
    <>
      <Formik
        initialValues={{ number: '', date: '', time: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            showSweetAlert(values); // Show SweetAlert on form submission
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="row">
              <div  className="col-12 col-md-12 col-lg-12 reser">
                <div className="form">
                  <Field className="reserv-inp" name="person" type="text" placeholder="4 person" />
                  <span className='res-icon'><IoPersonOutline /></span>
                  {errors.person && touched.person ? <div className='err'>{errors.person}</div> : null}
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 reser">
                <div className="form">
                  <Field className="reserv-inp" name="date" type="date" />
                
                  <span className='res-icon'><FaRegCalendarAlt /></span>
                  {errors.date && touched.date ? <div  className='err'>{errors.date}</div> : null}
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 reser">
                <div className="form">
                  <Field className="reserv-inp" name="time" type="time" />
                  <span className='res-icon'><AiOutlineClockCircle /></span>
                  {errors.time && touched.time ? <div className='err'>{errors.time}</div> : null}
                </div>
              </div>
              <div className="col-xl-12 text-center">
                <button className='reservbtn' type="submit">Book a table</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Reserv;
