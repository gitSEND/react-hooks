import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('Hola!"!"!');
  }, []);

  useEffect(() => {
    // console.log('formState...!!!');
  }, [formState]);

  useEffect(() => {
    // console.log('email cambio...!!!');
  }, [email]);


  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }



  return (
    <>
      <h1>UseEffect</h1>
      <hr></hr>

      <div className="form-group mb-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {
        name === '123' && <Message />
      }

    </>
  )
}
