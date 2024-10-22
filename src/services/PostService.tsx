import axios from 'axios';
import { Post } from '../interfaces/Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export class PostService {
    static async createPost(post: Post): Promise<Post> {
        const response = await axios.post(`${BASE_URL}/posts`, post);
        return response.data;
    }
}
