import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import pokeball from '../pokeball.png'
import { useSelector } from "react-redux"

export const Home = () => {
    // const [posts, setPosts] = useState({posts: []})
    const { posts } = useSelector(state => state.posts)
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => setPosts({posts: res.data.slice(0, 10)}))
    //     .catch(err => err.messege)

    // }) 

    const postList = posts.length && posts.map((post) => {
        return(
            <div className="post card" key={post.id}>
                <img src={pokeball} alt="pokeball" />
                <div className="card-content">
                    <Link to={`posts/${post.id}`}>
                        <span className="card-title red-text">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                </div>
            </div>
        )
    })

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
  
  export default Home
  