import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Array from "../components/Array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();
  const onDelete = (Id) => {
    let index = Array.findIndex((x) => x.id === Id);
    Array.splice(index, 1);
    console.log(Array);

    history("/");
  };

  const handleEdit = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);

    localStorage.setItem("Age", age);
  };
  return (
    <>
      <div
        className="conatiner"
        style={{ marginLeft: "10rem", marginTop: "10rem", overflow: "hidden" }}
      >
        <div className="row">
          <div className="col-lg-9 ">
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array && Array.length > 0
                  ? Array.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.Name}</td>
                          <td>{item.Age}</td>
                          <td>
                            <Link to={"/edit"}>
                              <Button
                                className="btn-primary"
                                onClick={() =>
                                  handleEdit(item.id, item.Name, item.Age)
                                }
                              >
                                Edit
                              </Button>
                            </Link>
                            &nbsp;
                            <Button
                              className="btn-danger"
                              onClick={() => onDelete(item.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  : " No Data Available"}
              </tbody>
            </Table>
            <Link className="d-grid gap-2" to="/create">
              <Button size="lg" className="btn-success">
                Create
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
