import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import Faq from '../components/Faq'
import { Email } from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
    AOS.init(); 
  }, []); 

  return (
    <Wrapper >
      <div className='faq-section'
      data-aos="zoom-in-down"
      data-aos-duration="1300"
      >
        <Faq />
        <Email/>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
background-color: rgb(25, 27, 27);
  .faq-section{
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: rgb(25, 27, 27);
    display: flex;
    gap:10rem;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 776px) {
    .faq-section{
    display: grid;
    height: 100%;
    width: 100%;
    }
  }
`

export default Contact