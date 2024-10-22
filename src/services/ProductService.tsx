import axios from 'axios';
import { ProductResponse } from '../interfaces/Product';

const BASE_URL = 'https://dummyjson.com';

export class ProductService {
    static async fetchProducts(page: number, limit: number): Promise<ProductResponse> {
        const skip = (page - 1) * limit;
        const response = await axios.get<ProductResponse>(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
        return response.data;
    }
}
