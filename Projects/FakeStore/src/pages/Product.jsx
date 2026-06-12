import React from "react";

const Products = () => {
  const product = {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    title: "Premium Sports Shoes",
    description:
      "Comfortable and stylish sports shoes perfect for daily wear and running.",
    rating: 4.5,
    reviews: 245,
    price: 1999,
    originalPrice: 2999,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />

        {/* Product Details */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h2>

          <p className="text-sm text-gray-600 mt-2">{product.description}</p>

          {/* Ratings */}
          <div className="flex items-center mt-3">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
              {product.rating} ★
            </span>
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviews} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price}
            </span>

            <span className="text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>

            <span className="text-green-600 font-medium">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100,
              )}
              % Off
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-2">
            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg">
              Add to Cart
            </button>

            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
