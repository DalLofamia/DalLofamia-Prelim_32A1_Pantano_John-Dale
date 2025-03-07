import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  const { userName, section, year } = useContext(UserContext);
  const history = useHistory();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container-fluid vh-100 d-flex flex-column p-4 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h1 className="text-center mb-4">Welcome to the Profile Page</h1>

      <div className={`d-flex align-items-center p-4 rounded shadow ${darkMode ? "bg-secondary" : "bg-white"}`}>
        <img 
          src="/hutao.jpg" 
          alt="Profile" 
          className="rounded-circle border border-dark me-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <div>
          <h3>Student Name: {userName}</h3>
          <h3>Section: {section}</h3>
          <h3>Year: {year}</h3>
        </div>
      </div>

      <div className="d-flex gap-2 mt-4">
        <button 
          className="btn btn-primary"
          onClick={() => history.push("/")}
        >
          Home
        </button>
        
        <button 
          className="btn btn-success"
          onClick={() => history.push("/settings")}
        >
          Settings
        </button>

        <button 
          className="btn btn-dark"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
