import LayoutNav from "./Layout-nav";
import { useState } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const HomeAdmin = ({ setEmployees, Employees }) => {
  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Position, setPosition] = useState("");

  const save = () => {
    const emp = {
      id: Employees.length,
      name: Name,
      lastname: Lastname,
      position: Position,
    };
    setEmployees([...Employees, emp]);
  };

  const delete1 = (index) => {
    // const a = [...Employees]
    // a.splice(index, 1)
    // setEmployees(a)
    setEmployees(Employees.filter((e,idx) => idx !== index))
  }
  return (
      <div>
        <h1>Generation Thailand React - Admin Sector</h1>
        <h2>Create User Here</h2>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        Name
        <input
          type="text"
          placeholder="Lastname"
          onChange={(event) => setLastname(event.target.value)}
        />
        Lastname
        <input
          type="text"
          placeholder="Position"
          onChange={(event) => setPosition(event.target.value)}
        />
        Position
        <button onClick={save}>Save</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          {Employees.map((e,index) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.lastname}</td>
                <td>{e.position}</td>
                <td><button onClick={() => delete1(index)}>delete</button></td>
              </tr>
            );
          })}
        </table>
      </div>
  );
};

export default HomeAdmin;
