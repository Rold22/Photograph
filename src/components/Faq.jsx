import React from 'react'
import FaqItem from './FaqItem'
import {FAQ }from '../faqData'
import { styled } from 'styled-components'

const Faq = () => {
  return (
    <Wrapper id="contact">
    <div className='faq'>
      <div className='txt'>
        <h1 className='txt-color'>FAQ</h1>
        <h3 className='txt-h4'>Frequently Asked Questions!</h3>
      </div>
      {FAQ.map((item) => {
        return (
          <>
            <FaqItem key={item.id}
              question={item.question}
              answer={item.answer}
            ></FaqItem>
          </>
        )
      })}
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .txt-color{
    background-image: linear-gradient(118deg, #00f2ff 0%, #ed098e 20%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  }
  .txt-h4{
    color:white;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 776px) {
    .txt-color{
    text-align: center;
    margin-top: 2rem;
    }
    .txt-h4{
    text-align: center;
    }
  }
`

export default Faq