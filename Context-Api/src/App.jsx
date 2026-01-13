import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import CardsDetails from "./component/CardsDetails"
function App() {

  return (
    <>
     <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<CardsDetails />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
