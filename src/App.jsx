
import { useState } from 'react';
import Employee from './components/Employee'

function App() {
  const [role, setRole] = useState("")

  const showEmployee = true;
  return (
    <>
    {console.log('Inside the return')}
      {showEmployee 
      ? 
      <div>
        <input type="text" onChange={(e) => {
          setRole(e.target.value)
        }} />
        <Employee name="Habibi Alfahrezi" role="Intern"/> 
        <Employee name="Royan" role={role}/>
        <Employee name="Sarman"/>
      </div>
      : 
      <p>You cannont see the employee</p>
      }
    </>
  )
}

export default App
