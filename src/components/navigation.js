import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/diary">Diary</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
