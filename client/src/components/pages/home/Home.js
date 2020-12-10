import React, { Component } from 'react'

import Login from './../login/Login'
import Signup from './../signup/Signup'
import './Home.css'
import Video from './../../video/video2.mov'
// import Video from 'react-native-video';

import { Container, Row, Button, Modal } from 'react-bootstrap'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false
        }
    }

    handleModalLogin = visible => this.setState({
        showModal1: visible
    })
    handleModalSignup = visible => this.setState({
        showModal2: visible
    })
    
    render() {
        return (
            <>
                <video autoPlay='autoplay' playsInline loop style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover",  transform: "translate (-50%, -50%)", zIndex: "-1" }}>
                    <source src={Video} type="video/mp4" />
                </video>   
                
                <Container className="home">
                    
                    <Row>
                        
                        <Button onClick={() => this.handleModalLogin(true)} className="login" variant="light" size="sm">Login</Button>
                    
                        <Button onClick={() => this.handleModalSignup(true)} className= "signup" variant="outline-light" size="sm">Become a member</Button>
                        
                     </Row>
                </Container>
                
                <Modal show={this.state.showModal1} onHide={() => this.handleModalLogin(false)}>
                    <Modal.Body>
                        <Login {...this.props} setTheUser={this.props.setTheUser} closeModal={() => this.handleModalLogin(false)}/>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showModal2} onHide={() => this.handleModalSignup(false)}>
                    <Modal.Body>
                        <Signup {...this.props} closeModal={() => this.handleModalSignup(false)}/>
                    </Modal.Body>
                </Modal>
                </>
        )
    }

}

export default Home

