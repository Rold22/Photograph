import React,{useState} from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-scroll';
import Sidebar from './Sidebar';

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
   const closeSidebar = () => {
    setShowSidebar(false)
  }
  
  return (
    <Wrapper>
      <div className='nav-container'>
        <img src={require('../assets/rose1.png')} alt="menu"
          className='icon-wrap'
          onClick={toggleSidebar} 
        />
        <ul className='ul-center'>
          <li className='li'>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
            Home
            </Link>
          </li>
            <li className='li'>
            <Link
              to="camera"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
            Camera
            </Link>
          </li>
          <li className='li'>
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}

            >
            Gallery
            </Link>
          </li>
          <li className='li'>
            <Link
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
      {showSidebar && <Sidebar closeSidebar={closeSidebar} />}
    </Wrapper>
  )
}
const Wrapper = styled.div`
.side{
  position: absolute;
  z-index: 4000;
}
.icon-wrap{
  display: none;
}
.nav-container{
  position: absolute;
  height: 50px;
  width: 100%;
  background: #605f5f29;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #1207da;
  box-shadow: 0 0px 0px 2px #da077f ;
}
.ul-center{
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  padding-top: 0.5rem;
  gap: 5rem;
  font-weight: bold;
  text-transform: capitalize;
  color: white;
  cursor: pointer;
}
.li:hover{
border-bottom: 2px solid #ff18d8;
;
}
@media screen and (max-width: 776px) {
  .icon-wrap{
  display: block;
  font-size: 0.5rem;
  height: 50px;
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  }
  .icon-wrap:hover{
    transform: scale(1.2); 
  }
    .ul-center{
    display: none;
    }
  }
.nav-container{
  position: absolute;
  height: 60px;
  }
`
export default Nav