import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Announcementsforhome from './Announcementsforhome'
import db from '../../firebase'



const Announcementsforhomedb = () => {
    const { currentUser } = useAuth()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // this is where the code runs
        db.collection("announcements").orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
            });
    }, []);

    return (
        <>
            <div className="posts">
                <div>
                    <div className="postsbox">
                        <div className="postinposts ">
                            {posts.map(({ id, post }) => (
                                <Announcementsforhome
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

export default Announcementsforhomedb