import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/comments">Comments</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
            </Routes>
        </Router>
    );
};

export default App;
