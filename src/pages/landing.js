import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../Authentication.js";
import Login from "../components/login";

const Landing = () => {
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <div className="landing-column"></div>
            <div className="landing-column">
                <Login></Login>
            </div>
        </div>
    );
};

export default Landing;
