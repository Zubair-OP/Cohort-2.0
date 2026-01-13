import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContextData } from "../context/Productcontext";

function CardsDetails() {
    const { id } = useParams();
    const [productDataDetails] = useContext(ProductContextData);

    let item = null;
    if (Array.isArray(productDataDetails) && productDataDetails.length > 0) {
        item = productDataDetails.find((prod) => prod.id === parseInt(id));
    }

    if (!item) {
        return <div className="text-white text-center mt-10">Product not found!</div>;
    }
    
  return (
    <div className='bg-gray-700 w-full h-screen text-white flex items-center justify-center'>
      <div className="max-w-3xl mx-auto p-8 bg-gray-900 text-white rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            className="w-full h-96 object-cover rounded-lg"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-400 mb-4">
              {item.title}
            </h1>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <p className="text-2xl font-bold text-white mb-2">Price: ${item.price}</p>
            <p className="text-lg text-yellow-400">Rating: {item.rating?.rate} ⭐ ({item.rating?.count} reviews)</p>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg font-semibold active:scale-95 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default CardsDetails
