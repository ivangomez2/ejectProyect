import React from 'react'
import Methods from './Methods'

const MethodList = ({productos}) => {
  console.log(productos);
  return (
    <div>
      {productos.length > 0 ? productos.map((prods,index) => <Methods key={index} state={prods}/>) :<></>}
    </div>
  )
}

export default MethodList