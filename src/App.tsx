import React from 'react';
import './App.css';
import PostForm from './components/PostForm';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Create a Post</h1>
            <PostForm />
        </div>
    );
};

export default App;
