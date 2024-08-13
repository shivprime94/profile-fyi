'use client';
import { useContext } from 'react';
import { CartContext } from '../_context/cartContext';

const CartItem = ({ item }) => {
    const { updateQuantity, removeItem } = useContext(CartContext);

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-fit" />
            <div className="flex-1 ml-4">
                <h4 className="text-lg font-semibold px-2">{item.title}</h4>
                <p className="text-gray-700 px-2">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                    <h3 className='px-2'>Quantity:</h3>
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-300 px-2 py-1 rounded-l"
                    >
                        -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-300 px-2 py-1 rounded-r"
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 ml-4"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
