'use client'

import { useState, useEffect } from 'react'
import { postsApi, Post } from '@/lib/api'

export default function PostList() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>('')

    const fetchPosts = async () => {
        try {
            setLoading(true)
            const response = await postsApi.getPosts()
            setPosts(response.data)
        } catch (error) {
            setError('Failed to fetch posts')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Posts</h2>
            {posts.length === 0 ? (
                <p className="text-gray-500">No posts found.</p>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <div key={post.id} className="border p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700 mb-2">{post.content}</p>
                            <p className="text-sm text-gray-500">
                                Created: {new Date(post.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
