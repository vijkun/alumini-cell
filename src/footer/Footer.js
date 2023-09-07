import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './footer.css'
import imgPhone from "../Icons/phone.svg"
import link from "../Icons/link-solid.svg"
import mail from "../Icons/mail.svg"
import facebook from "../Icons/facebook.png"
import insta from "../Icons/insta.png"
import google from "../Icons/google.png"
import linkedin from "../Icons/linkedin.png"

const Footer = () => {
    return (
        <div>
            <Row className="bottom">
                <Col>
                    <div>
                        <div className="margin-container">
                            <div className="contact">
                                <h4>Contact Info</h4>
                                <p>Indian Institute of Technology Indore,<br />Khandwa Road, Simrol,<br />Indore- 453552<br />India</p>
                                <img src={imgPhone} className="icon" /><a href="tel:91-7324-306717" className=
                                    "links-of-footer"> <strong> 91-7324-306717</strong></a><a> / </a><a href="tel:91-731-2438717" className="links-of-footer" ><strong>91-731-2438717</strong></a><br />
                                <img src={link} className="icon" /><a href="http://iiti.ac.in/" className="links-of-footer" ><strong>http://iiti.ac.in/</strong>/</a><br />
                                <img src={mail} className="icon" /><a href="coordinatoralumni@iiti.ac.in" className="links-of-footer" > <strong>coordinatoralumni@iiti.ac.in</strong></a><br />
                            </div>
                            <h4>Connect Us</h4>
                            {/* <div className="icon-container">
                                <img src={facebook} className="facebook-icon" />
                                <img src={insta} className="insta-icon" />
                                <img src={google} className="facebook-icon" />
                                <img src={linkedin} className="insta-icon" />
                            </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <div className="bottom-container">
                <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                </ul>
            </div> */}
        </div>
    )
}

export default Footer
