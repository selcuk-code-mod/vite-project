import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  const ListItem = styled.li`
    cursor: pointer;
  `;

  return (
    <>
      <InputGroup className="mb-2">
        <Form.Control
          aria-label="Hedef"
          aria-describedby="basic-addon2"
          className="form"
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          value={todoInput}
        />
        <Button
          onClick={addTodo}
          className="btn btn-primary"
          id="button-addon2"
        >
          Ekle
        </Button>
      </InputGroup>
      <ul>
        {todos.map((todo) => (
          <ListItem
            onClick={() => {
              setTodos(todos.filter((filterTodo) => filterTodo !== todo));
            }}
            key={todo}
          >
            {todo}
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default App;
