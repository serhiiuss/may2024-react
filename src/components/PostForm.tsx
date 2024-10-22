import React from 'react';
import { useForm } from 'react-hook-form';
import { Post } from '../interfaces/Post';
import { PostService } from '../services/PostService';

const PostForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Post>();

    const onSubmit = async (data: Post) => {
        try {
            const postData = { ...data, userId: 1 };
            const response = await PostService.createPost(postData);
            console.log('Post created successfully:', response);
            reset();
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    {...register('title', {
                        required: 'Title is required',
                        minLength: { value: 3, message: 'Title must be at least 3 characters long' }
                    })}
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div>
                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    {...register('body', {
                        required: 'Body is required',
                        minLength: { value: 10, message: 'Body must be at least 10 characters long' }
                    })}
                />
                {errors.body && <p>{errors.body.message}</p>}
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;
