import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Array from "./Array";

function Create() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const history = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    let newId = Array.length + 1 + "";
    let a = Name,
      b = Age;
    Array.push({ id: newId, Name: a, Age: b });
    console.log("array", Array);
    history("/");
  };

  return (
    <>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <FormGroup className="mb-3" controlId="formName">
          <FormControl
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formAge">
          <FormControl
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button type="submit" className="btn-success" onClick={handleCreate}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Create;
