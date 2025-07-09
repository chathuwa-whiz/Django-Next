'use client'

import { useState } from "react"
import PostList from "@/components/PostList"
import PostForm from "@/components/PostForm"

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handlePostCreated = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Django + Next.js Full-Stack App
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <PostForm onPostCreated={handlePostCreated} />
        </div>

        <div>
          <PostList key={refreshKey} />
        </div>
      </div>
    </main>
  );
}
