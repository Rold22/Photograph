import React from 'react'
import { styled } from 'styled-components'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiLogoDiscordAlt} from 'react-icons/bi'
const Footer = () => {
  return (
    <Wrapper>
      <div className='footer'>
        <h4 className='txt'>Kelly Calors</h4>
        <div className='underline'></div>
        <div className='icons-container'>
          <BiLogoFacebook className='icon'/>
          <BiLogoInstagram className='icon' />
          <BiLogoTwitter className='icon' />
          <BiLogoDiscordAlt className='icon'/>
        </div>
        <div className='copy'
        >&copy; Copyright 2023, All Rights Reserved</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(25, 27, 27);
  height: 200px;
  width: 100%;
  .underline{
    height: 3px;
    width: 85%;
    background-color: #5c5c6c4a;
    margin-left: auto;
    margin-right: auto;
  }
  .icons-container{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    gap:4rem;
    color: #ed08ce;
  }
  .txt{
    text-align: center;
    color: #ffffff;
  }
  .icon{
    padding: 10px;
    height: 50px;
    width: 50px;
    background: #272727b8;
    backdrop-filter: blur(20px);
    border-radius: 50%;
    cursor: pointer;
  }
  .icon:hover{
    background:#373737b8;
  }
  .copy{
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #ffffff;
  }
  @media screen and (max-width: 776px) {
    .icons-container{
   
    gap:1rem;
   ;
  }
  }
`

export default Footer