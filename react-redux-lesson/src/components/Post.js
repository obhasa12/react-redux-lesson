// import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/rootReducer";

export const Post = () => {
    // const [post, setPost] = useState('')
    const params = useParams()
    const { posts } = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const post = posts.find((post) => {
        let id = params.post_id
        return post.id === id
    })

    // console.log(posts)

    // useEffect(() => {
    //     let id = params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => setPost(res.data))
    //         .catch(err => console.log(err.message));
    // })
    
    const handleClick = () => {
        let id = params.post_id
        dispatch(deletePost(id))
        setTimeout(() => navigate('/'), 400)
        
    }

    const postList = post? (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
            <div className="center">
                <button className="btn grey" onClick={handleClick}>
                    Delete Post
                </button>
            </div>
        </div>
    ): (
        <div className="center">Loading post...</div>
    )
    
    return ( 
        <div className="container">
            { postList }
        </div>
     );
}
 
export default Post;