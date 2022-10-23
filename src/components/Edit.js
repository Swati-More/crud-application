import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Array from "./Array";

function Edit() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();

  var index = Array.findIndex((x) => x.id === id);

  const handleEdit = (e) => {
    e.preventDefault();
    let a = Array[index];
    a.Name = Name;
    a.Age = Age;
    history("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("Name"));

    setAge(localStorage.getItem("Age"));
  }, []);
  return (
    <>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <FormGroup className="mb-3" controlId="formName">
          <FormControl
            type="text"
            value={Name}
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formAge">
          <FormControl
            type="text"
            value={Age}
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button
          type="submit"
          className="btn-success"
          onClick={(e) => handleEdit(e)}
        >
          Update
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default Edit;
