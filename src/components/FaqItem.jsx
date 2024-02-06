import React,{useState} from 'react'
import { styled } from 'styled-components';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Wrapper>
    <div className='faq-item'>
      <div className='question' onClick={handleToggle}>
          {question}
          <div className='underline'></div>
        </div >
        <div className='aw'>
        {isOpen && <div className='answer'>{answer}</div>
        }
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.faq-item{
  color:white;
  }
  .question{
    font-size: 1.5rem;
    text-transform: capitalize;
    cursor: pointer;
  }
  .answer{
    width: 600px;
    word-wrap: break-word;
    margin-bottom: 1rem;
  }
  .aw{
    margin-top: 0.5rem;
    margin-bottom: 1.25rem;
  }
  .underline{
    width: 600px;
    height: 2px;
    background: linear-gradient(118deg, #cb0c75 0%, #ff14e0 76%);
  }
    @media screen and (max-width: 776px) {
      .question{
        font-size: 1rem;
        text-align:center;
      }
      .answer{
        text-align: center;
        width: 200px;
        word-wrap: break-word;
        margin-left: auto;
        margin-right: auto;
        
      }
  }
`
export default FaqItem