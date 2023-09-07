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
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('check your inbox for further instructions')
        } catch {
            setError("Failed to reset password")
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
                            <h2>Forgot Password</h2><br />
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    {/* <Form.Label>Email</Form.Label> */}
                                    {/* <Form.Control type="email" ref={emailRef} required /> */}
                                    <Form.Control type="email" name="email" placeholder="Enter email" ref={emailRef} required /><br />
                                </Form.Group>
                                {/* <Button disabled={loading} className="w-100" type="submit"> */}
                                <Button disabled={loading} className="primary btn-block btn1" type="submit" >
                                    Reset Password
                                </Button>
                            </Form>
                            <div className="w-100 text-center mt-2">
                                Already have an account? <Link to="/UserAuth" style={{ textDecoration: 'none' }}>Log In</Link>
                            </div>
                            <div className="w-100 text-center mt-2">
                            <p>Dont have an account?<Link to="./SignupPage" style={{ textDecoration: 'none' }}>Signup here</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
