import React, { useState, useEffect, useRef } from 'react'
import { Col, Container, Button, Row, Form, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import logo from './logo.png';
import './login.css';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../navbar/Navbar';


export default function SignupPage() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/Addprofiledata")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            <NavBar />
            <Container className="d-flex align-items-center justify-content-center con " >
                <Container className="mt-5">
                    <Row>
                        <Col className="text-center">
                            <img src={logo} alt="icon" className="iconoflogin" />
                            <h2>Alumni cell Sign page</h2><br />
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    {/* <Form.Label>Email</Form.Label> */}
                                    {/* <Form.Control type="email" ref={emailRef} required /> */}
                                    <Form.Control type="email" name="email" placeholder="Enter email" ref={emailRef} required /><br />
                                </Form.Group>
                                <Form.Group id="password">
                                    {/* <Form.Label>Password</Form.Label> */}
                                    {/* <Form.Control type="password" ref={passwordRef} required /> */}
                                    <Form.Control type="password" name="password" placeholder="Choose Password" ref={passwordRef} required /><br />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    {/* <Form.Label>Password Confirmation</Form.Label> */}
                                    {/* <Form.Control type="password" ref={passwordConfirmRef} required /> */}
                                    <Form.Control type="password" name="password" placeholder="Confirm Password" ref={passwordConfirmRef} required /><br />
                                </Form.Group>
                                {/* <Button disabled={loading} className="w-100" type="submit"> */}
                                <Button disabled={loading} className="primary btn-block btn1" type="submit" >
                                    Sign Up
                                </Button>
                            </Form>
                            <div className="w-100 text-center mt-2">
                                Already have an account? <Link to="/UserAuth">Log In</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}