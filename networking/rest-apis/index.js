import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = 5111;

app.use(bodyParser.json()); // will use body parser at central level, so every request consume this

app.all("/", (req, res) => {
  console.log("req::::", req); // from client
  console.log("res::::", res); // send to client
  res.send("I am up");
});

// for as for now just creating in memory data

const todos = [
  {
    id: 1,
    title: "Task 1 ",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2 ",
    completed: true,
  },
  {
    id: 3,
    title: "Task 3 ",
    completed: false,
  },
];
// READ

app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE
app.post("/todos", (req, res) => {
  // data will come from client in the body with post request
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({
    status: "success",
    message: "New Todo Created",
  });
});

app.get("/todos/:id", (req, res) => {
  const data = todos.find((item) => item.id === Number(req.params.id));
  if (data?.id) {
    res.json({
      statusCode: 200,
      data,
      message: "Success",
    });
  } else {
    res.status(404).json({
      statusCode: 400,
      error: "Id not found",
    });
  }
});

// UPDATE

app.put("/todos/:id", (req, res) => {
  const newData = req.body;
  const todoParamId = Number(req.params.id);
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newData,
    };
    res.status(201).json({
      todos,
      status: 201,
      message: "Successfully updated",
    });
  } else {
    res.status(400).json({
      message: "Todo Id does not exist",
    });
  }
});

// DELETE

app.delete("/todos/:id", (req, res) => {
  const todoParamId = Number(req.params.id);
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({
    todos,
    status: 201,
    message: "Successfully deleted",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
