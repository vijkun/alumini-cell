import React,{useState,useEffect,useRef} from 'react'
import NavBar from '../navbar/Navbar'
import db from '../firebase'
import { auth } from '../firebase'
import SendMessage from './SendMessage'
import { useAuth } from '../contexts/AuthContext'






export default function Chat() {
    const {currentUser}=useAuth()
    const scroll=useRef()
    const [messages,setMessages]=useState([]);

    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').onSnapshot=(snapshot=>{
            setMessages=snapshot.doc.map((doc)=>{data: doc.data()}
            )})
    },[])
    return (
        <div>
            <NavBar />
            <div className="msgs">
            Chat goes her
            {messages.map((id,text,photoURL)=>{
                <div>
                {!!currentUser?(
                    <div>
                    <div key={id} className={`msg $ uid === auth.currentUser.uid ? 'sent' : 'received'`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    <SendMessage scroll={scroll} />
                   <div ref={scroll}></div>   
                    </div>
                ):(<div></div>)}
            </div>
                   
            })}
            </div>
        </div>  
    )
}