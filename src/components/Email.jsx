import React from 'react'
import { styled } from 'styled-components'
import {AiOutlineHeart} from 'react-icons/ai'
const Email = () => {
  return (
    <Wrapper>
    <div className='contact-section'>
      <div class='img-container'>
            <div class="img-border">
              <img src={require('../assets/faq.jpg')}
                className='img-main'
                alt="main" />
          </div>
          <div className='msg' id="msg">
            <label className='send'>Send me msg
            <AiOutlineHeart className='heart' />
            </label>
            <input type="text" placeholder='  Send msg <3'/>
          </div>
            <button type='submit' className='btn'>Send</button>
        </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin-bottom: 5rem;
.msg{
  display: grid;
  color: #ff03af;
}
.msg label{
  margin-top: 1rem;
  font-size: 2rem;
  text-transform: capitalize;
}
.msg input{
  margin-top: 1rem;
  border: none;
  width: 300px;
  height: 30px;
  background: #648f8c2c;
  color: #ff00ee;
  font-size: 1rem;
}
.input,.placeholder{
  color: white;
}
.heart{
  padding-top: 4px;
  color: #ff00ea;
  font-size: 2rem;
}
  //IMG
  .img-main{
  margin-top: 8rem;
  height: 500px;
  width: 400px;
  object-fit: cover;
  display: block;
}
.img-container {
  display: inline-block;
}

.img-container img {
  display: block;
  height: 400px;
  width: 300px;
  object-fit: cover/center;
  border-radius: 24px; 
  border: 5px solid #ffffff; 
  box-shadow: 0 0 20px #d900ff; 
}
//btn
.btn{
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 10px 60px;
  background: linear-gradient(118deg, rgba(255,0,160,1) 0%, #5656f5 48%, #2f02d2 100%);
  border: 2px solid #c9d4d6; 
  box-shadow: 0 0 20px #ff00ee; 
  cursor: pointer;
  transition: all 0.5s linear ;
}
.btn:hover{
border-radius: 10px;
}
@media screen and (max-width: 776px) {
  margin-top: -12rem;
    .img-container{
    margin-left: 9rem;
    }
  }
`

export default Email