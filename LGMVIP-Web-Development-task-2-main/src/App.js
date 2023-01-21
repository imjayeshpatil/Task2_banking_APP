import { useState } from "react";
import Users from "./Components/Users";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const handleUsersShow = () => {
    setShow(true);
  };
  return (
    <div className="App">
      <nav>
        <h3 className="text-info">OPTOMETRY</h3>
        <button className="btn btn-warning" onClick={handleUsersShow}>
          Get Users
        </button>
      </nav>
      {/* <div className="container"> */}
    
      

        {show ? <Users></Users> : ""}
        
      {/* </div> */}
    </div>
  );
}

export default App;
