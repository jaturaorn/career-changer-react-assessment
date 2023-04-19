import LayoutNav from "./Layout-nav"
import { useState } from "react"

const HomeUser = ({Employees}) => {
  const [Sector,setSector] = useState('')

  return (
            <div>
            <h1>Generation Thailand React - User Sector</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Position</th>
                    </tr>
                </thead>
            </table>
            
            {
              Employees.map((e) => 
     {
         return (
             <tr>
                 <td>{e.name}</td>
                 <td>{e.lastname}</td>
                 <td>{e.position}</td>
             </tr>
         )
     })
            }

            </div>       
  )
}

export default HomeUser