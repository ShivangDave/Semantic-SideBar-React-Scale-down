import React from 'react';

const Main = (props) => {
  return (
    <div
      className="Main"
      id={'main'}
      onMouseLeave={(e)=>{
        props.handleSlide(e,true)
      }}
      onMouseEnter={(e)=>{
        props.handleSlide(e,false)
      }}>
    </div>
  )
}
export default Main;
