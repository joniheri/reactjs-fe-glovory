import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

// import config
import { APIExp } from "../config/Api";

export default function About() {
  const [todos, setTodos] = useState([]);

  // loadTodos
  const loadTodos = async () => {
    try {
      const response = await APIExp.get("/todos");
      setTodos(response.data.datas);
      console.log("API Example : ", APIExp);
      console.log("ResponseDataMusic:", response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTodos();
  }, []);
  // endLoadTodos
  return (
    <Container fluid>
      <h1>This Is About Page.</h1>
      <div>
        {todos?.map((dataTodos, index) => (
          <div>
            <p>ID : {dataTodos.id}</p>
            <p>Judul : {dataTodos.title}</p>
            <p>Tahun Terbit : {dataTodos.publicationYear}</p>
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
}
