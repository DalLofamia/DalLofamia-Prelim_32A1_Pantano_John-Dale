import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react"; 
import { UserProvider } from "./UserContext"; 
import Profile from "./components/Profile";
import Settings from "./components/Settings"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner"; 
import "./App.css";

function MyApp() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="background-image d-flex justify-content-center align-items-center vh-100">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="text-center p-4 text-light">
          <h1 className="mb-4">Welcome to My React App</h1>
          <button 
            onClick={() => history.push("/profile")} 
            className="btn btn-primary"
          >
            Go to Profile
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={MyApp} />  
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
