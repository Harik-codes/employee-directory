import express from "express";
import employees from "#db/employees";

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res, next) => {
  res.send(employees);
});

app.get("/employees/random", (req, res, next) => {
  const randomEmployee = Math.floor(Math.random() * employees.length);
  res.send(employees[randomEmployee]);
});

app.get("/employees/:id", (req, res, next) => {
  const { id } = req.params;
  const employee = employees.find((employee) => {
    return employee.id === +id;
  });
  if (!employee) {
    res.status(404).send("error employee not found");
  }

  res.send(employee);
});

export default app;
