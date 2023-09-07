import React, { useState } from 'react'
import { Alert, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NavBar from '../navbar/Navbar'
import Avatar from "@material-ui/core/Avatar";
import './profile.css'
import profilebg from "../images/profile baground image.jpg"
import { Row, Col } from 'react-bootstrap'
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import db from '../firebase'
import { useEffect } from 'react'
import { Button } from '@material-ui/core'

export default function Profile({ Name, Adress, phonenumber, State, Course, pincode, Department, country, joiningyear, endingyear, username, user, id }) {
    console.log(username)
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()


    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/UserAuth')
        } catch {
            setError('Failed to signout')
        }
    }
    return (
        <>
            <NavBar />

            {currentUser ? (
                currentUser.email === username ? (
                    <div>
                        <div className="profile-cover-image">
                            <img src={profilebg} className="profile-cover-image" />
                        </div>
                        <div className="pagestrip">
                            <Row className="propage">
                                <Col md={4}>
                                    <div className="userinfonameandimage">
                                        <div className="propicinprofilecontainer">
                                            <img src={currentUser.photoURL} className="propicinprofile" />
                                        </div>
                                        <div>
                                            <div className="usernameinpropage">
                                                {Name}
                                            </div>
                                            <div className="studentdata">
                                                <p>Class of {joiningyear}-{endingyear}</p>
                                                <p>{Course}: {Department}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userinfo">
                                        <div className="headingblockipropage">
                                            <Link to="./Editprofiledata"><Button variant="contained" color="primary" className="add-prodata-open-btn">Edit or Add user information here</Button></Link>
                                        </div>
                                    </div>
                                    <div className="userinfo">
                                        <div className="headingblockipropage">
                                            <InfoIcon style={{ marginRight: "12px" }} />
                                            Contact Information
                                        </div>
                                    </div>
                                    <div className="infobox">
                                        <div className="infoline"> <ContactMailIcon style={{ marginRight: "12px" }} />{currentUser.email} </div>
                                        <div className="infoline"> <PhoneIcon style={{ marginRight: "12px" }} />{phonenumber} </div>
                                    </div>
                                    <div className="userinfo">
                                        <div className="headingblockipropage">
                                            <RoomIcon style={{ marginRight: "12px" }} />
                                            Address
                                        </div>
                                    </div>
                                    <div className="infobox">
                                        <div className="infoline">
                                            <p>{Adress} <br />
                                                {State}<br />
                                                {country}<br />
                                                {pincode}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col mg={8}>
                                    <div>
                                        <div className="userinfo">
                                            <div className="headingblockipropage">
                                                <ImportContactsIcon style={{ marginRight: "12px" }} />
                                                Summary
                                            </div>
                                        </div>
                                        <div className="infobox">
                                            <div className="infoline"> <InfoIcon style={{ marginRight: "12px" }} />Summary about user comes here</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="userinfo">
                                            <div className="headingblockipropage">
                                                <ImportContactsIcon style={{ marginRight: "12px" }} />
                                                Education
                                            </div>
                                        </div>
                                        <div className="infobox">
                                            <div className="infoline"> <InfoIcon style={{ marginRight: "12px" }} />User Education detailes comes here</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="userinfo">
                                            <div className="headingblockipropage">
                                                <ImportContactsIcon style={{ marginRight: "12px" }} />
                                                Work Experiance
                                            </div>
                                        </div>
                                        <div className="infobox">
                                            <div className="infoline"> <InfoIcon style={{ marginRight: "12px" }} />User Work Experiance comes here</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>


                ) : (
                    <>
                        <div>

                        </div>

                    </>
                )
            ) : (
                <></>
            )}

        </>

    )
}
