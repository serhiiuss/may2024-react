import React, { useEffect, useState } from 'react';


interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
}


const Product = ({ product }: { product: ProductType }) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <img src={product.thumbnail} alt={product.title} width="100" />
        </div>
    );
};


const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h2>Products List</h2>
            <div>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
