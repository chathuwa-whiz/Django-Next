import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { 
        'Content-Type': 'application/json',
    }
})

export interface Post {
    id: number,
    title: string,
    content: string,
    created_at: string,
    updated_at: string,
}

export const postsApi = {
    // get all posts
    getPosts: () => api.get<Post[]>('/posts/'),

    // get single post
    getPost: (id: number) => api.get<Post>(`/posts/${id}/`),

    // create post
    createPost: (data: {title: string, content: string}) => api.post<Post>('/posts/', data),

    // update post
    updatePost: (id: number, data: { title: string, content: string }) => api.put<Post>(`/posts/${id}/`, data),

    // delete post
    deletePost: (id: number) => api.delete(`/posts/${id}/`),
}