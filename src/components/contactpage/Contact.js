import React from 'react';
import ContactMe from './ContactMe/ContactMe';
import Slider from './Slider/Slider';
import Footer from '../footer/Footer';
import { PageTittle } from '../TitleName';

const Contact = () => {
  PageTittle('Contact Us');
  return (
    <>
    <Slider />
    <ContactMe />
    <Footer />
    </>

  )
}

export default Contact