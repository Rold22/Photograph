import React from 'react'
import { styled } from 'styled-components'
import { setCategory } from '../featured/CatSlice';
import { useDispatch } from 'react-redux';

const LeftGallery = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryName) => {
    dispatch(setCategory(categoryName));

  };
  return (
    <Wrapper>
      
        <div className='cat-section'>
        <div className='section-center'>
          <button className='btn' onClick={() => handleCategoryClick('women')}>
            women
          </button>
        </div>
        <div className='section-center'>
          <button className='btn' onClick={() => handleCategoryClick('man')}>
            man
          </button>
        </div>
        <div className='section-center'>
          <button className='btn' onClick={() => handleCategoryClick('nature')}>
            nature
          </button>
        </div>
        <div className='section-center'>
          <button className='btn' onClick={() => handleCategoryClick('animal')}>
            animal
          </button>
        </div>
        <div className='section-center'>
          <button className='btn' onClick={() => handleCategoryClick('travel')}>
            travel
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.cat-section{
  position: relative;
  margin-left: 2rem;
  padding-top: 3rem;
}
.btn{
  height: 40px;
  width: 150px;
  border: none;
  background: #28293cd1;
  backdrop-filter: blur(5px);
  color: white;
  cursor: pointer;
  text-transform: uppercase;
}
.cat-btn{
  color: #efefef;
}
.section-center{
  padding-bottom: 1rem;
}
@media screen and (max-width: 776px) {
  .cat-section{
    display: grid;
    grid-template-columns: 1fr 1fr ;
  }
.btn{
}
}
`
export default LeftGallery