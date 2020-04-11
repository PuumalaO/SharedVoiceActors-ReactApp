import React from "react";
import { ListGroup, Button, Image, Col, Row } from "react-bootstrap";
import "../styles/searchResults.css";

export default function SearchResults(props) {
  const results = props.results.map((result) => (
    <ListGroup.Item action>
      <Row>
        <Col md={1} xs={3}>
          <Image src={result.image_url} thumbnail />
        </Col>
        <Col className={"titleContainer"} md={9} xs={6}>
            <div className={"title"}>{result.title}</div></Col>
        <Col className={"buttonContainer"} md={2} xs={2}>
          <Button
            className={"selectButton"}
            onClick={() => {
              props.callback(result, 1);
            }}
          >
            Select
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  ));
  if (props.hide || props.results.length === 0) {
    return null;
  } else {
    return (
      <div>
        <ListGroup>{results}</ListGroup>
      </div>
    );
  }
}
