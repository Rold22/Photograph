import React from 'react'
import { Link } from 'react-scroll';
import { styled } from 'styled-components';

const Sidebar = ({closeSidebar}) => {
  return (
  <Wrapper>
      <div className='sidebar'>
        <ul className='ul-centers'>
          <li className='list'>
            <Link
              onClick={closeSidebar}
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
            Home
            </Link>
          </li>
            <li className='list'>
            <Link
              onClick={closeSidebar}
              to="camera"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
            Camera
            </Link>
          </li>
          <li className='list'>
            <Link
              onClick={closeSidebar}
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
            Gallery
            </Link>
          </li>
          <li className='list'>
            <Link
              onClick={closeSidebar}
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
            Contact
            </Link>
          </li>
        </ul>
  
      </div>
  </Wrapper>
  )
}
const Wrapper = styled.div`
width: 100%;
height: 180px;
background: #32313195;
backdrop-filter: blur(10px);
border-bottom: 1px solid #1207da;
box-shadow: 0 0px 0px 2px #da077f ;
position: absolute;
margin-top: 3.7rem;
.sidebar{
  font-size: 1.5rem;
  margin-top: 1rem;
  text-align: center;
  color: white;
  text-transform: uppercase;
}
.list{
  cursor: pointer;
}

`

export default Sidebar