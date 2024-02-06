import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init(); 
  }, []); 
  
  return (
    <Wrapper>
      <div className='section-container' id="home">
        <div className='left-side'>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000">Kelly Calors</h1>
          <h3 className='main-name'
            data-aos="fade-up"
            data-aos-duration="1300"
          >Future photographer and image editor </h3>
          <h3
            data-aos="fade-up"
            data-aos-duration="1500"
          > 3D perspective</h3>
          <button className='btn'
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <Link
              to="msg"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            Contact ME <AiOutlineHeart className='heart' />
            </Link>
          </button>

            </div>
        <div className='right-side'
            data-aos="fade-up"
            data-aos-duration="1700"
        >
              <div class='img-container'>
                <div class="img-border">
                  <img src={require('../assets/pt.jpg')}
                    className='img-main size'
                    alt="main" />
                </div>
              </div>
            </div>
          </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 100vh;
width: 100%;
background-color: rgb(25, 27, 27);

.section-container{
  display: flex;
  justify-content: center;
  gap:5rem;
  margin-left:-10rem;
}
.heart{
  padding-top: 4px;
  color: #d900ff;
  font-size: 1.5rem;
}
//BTN
.btn{
  font-weight: bold;
  font-size: 1.30rem;
  color: white;
  border-radius: 0 0 0 15px;
  border: none;
  padding: 15px 50px;
  background: linear-gradient(118deg, rgba(255,0,160,1) 0%, #5656f5 48%, #2f02d2 100%);
  border: 5px solid #09bfe8; 
  box-shadow: 0 0 20px #00bfff; 
  cursor: pointer;
  transition: all 0.5s linear ;
}
.btn:hover{
border-radius: 0px 15px  0 0px;
}
//MAIN-TXT
.left-side{
  padding-top: 10rem;
  text-align: center;
  margin-bottom: 2rem;
}
.left-side h1{
  margin-top: 5rem;
  color: white;
  font-size: 4rem;
  margin-bottom: 2rem;
}
.left-side h3{
  color: white;
  margin-bottom: 2rem;
}

//IMG right
.size{
  object-fit: cover/center;
}
.img-main{
  margin-top: 8rem;
  height: 700px;
  width: 400px;
  object-fit: cover;
  display: block;

}
.img-container {
  display: inline-block;
  
}

.img-container img {
  display: block;
  height: 500px;
  width: 400px;
  border-radius: 24px; 
  border: 5px solid #00FFFF; 
  box-shadow: 0 0 20px #d900ff;
  
}
@media screen and (max-width: 776px) {
height: 100%;
width: 100%;
.section-container{
  display: grid;
}
.left-side h1{
  font-size: 2rem;
  text-align: center;
  margin-left: 9rem;
  margin-top: -3rem;
}
.left-side h3{
  font-size: 1rem;
  margin-left: 9rem;
}
.btn{
  padding: 15px 25px;
  font-size: 1rem;
  margin-left: 9rem;
}
.heart{
  display: none;
}
//img
.img-main{
  margin-top: -5rem;
  height: 400px;
  width: 300px;
  object-fit: cover/center;
  
}

.img-container img {
  display: block;
  height: 400px;
  width: 300px;
  margin-left: 11rem;
  margin-bottom: 4rem;
}
}

@media screen and (max-width: 500px) {
  .left-side h3{
  color: white;
  font-size: 15px;
  text-align: center;
}
.main-name{
  text-align: center;
  padding-left: 1rem;
}
}

`

export default Hero