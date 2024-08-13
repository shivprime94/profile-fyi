'use client';
import { useEffect, useState } from 'react';
import ProductCard from './_components/productCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading ? <p className="text-center text-xl mt-10">Loading...</p> : products.map((product) => <ProductCard key={product.id} product={product} />
      )}
    </div>
  );
};

export default Home;
