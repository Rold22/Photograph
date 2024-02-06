import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { LeftGallery, RightGallery } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
 
    useEffect(() => {
    AOS.init(); 
  }, []); 
  return (
    <Wrapper id="gallery">
      <h2 className='txt'
        data-aos="fade-up"
        data-aos-duration="1000"
      > Gallery </h2>
        <div className='underline'></div>
      <div className='gallery'
        data-aos="zoom-in"
        data-aos-duration="1300"
      >
        <div className='background'>
          <LeftGallery/>
          <RightGallery className="class"/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width:  100%;
height: 100%;
background-color: rgb(25, 27, 27);
overflow: hidden;
.gallery {
    height: 100vh;
    width: 100%;
    background-color: rgb(25, 27, 27);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background {
    border: 5px solid #c20a69;
    border-radius: 5px;
    box-shadow: 0 0 50px #ad0494; 
    height: 90vh;
    width: 90%;
    background: linear-gradient(118deg, rgba(50, 47, 54, 0) 0%, rgba(56, 11, 46, 0.5) 13%, rgba(33, 30, 39, 0.699) 74%, rgba(41,13,89,0.5) 100%);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    gap:2rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
  //MAIN TXT
  .txt{
  position: relative;
  text-align: center;
  color: white;
}
.underline {
  width:  15rem;
  height: 0.25rem;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to right, #c900bf, #0022ff, #07c8eb);
  box-shadow: 0 0px 50px #00c8ff; 
  margin-bottom: 2rem;
}
@media screen and (max-width: 776px) {
  width:  100%;
  height: 800px;
  overflow: hidden;
  .background{
    display: grid;
    height: 100%;
  }
  .class{
  }
}

`
export default Gallery