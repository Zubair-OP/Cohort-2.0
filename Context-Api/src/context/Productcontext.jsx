import React, { useState , useEffect } from 'react'
import { createContext } from 'react'
import { getAllProductData } from '../api/Api'

const ProductContextData = createContext()

const Productcontext = ({ children }) => {
  
  const [Product, setProduct] = useState([])

  const getdata = async () => {
    setProduct(await getAllProductData())
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <ProductContextData.Provider value={[Product, setProduct]}>
      {children} 
    </ProductContextData.Provider>
  )
}

export default Productcontext
export { ProductContextData }


