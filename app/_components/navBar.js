'use client';
import React from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../_context/cartContext';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between py-4">
                <Link href="/">
                    <p className="text-2xl font-bold text-blue-600">E-Shop</p>
                </Link>
                <div className="space-x-6">
                    <Link href="/cart">
                        <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Cart({itemCount})</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
