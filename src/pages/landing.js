import React from "react";
import Login from "../components/login";

const Landing = () => {
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
