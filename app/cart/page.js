'use client';
import { useContext, useState } from 'react';
import CartItem from '../_components/cartItem';
import { CartContext } from '../_context/cartContext';
import calculatePrice from '../_utils/calculatePrice';
import Notification from '../_components/notification';

const CartPage = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [showNotification, setShowNotification] = useState(false);

    if (cart.length === 0) {
        if (showNotification) {
            return <p className="text-center text-xl mt-10 text-gray-600">Thank you for the purchase.</p>;
        }
        return <p className="text-center text-xl mt-10 text-gray-600">Your cart is empty.</p>;
    }

    const { subtotal, discount, total } = calculatePrice(cart);
    const handleCheckout = () => {
        setShowNotification(true);
        clearCart();
    };

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <div className="space-y-4">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className="mt-6 p-4 border-t">
                <div className="flex justify-between text-lg font-medium text-gray-700">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-700">
                    <span>Discount:</span>
                    <span>-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 mt-2">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
                >
                    Checkout
                </button>
            </div>

            <Notification
                message="You have successfully checked out!"
                show={showNotification}
                onClose={() => setShowNotification(false)}
            />
        </div>
    );
};

export default CartPage;
