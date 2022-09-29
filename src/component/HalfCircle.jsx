import React from 'react'

const HalfCircle = (props) => {
  return (
    <div>
      <div style={{height : "1px"}}></div>
      <svg height={props.height} width="100vw">
        <ellipse cx="32vw" cy="0vw" rx="37vw" ry= {props.height} fill='#CCE500' />
      </svg> 
    </div>
  )
}
//32 for home
//27.5 for ride delivery

export default HalfCircle