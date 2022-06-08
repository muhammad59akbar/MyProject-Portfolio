import React from 'react';
import Footer from '../footer/Footer';
import { PageTittle } from '../TitleName';
import Aboutus from './aboutus/Aboutus';
import Experience from './experience/Experience';
import Work from './work/Work';

const About = () => {
  PageTittle('About Me');
  return (
    <>
    <Aboutus />
    <Experience />
    <Work />
    <Footer />
    </>
  )
}

export default About