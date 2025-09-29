import React from 'react'

function ProductCard() {
  const image = "https://media.istockphoto.com/id/92367660/photo/fruit-basket.jpg?s=2048x2048&w=is&k=20&c=kH4YtE-TYhbag9UF4LrCC-vmzPjv3pjPhRO5tJL-IUQ=";
  const name = "Fresh Apple";
  const price = 130;
  const discount = 20;
  const discountedPrice = price - (price * discount / 100);
  const rating = 4;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col items-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg mb-2" />
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-green-700">₹{discountedPrice}</span>
        {discount > 0 && (
          <span className="text-sm line-through text-gray-400">₹{price}</span>
        )}
        {discount > 0 && (
          <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">-{discount}%</span>
        )}
      </div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-2 transition" >
        Add to Cart
      </button>
      <div className="text-base font-semibold text-gray-800 mb-1">{name}</div>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
      </div>
    </div>
  )
}

export default ProductCard