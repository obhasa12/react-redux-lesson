import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
    const [post, setPost] = useState('')
    const params = useParams()
    useEffect(() => {
        let id = params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => setPost(res.data))
            .catch(err => console.log(err.message));
    })
    
    const postList = post? (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
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