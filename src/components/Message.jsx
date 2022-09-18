import React from "react";
import { Row, Card } from "react-bootstrap";

// This is a functional component which renders the individual messages
export function Message(props) {
  return (
    <Row style={{ marginRight: "0px", backgroundColor: "black" }}>
      <Card
        border="dark"
        style={{
          width: "80%",
          alignSelf: "center",
          margin: "10px 0 5px " + props.marginLeft,
          float: "right",
          right: "0px",
          backgroundColor: "rgb(75, 73, 73)",
          borderRadius:"20px"
        }}
      >
        <Card.Body>
          <h6 style={{ float: "right", color: "white" }}>{props.timeStamp}</h6>
          <Card.Subtitle style={{ color: "white" }}>
            <b>{props.sender}</b>
          </Card.Subtitle>
          <Card.Text style={{ color: "white" }}>{props.data}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}
