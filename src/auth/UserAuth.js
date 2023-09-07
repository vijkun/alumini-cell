import React, { useState, useRef } from 'react'
import { Col, Container, Button, Row, Form, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import logo from './logo.png';
import './login.css';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import NavBar from '../navbar/Navbar';
import { signInWithGoogle } from '../firebase';
import firebase from 'firebase';
import { auth } from '../firebase';

const UserAuth = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/Profile")
        } catch {
            setError("Failed to login")
        }

        setLoading(false)
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            history.push("/Addprofiledata")
        }).catch((error) => {
            setError("Failed to login")
        })
    }



    return (
        <>
            <NavBar />
            <Container className="d-flex align-items-center justify-content-center con " >
                <Container className="">
                    <Row>
                        <Col className="text-center">
                            <img src={logo} alt="icon" className="iconoflogin" />
                            <h2>Alumni cell Login page</h2><br />
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Control type="email" name="email" placeholder="Enter email" ref={emailRef} required /><br />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Control type="password" name="password" placeholder="Choose Password" ref={passwordRef} required /><br />
                                </Form.Group>
                                <Form.Group>
                                    <Button disabled={loading} className="primary btn-block btn1" type="submit">
                                        Login
                                    </Button><br /><br />
                                    <p>
                                        <Link to="/forgotPassword" style={{ textDecoration: 'none' }}>Forgot password??</Link>  Or
                                    </p>
                                    <Button className="primary btn-block btn1" onClick={signInWithGoogle}>
                                        Signin with google
                                    </Button>
                                    <br /><br />
                                </Form.Group>
                                <p>Dont have an account?<Link to="./SignupPage" style={{ textDecoration: 'none' }}>Signup here</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default UserAuth