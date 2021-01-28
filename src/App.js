import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Authentication";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/dashboard";
import Landing from "./pages/landing";
import Diary from "./pages/diary";
import Profile from "./pages/profile";
import NewEntry from "./pages/newEntry";
import Signup from "./pages/signUp";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/landing" component={Landing} />
                        <PrivateRoute path="/" component={Dashboard} />
                        <PrivateRoute path="/diary" component={Diary} />
                        <PrivateRoute path="/profile" component={Profile} />
                        <PrivateRoute path="/new" component={NewEntry} />
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
