import './App.css';
import Header from "./components/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createContext, useState} from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <p>name: {loggedInUser.name}</p>
          <Router>
              <Header/>
              <Switch>
                  <Route path="/home">
                      <Home/>
                  </Route>
                  <Route path="/login">
                      <Login/>
                  </Route>
                  <PrivateRoute path="/book">
                      <Book/>
                  </PrivateRoute>
                  <PrivateRoute path="/book/:bedType">
                      <Book/>
                  </PrivateRoute>
                  <Route exact path="/">
                      <Home />
                  </Route>
              </Switch>
          </Router>
      </UserContext.Provider>
  );
}

export default App;
