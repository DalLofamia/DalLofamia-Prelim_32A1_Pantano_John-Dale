import { useContext, useState } from "react";
import { UserContext } from "../UserContext"; 
import { useHistory } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

export default function Settings() {
  const { userName, setUserName, section, setSection, year, setYear } = useContext(UserContext);
  const history = useHistory(); 
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`d-flex justify-content-center align-items-center vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className={`p-4 w-50 rounded shadow ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
        <h1 className="text-center mb-4">Settings</h1>

        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <label className="fw-bold">Student Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control w-50 text-center"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <label className="fw-bold">Section:</label>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="form-control w-50 text-center"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <label className="fw-bold">Year:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="form-control w-50 text-center"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => alert("Profile updated successfully!")}
            className="btn btn-success me-2"
          >
            Update Profile
          </button>

          <button
            onClick={() => history.push("/profile")}
            className="btn btn-primary me-2"
          >
            Go to Profile
          </button>

          <button
            onClick={toggleDarkMode}
            className="btn btn-dark"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}
