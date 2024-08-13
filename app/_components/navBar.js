'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '../_context/cartContext';

const NavBar = () => {
    const { cart } = useContext(CartContext);
    const itemCount = cart.reduce((count, item) => count + 1, 0);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">
                    Shop
                </Link>
                <Link href="/cart" className="text-white">
                    Cart ({itemCount})
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
