'use client';
import { useContext, useState } from 'react';
import { CartContext } from '../_context/cartContext';
import Notification from './notification';
const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setShowNotification(true);
    };

    return (
        <div className="p-4 flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out bg-white">
            <img src={product.image} alt={product.title} className="w-full h-56 object-fit" />
            <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex-grow">{product.title}</h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <button
                    onClick={handleAddToCart}
                    className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    Add to Cart
                </button>
            </div>

            <Notification
                message={`${product.title} added to cart`}
                show={showNotification}
                onClose={() => setShowNotification(false)}
            />
        </div>
    );
};


export default ProductCard;
