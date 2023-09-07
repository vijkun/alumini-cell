import React from 'react'
import { Form } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import NavBar from '../navbar/Navbar'
import FloatingLabel from "react-bootstrap-floating-label";
import { Button } from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from "react-router";

export default function Addprofiledata() {
    const [name1, setName1] = useState("")
    const [phonenumber1, setPhonenumber1] = useState("")
    const [course1, setCourse1] = useState("")
    const [department1, setDepartment1] = useState("")
    const [joiningyear1, setJoiningyear1] = useState("")
    const [adress1, setAdress1] = useState("")
    const [state1, setState1] = useState("")
    const [pincode1, setPincode1] = useState("")
    const [country1, setCountry1] = useState("")
    const [endingyear1, setEndingyear1] = useState("")
    const { currentUser } = useAuth()
    const history = useHistory()

    const skip = () => {
        history.push("/Profile")
    }
    function handleSubmit(e) {
        e.preventDefault()
        db.collection("userinfo").doc(currentUser.email).set({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            Adress: adress1,
            Course: course1,
            Department: department1,
            Name: name1,
            State: state1,
            country: country1,
            endingyear: endingyear1,
            joiningyear: joiningyear1,
            phonenumber: phonenumber1,
            pincode: pincode1,
            username: currentUser.email,
            boola: true,
            boolb: true
        }, (error) => {
            console.log(error)
        })
        history.push("/Profile")

        // setImage(null);
    }



    return (
        <div className="adddetailsbody">
            <NavBar />
            <div className="first">
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Row className="detailsboxcontainer">
                            <div className="headingblockipropage">
                                <h3>Contact Information</h3>
                            </div>
                            <Col sm={6}>

                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => { setName1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="phone number" onChange={(e) => { setPhonenumber1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="Course/Degree" onChange={(e) => { setCourse1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="Division/Department" onChange={(e) => { setDepartment1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="Year of joining" onChange={(e) => { setJoiningyear1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="Address" onChange={(e) => { setAdress1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="State" onChange={(e) => { setState1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="pincode" onChange={(e) => { setPincode1(e.target.value) }} required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="Country" onChange={(e) => { setCountry1(e.target.value) }}required /><br />
                                    </Form.Group>
                                </div>
                                <div className="detailsbox">
                                    <Form.Group >
                                        <Form.Control type="text" placeholder="Expected year of graduation" onChange={(e) => { setEndingyear1(e.target.value) }}required /><br />
                                    </Form.Group>
                                </div>
                            </Col>
                            <div className="add-prodata-submitbtn-container">
                                <Button type="submit" variant="contained" color="primary" className="add-prodata-submitbtn">Submit</Button>
                            </div>
                            <div className="add-prodata-submitbtn-container">
                                <Button type="submit" onClick={skip} variant="contained" color="primary" className="add-prodata-submitbtn">if already submitted, skip</Button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}