import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/features/CounterSlice.js'

function App() {

  const dispatch = useDispatch()
  const selecter = useSelector((state)=>state.counter.value)

  return (
    <>
      <h1>{selecter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(50))}>Increment by Amount</button>
    </>
  )
}

export default App
