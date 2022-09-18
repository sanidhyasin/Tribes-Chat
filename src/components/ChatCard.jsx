import React from "react";
import { Row, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ChatCard.css'

// This is a function which renders the friends in the friends list
export function ChatCard( props ){
    return (
        <Row style={{ marginRight:"0px",cursor:"pointer" }}>
            <Card border="dark" style={{ width:'100%', alignSelf:'center', marginLeft:"15px", backgroundColor:"black" }} onClick={ () => { props.getMessages( props.publicKey ); }}>
              <Card.Body className="card1">
                  <Card.Title className="CardTitle"> { props.name } </Card.Title>
                  <Card.Subtitle className="CardTitle"> { props.publicKey.length > 20 ? props.publicKey.substring(0, 20) + " ..." : props.publicKey } </Card.Subtitle>
              </Card.Body>
            </Card>
        </Row> 
    );
}