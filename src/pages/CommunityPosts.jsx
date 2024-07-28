import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunityPosts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: 'suggestion',
        user: '', // Assume user ID is available
    });
    const [error, setError] = useState('');
    const [view, setView] = useState('view');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/posts/all');
            setPosts(res.data);
        } catch (error) {
            setError('Failed to fetch posts');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (view === 'add') {
                console.log(formData);
                await axios.post('http://localhost:3000/api/posts/add', formData);
            } else if (view === 'update') {
                await axios.put(`http://localhost:3000/api/posts/update/${selectedPost._id}`, formData);
            }
            fetchPosts();
            setView('view');
        } catch (error) {
            setError('Failed to submit post');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/posts/delete/${id}`);
            fetchPosts();
        } catch (error) {
            setError('Failed to delete post');
        }
    };

    const handleEdit = (post) => {
        setSelectedPost(post);
        setFormData({
            title: post.title,
            content: post.content,
            category: post.category,
            user: post.user._id,
        });
        setView('update');
    };

    return (
        <div className="p-8">
            <h2 className="mb-4 text-xl font-semibold">Community Posts</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <div className="mb-4">
                <button onClick={() => setView('view')} className="mr-2 btn btn-primary">View Posts</button>
                <button onClick={() => setView('add')} className="mr-2 btn btn-primary">Add Post</button>
            </div>
            {view === 'view' && (
                <div>
                    <h3 className="mb-4 text-lg font-semibold">All Posts</h3>
                    <ul>
                        {posts.map((post) => (
                            <li key={post._id} className="mb-4">
                                <div className="p-4 border rounded-md">
                                    <h4 className="text-lg font-bold">{post.title}</h4>
                                    <p>{post.content}</p>
                                    <p className="italic">Category: {post.category}</p>
                                    <button onClick={() => handleEdit(post)} className="mr-2 btn btn-primary">Edit</button>
                                    <button onClick={() => handleDelete(post._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {(view === 'add' || view === 'update') && (
                <div>
                    <h3 className="mb-4 text-lg font-semibold">{view === 'add' ? 'Add Post' : 'Update Post'}</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Content</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            >
                                <option value="suggestion">Suggestion</option>
                                <option value="complain">Complain</option>
                                <option value="idea">Idea</option>
                            </select>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                            >
                                {view === 'add' ? 'Add Post' : 'Update Post'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CommunityPosts;
