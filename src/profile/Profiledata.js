import React from 'react'
import Profile from './Profile'
import { useAuth } from '../contexts/AuthContext'
import { useState, useEffect } from 'react'
import db from '../firebase'

export default function Profiledata() {
    const { currentUser } = useAuth()
    const [userdata, setUserdata] = useState([])

    useEffect(() => {
        // this is where the code runs
        db.collection("userinfo")
            .onSnapshot((snapshot) => {
                setUserdata(snapshot.docs.map((doc) => ({ id: doc.id, email: doc.username, data: doc.data() })));
            });
    }, []);

    return (
        <div>
            {userdata.map(({ id, email, data }) => (
                <div>
                    {currentUser.email === data.username ? (<>
                        <Profile
                            // key={id}
                            // id={id}
                            Name={data.Name}
                            Adress={data.Adress}
                            phonenumber={data.phonenumber}
                            State={data.State}
                            Course={data.Course}
                            pincode={data.pincode}
                            Department={data.Department}
                            country={data.country}
                            joiningyear={data.joiningyear}
                            endingyear={data.endingyear}
                            boola={data.boola}
                            boolb={data.boolb}
                            username={data.username}
                            user={currentUser}
                        />
                    </>) : (<>
                        
                    </>)
                    }
                </div>
            ))}
            {/* {userdata.map(({ id, data }) => (
                <Profile
                    key={id}
                    id={id}
                    Name={data.Name}
                    Adress={data.Adress}
                    phonenumber={data.phonenumber}
                    State={data.State}
                    Course={data.Course}
                    pincode={data.pincode}
                    Department={data.Department}
                    country={data.country}
                    joiningyear={data.joiningyear}
                    endingyear={data.endingyear}
                    boola={data.boola}
                    boolb={data.boolb}
                    username={data.username}
                    user={currentUser}
                />
            ))} */}
        </div>
    )
}
