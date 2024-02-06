import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Camera = () => {
  useEffect(() => {
    AOS.init(); 
  }, []); 
  
  return (
    <Wrapper>
      <div className='section-center' id="camera"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className='txt'> Work with this... </h2>
        <div className='underline'></div>
        <div className='camera'>
          {/* CAM1 */}
          <div className="project-1">
            <img src={require('../assets/nikon.png')}
              className='cam'
              alt="cam" />
            <h5 className='name'>
              Nikon Z 6II Mirrorless Digital Camera
            </h5>
            <p className='desc' >
              The Z 6II builds on the extreme versatility of the
              Z mirrorless platform with more autofocus options,
              more video capabilities, more low light performance,
              more buffer, more frames per second�more of
              everything you want in a hybrid still and video camera.
            </p>
          </div>
           {/* CAM2 */}
          <div className="project-1">
            <img src={require('../assets/cam2-removebg-preview.png')}
              className='cam'
              alt="cam" />
            <h5 className='name'>
              Nikon NIKKOR Z 24-70mm
            </h5>
            <p className='desc' >
              4-70mm is the sweet spot of the zoom range for many
              photographers, great for everything from landscapes
              and studio work to weddings and press events.
              The f/2.8 constant aperture allows for faster
              shutter speeds to freeze fast action, renders a
              beautiful bokeh blur and performs brilliantly in low light.
            </p>
          </div>
           {/* CAM3 */}
          <div className="project-1">
            <img src={require('../assets/cam3-removebg-preview.png')}
              className='cam'
              alt="cam" />
            <h5 className='name'>
              Nikon NIKKOR Z 100-400mm VR S
            </h5>
            <p className='desc' >
              Many photographers use a Canon 100-400mm to shoot
              wildlife and get great photos. That includes critters
              in the sea, on land, and in the air.
              The 400mm focal length works to get you close
              to the timid subjects.
            </p>
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
//CAM
.project-1{
}
.camera{
  backdrop-filter: blur(10px);
  background: linear-gradient(118deg, rgba(136,0,0,0.6033263647255778) 0%, rgba(38,38,38,1) 13%, rgba(38,38,38,1) 84%, rgba(136,0,0,1) 100%);
  width: 1250px;
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.cam{
  height: 150px;
  width: 200px;
  object-fit: cover;
}
.name{
  color:white;
}
.desc {
  color: white;
  width: 350px;
  word-wrap: break-word;
  font-weight: 400;
}

//txt
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
}
@media screen and (max-width: 776px) {
height: 100%;
width: 100%;
padding-bottom: 2rem;
  .txt{
    text-align: center;
  }
.camera{
  display: grid;
  padding-left: 1rem;
  width: auto
}
}

`

export default Camera