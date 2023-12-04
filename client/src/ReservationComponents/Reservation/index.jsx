import React from 'react'
import { Formik, Form, Field } from "formik";
import "./index.scss"
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import Button from '../../components/CommonComponents/Button';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    number: Yup.string()
    .matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 'Invalid phone number format')
    .required('Required'),
    date: Yup.string()
    .required('Required'),
    time: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  
});
const Reservation = () => {
  const showSweetAlert = () => {
    Swal.fire({
      icon: 'success',
      showCancelButton: false,
      
    });
  };
  return (
    <>
    <section id='reservation'>
      <span className="shape__1"><img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png" alt="" /></span>
      <span className="shape__2"><img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-2.png" alt="" /></span>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="reservation__wrapper--2">
              <div className="section-heading text-center">
                <h2 className='title'>Reservation form</h2>
              </div>
              <div className='reservation__form text-center'>
              <Formik
       initialValues={{name: '', number: '',date:"",time:"", email: ''}}
       validationSchema={SignupSchema}
       onSubmit={(values, { setSubmitting, resetForm  }) => {
        setTimeout(() => {
          showSweetAlert(values); // Show SweetAlert on form submission
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
     >
       {({ errors, touched  }) => (
         <Form>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6"><div className="from-group"><Field name="name" type="text" placeholder="Enter your name"/>{errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}</div></div>
            <div className="col-12 col-md-12 col-lg-6"><div className="from-group"><Field name="number" type="tel" placeholder="Enter your number"/>{errors.number && touched.number ? (
             <div>{errors.number}</div>
           ) : null}</div></div>
            <div className="col-12 col-md-12 col-lg-6"><div className="from-group"> 
             <select  name="seats" id="">
            <option value="Seates*">Seates*</option>
            <option value="For 2 peoples">For 2 peoples</option>
            <option value="For 5 peoples">For 5 peoples</option>
            <option value="For 8 peoples">For 8 peoples</option>
          </select>
          </div>
          </div> 
            <div className="col-12 col-md-12 col-lg-6"><div className="from-group"><Field name="date" type="date" />{errors.date && touched.date ? (
             <div>{errors.date}</div>
           ) : null}</div></div> 
            <div className="col-12 col-md-12 col-lg-6"><div className="from-group"> <Field name="time" type="time" />{errors.time && touched.time ? (
             <div>{errors.time}</div>
           ) : null}</div></div> 
          <div className='col-12 col-md-12 col-lg-6'><div className="from-group"><Field name="email" type="email" placeholder="Enter your email"  />
          {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}</div></div> 
          <div className='col-xl-12  text-center'>
           <Button type="submit" >
             Submit
           </Button></div>
           </div>
         </Form>
       )}
     </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
       </section>
    </>
  )
}

export default Reservation