import React, { useEffect, useState } from 'react';
import { Product } from '../interfaces/Product';
import { ProductService } from '../services/ProductService';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await ProductService.fetchProducts(currentPage, itemsPerPage);
                setProducts(data.products);
                setTotalPages(Math.ceil(data.total / itemsPerPage));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))}
                </ul>
            )}
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
          Page {currentPage} of {totalPages}
        </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;
