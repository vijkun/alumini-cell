import React from 'react'
import "./users.css"
import Userscards from './Userscards'
import Userdetailes from './Userdetailes'
import { useAuth } from '../contexts/AuthContext'
import { useState, useEffect } from 'react'
import db from '../firebase'
import NavBar from '../navbar/Navbar'

export default function Users() {
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

            <NavBar />
            <div className="usershome">
                <div className="userscardscontainer">
                    <div className="userstextheading">
                        <h4>User Profiles</h4>
                    </div>
                    <div className="cardscontainer">
                        {userdata.map(({ id, email, data }) => (
                            <div>
                                {/* {currentUser.email === data.username ? (<> */}
                                <Userscards
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
                                {/* </>) : (<>

                    </>)
                    } */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
