import React, { useRef } from 'react'
import '../03-example/example.css'

export const FocusScreen = () => {
  // useRef para mantener una referencia mutable
  const inputRef = useRef()
  

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }
  
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr></hr>

      <input 
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      />

      <button className="btn btn-outline-primary mt-3"
        onClick={handleClick}
      >Focus</button>
    </div>
  )
}
