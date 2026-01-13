import {fetchFromUnsplash , fetchFromPEXELS} from './API/MediaApi.js'
import './index.css'

function App() {


  return (
    <>
      <div className='h-screen w-full bg-gray-950'>
        <button onClick={ async () => {
          const data = await fetchFromUnsplash('nature')
          console.log(data.results)
        }} 
        className='text-white p-4 bg-green-500 rounded-md mt-10 ml-10'>
          Fetch Photos
        </button>
        <button onClick={ async () => {
          const data = await fetchFromPEXELS('cat')
          console.log(data.videos)
        }} 
        className='text-white p-4 bg-green-500 rounded-md mt-10 ml-10'>
          Fetch Videos
        </button>
      </div>
    </>
  )
}

export default App
