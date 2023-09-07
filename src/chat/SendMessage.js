import React,{useState} from 'react'
import firebase from '../firebase';
import {auth} from '../firebase'
import db from '../firebase'
import { Input,Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';



export default function SendMessage ({scroll}) {
    const [msg,setMsg]=useState('')
    async function sendMessage(e){
        e.preventDefault()
        const{uid,photoURL}=firebase.auth().currentUser;

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })
        setMsg('')
        scroll.currentUser.scrollIntoView({behavior : 'smooth'})
    }
     return(
         <div>
            <form onSubmit={sendMessage}>
                <input value={msg} onChange={(e)=>setMsg(e.target.value)}    placeholder="Message..">
                    <Button>
                      Send
                    </Button>
                </input>
            </form>
         </div>
     );
}
