import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Postsforhome from './Postsforhome'
import { useState, useEffect } from 'react'
import db from '../../firebase'


const Postsforhomedb = () => {
    const { currentUser } = useAuth()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // this is where the code runs
        db.collection("posts").orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
            });
    }, []);

    return (
        <>
            <div className="posts">
                <div>
                    {/* {!!currentUser ? (
                        <>
                            <div className="createpostinpostspage">
                                <CreatePost />
                            </div>
                        </>
                    ) : (
                        <>
                            <p>signin to create posts or any announcements</p>
                        </>
                    )} */}
                    <div className="postsbox">
                        <div className="postinposts ">
                            {posts.map(({ id, post }) => (
                                <Postsforhome
                                    key={id}
                                    id={id}
                                    profileUrl={post.profileUrl}
                                    username={post.username}
                                    photoUrl={post.photoUrl}
                                    caption={post.caption}
                                    comments={post.comments}
                                    user={currentUser}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postsforhomedb
