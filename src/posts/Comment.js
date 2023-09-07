import React from 'react'
import db from '../firebase'

export default function Comment({username, caption}) {
    return (
        <div className="comment" >
            <p><strong style={{marginRight:"5px"}}>{username}</strong>{caption}</p>
        </div>
    )
}
