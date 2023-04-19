import { useState } from "react";
import HomeAdmin from "./Home-Admin";
import HomeUser from "./Home-User";
import LayoutNav from "./Layout-nav"
import { Link, Route, Routes } from 'react-router-dom';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Homenormal = () => {
  const [Sector,setSector] = useState('home');
  const [Employees,setEmployees] = useState(mockEmployees);

  const handleBuse = () => {
    setSector('HomeUser');
  }
  const handleBadmin = () =>{
    setSector('HomeAdmin');
  }
  let empty = null;
  if (Sector === 'HomeUser') {
    empty = <HomeUser Employees={Employees}/>
  }
  else if (Sector === 'HomeAdmin') {
    empty = <HomeAdmin Employees={Employees} setEmployees={setEmployees}/>
  }
  return (
    <LayoutNav setSector={setSector}>
      <div>
        <h1>Generation Thailand React - Assessment</h1>
            <button onClick={handleBuse}>User Home Sector</button>
            <button onClick={handleBadmin}>Admin Home Sector</button>
      </div>
      {empty}
    </LayoutNav>
  )
}



export default Homenormal
