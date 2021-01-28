import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/footer";

const Dashboard = () => {
    let history = useHistory();

    return (
        <div>
            <div className="container">
                <div className="bg-2">
                    <h1>Logo Placeholder</h1>
                </div>
                <div
                    className="bg-1"
                    onClick={() => {
                        history.push("/new");
                    }}
                >
                    <h1 style={{ color: "#36CC00" }}>New Entry</h1>
                </div>
                <div className="bg-1">
                    <h1>Premade Workouts</h1>
                </div>
                <div className="bg-2">
                    <h1>Diary</h1>
                </div>
                <div className="bg-2">
                    <h1>Profile</h1>
                </div>
                <div className="bg-1">
                    <h1>Stats</h1>
                </div>
                <div className="bg-2">
                    <h1>About</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
