import React, { useContext } from "react";
import "../index.css";
import { ProductContextData } from "../context/Productcontext";
import { Link } from 'react-router-dom'

function Cards() {
  const [Productdata] = useContext(ProductContextData);
  console.log("Product Data:", Productdata);

  let renderCard = <div className="col-span-full text-center text-white text-xl">Loading Data...</div>;

  if (Array.isArray(Productdata) && Productdata.length > 0) {
    renderCard = Productdata.map((item, idx) => {
      return (
        <Link key={idx} to={`/products/${item.id}`}>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex flex-col h-full text-center">
              <img
                className="w-full h-40 object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold text-blue-400 hover:text-blue-300 line-clamp-2">
                  {item.title}
                </h3>
                <h3 className="text-lg font-bold text-white mt-2">${item.price}</h3>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded active:scale-95 transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 bg-gray-900">
      {renderCard}
    </div>
  );
}

export default Cards;
