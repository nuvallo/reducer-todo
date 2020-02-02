import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export function Todo(props) {
  return (
    <Card
      className={props.item.completed ? "complete" : ""}
      onClick={e => {
        e.preventDefault();
        props.handleComplete(props.item.id);
      }}
    >
      <CardBody>
        <CardTitle>{props.item.todo}</CardTitle>
      </CardBody>
    </Card>
  );
}
