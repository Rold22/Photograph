import React, { useState } from 'react'
import { styled } from 'styled-components'
import { img } from '../data'
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai'

const RightGallery = () => {
const initialCategory = 'women';
  
const category = useSelector((state) => state.data.category || initialCategory);
const filteredData = img.filter((item) => item.cat === category);

//Gallery Img
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('')
  
  const handleImgClick = (imgFile) => {
    setSelectedImg(imgFile);
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
  
  return (
    <Wrapper>
        {isOpen && (
        <div className='modal'>
            <span className='close-btn' onClick={handleCloseModal}>
              <AiOutlineClose/>
            </span>
          <div className='glass'>
            <img src={selectedImg} alt="modal" className='modal-img' />
          </div>
          </div>
      )}
      <div className='gallery-section'>
        <div className='box-section'>
          {filteredData.map((item) => (
            <div key={item.id} className='cat-flex'>
              <img src={item.img}
                className="img"
                alt={item.cat}
                onClick={() => handleImgClick(item.img)}
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 80vh;
width: 100%;
background-color: rgba(7, 63, 63, 0);
.box-section{
  margin-top: 3rem;
  display: flex;
  flex-basis: 25%;
  flex-wrap: wrap;
  gap: 1rem
  
}
.img{
  width: 200px;
  height:300px;
  cursor: pointer;
}
//IMG POPUP
.modal{
  background-color: #4b0d5267;
  backdrop-filter: blur(1px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
.glass{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

}
.modal-img{
  height: 550px;
  width: 460px;
  object-fit: cover/center;
}
.close-btn{
  color: white;
  font-size: 2rem;
  float: right;
}
@media screen and (max-width: 776px) {
  .cat-flex{
    display: flex;
  }
  .box-section{
    margin-top: -2rem;
    position: relative;
  }
  .img{
  width: 100px;
  height:200px;
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 10px;
  z-index: -100;
}
@media screen and (max-width: 500px) {
  .img{
    margin-left: 2.5rem;
  }
  .box-section{
    padding-bottom: 2rem;
  }
}
}
`

export default RightGallery