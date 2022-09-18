import React from "react";
import { Button, Navbar } from "react-bootstrap";
import '../components/NavBar.css';

// This component renders the Navbar of our application
export function NavBar( props ){
    return (
        <Navbar className="NavbarBg" variant="dark">
            <Navbar.Brand href="#home"> 
                <h1 style={{
                    fontWeight:"bold"
                }}>Tribes Chat</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text> 
                    <Button className="ConnectBtn rounded-pill" style={{ display: props.showButtonm, fontWeight:"bold" }} variant="success" onClick={ async () => { props.login(); }}>
                        Metamask Connected
                    </Button>
                    <div style={{ display: props.showButton === "none" ? "block" : "none" }}>
                        Signed in as: 
                        <a href="#"> 
                            { props.username }
                        </a>
                    </div>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}