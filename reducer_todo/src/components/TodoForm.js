import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export function TodoForm(props) {
  const [form, setForm] = useState("");

  return (
    <Form
      className="todo-form"
      onSubmit={e => {
        e.preventDefault();
        props.addTodo(form);
        setForm("");
      }}
    >
      <FormGroup>
        <Input
          name="todo"
          value={form}
          onChange={e => {
            setForm(e.target.value);
          }}
          placeholder="Add a todo"
        />
      </FormGroup>
      <Button type="submit">Add Todo</Button>
    </Form>
  );
}
