import React from 'react'
import NavBar from '../navbar/Navbar'
import CreateAnnouncement from './CreateAnnouncement'
import { useAuth } from '../contexts/AuthContext'
import "../posts/Posts.css"
import Announcement from './Announcement'
import { useState, useEffect } from 'react'
import db from '../firebase'
import Footer from '../footer/Footer'


const Postspage = () => {
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
            <NavBar />
            <div className="posts">
                <div>
                    {!!currentUser ? (
                        <>
                            <div className="createpostinpostspage">
                                <CreateAnnouncement />
                            </div>
                        </>
                    ) : (
                        <>
                            <p>signin to create posts or any announcements</p>
                        </>
                    )}
                    <div className="postsbox">
                        <div className="postinposts ">
                            {posts.map(({ id, post }) => (
                                <Announcement
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
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postspage