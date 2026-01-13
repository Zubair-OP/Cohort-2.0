import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

function Hero() {
  const navigate = useNavigate();
  return (
    <>
     <Navbar />
    <div className="Home w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl font-bold">Welcome to the Home Page</h1>
      <button onClick={() => navigate('/products')} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Explore Products</button>
    </div>
     </>
  )
}
 
export default Hero
