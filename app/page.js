'use client';
import { useEffect, useState } from 'react';
import ProductCard from './_components/productCard';
import LoadingPage from './_components/loading';
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
			{loading ? <LoadingPage /> : products.map((product) => <ProductCard key={product.id} product={product} />
			)}
		</div>
	);
};

export default Home;
