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
    color: #db6517;
  `;

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className=" col">
              <h1>ToDoList</h1>
              <InputGroup className="mb-5">
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
                  className="btn btn-warning"
                  id="button-addon2"
                >
                  Ekle
                </Button>
              </InputGroup>
              <ul>
                {todos.map((todo) => (
                  <ListItem
                    onClick={() => {
                      setTodos(
                        todos.filter((filterTodo) => filterTodo !== todo)
                      );
                    }}
                    key={todo}
                  >
                    {todo}
                  </ListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
