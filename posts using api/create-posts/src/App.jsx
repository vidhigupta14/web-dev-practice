import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [post, setPost] = useState([])

  async function fetchPosts() {
    const a = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await a.json()
    setPost(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <h1>Posts</h1>
      <div className='post-container'>
        {post.map((data) => (
          <div className='post-card' key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
