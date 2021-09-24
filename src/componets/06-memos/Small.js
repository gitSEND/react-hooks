import React, { memo } from 'react'

// memo sirve para memorizar algo y si sus properties cambia se volverá a renderizar
// caso contrario utilizar para version memoriza para redibujar algo
export const Small = memo(({ value }) => {
  console.log('Me volví a llama :(');
  return (
    <small>{value}</small>
  )
})
