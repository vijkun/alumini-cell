import { Button } from 'bootstrap'
import React from 'react'
import { storage } from '../../firebase';
import db from '../../firebase';

export default function Post({ id, username, profileUrl, photoUrl, caption, comments, user }) {

    const deletePost = () => {
        //delete post
        db.collection("posts")
            .doc(id)
            .delete()
            .then(function () {
                console.log("Document successfully deleted!");
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
        };

    return (
        <div className="post">
            <div className="headerforpost">
                <div className="headerforpostleftpart">
                    <img src={profileUrl} className="postpropic" />
                    <p className="postusername">{username}</p>
                </div>
                {/* <button className="postdeletebtn" onClick={deletePost}>
                    Delete
                </button> */}
                {user ? (
                    user.email.toLowerCase() === username.toLowerCase() ? (
                        
                        <button
                        className="postdeletebtn"
                            // aria-controls="simple-menu"
                            // aria-haspopup="true"
                            onClick={deletePost}
                        >
                            Delete
                        </button>
                    ) : (
                        <></>
                    )
                ) : (
                    <></>
                )}
            </div>
            <div className="centerofpost">
                <img src={photoUrl} className="postimage" />
            </div>
            <div className="postbottom" >
                <p><strong style={{ marginRight: "5px" }}>{username}</strong>{caption}</p>
            </div>
            {/* {comments ? comments.map((comment) =>
                <Comment username={comment.username} caption={comment.comment} />) : <> </>} */}
        </div>
    )
}
