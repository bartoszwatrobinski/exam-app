import Title from '../Components/Title'
import AddPost from '../Components/AddPost'
import React, { useState, useEffect } from 'react';
import { db } from "../Components/config";


export default function HelpPage() {

    function Questions(){
        return (
        <div>

        </div>
        )
    }

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
        .collection("Forums")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setPosts(getPostsFromFirebase);
            setLoading(false);
        });
        return () => subscriber();
    });

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

    console.log(posts);
    return (
            <div className="HelpPage">
                <Title Title="Forum"/>
                <div className="postContainer">
                {posts.length > 0 ? (
                    posts.map((post) =>
                    <div className="ForumDisplay">
                        {/* <h1>Post: {post.PostID}</h1> */}
                        <h2>{post.input}<br/></h2>
                        <h2>From: {post.username}</h2> 
                    </div>
                )
            ) : (
                <h2>Nothing here.</h2>
            )}
                </div>
                <AddPost />
            </div>
    )
}


