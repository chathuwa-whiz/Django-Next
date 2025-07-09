'use client'

import { useState } from "react"
import { postsApi } from "@/lib/api"

interface PostFormProps {
    onPostCreated: () => void
}

export default function PostForm({ onPostCreated }: PostFormProps) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!title || !content) return

        try {
            setLoading(true)
            await postsApi.createPost({ title, content })
            setTitle('')
            setContent('')
            onPostCreated()
        } catch (error) {
            console.error('Failed to create post: ', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg">
            <h2 className="text-xl font-bold">Create New Post</h2>

            <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div>
                <label htmlFor="content" className="block text-sm font-medium mb-1">
                    Content
                </label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
                {loading ? 'Creating...' : 'Create Post'}
            </button>
        </form>
    )
}
