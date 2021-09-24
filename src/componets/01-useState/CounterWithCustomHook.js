import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>CounterWithCustomHook: {state}</h1>
      <hr></hr>

      <button onClick={() => increment(2)} className="btn btn-primary">Inc</button>
      <button onClick={() => decrement(2)} className="btn btn-danger">Dec</button>
      <button onClick={() => reset()} className="btn btn-warning">Res</button>
    </>
  )
}
