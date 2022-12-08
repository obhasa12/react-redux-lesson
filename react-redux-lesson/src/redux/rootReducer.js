import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
}

export const postSlice = createSlice({
    name: 'posts',
    initialState, 
    reducers: {
        deletePost: (state, action) => {
            const posts = state.posts
            const id = action.payload
            let newPosts = posts.filter((post) => post.id !== id)

            return {
                posts: newPosts
            }
        }
    }
}
)

export const { deletePost, dummyPost } = postSlice.actions
export default postSlice.reducer
