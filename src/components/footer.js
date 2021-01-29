import React from "react";
import app from "../Firebase";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";

const Footer = () => {
    let history = useHistory();

    const signOut = () => {
        app.auth()
            .signOut()
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div className="footer-container">
            <div className="footer-div">Training App Ltd. 2020</div>
            <div className="footer-div">
                <InstagramOutlined className="some-icon" />
                <FacebookOutlined className="some-icon" />
            </div>
            <div className="footer-div">
                <Button onClick={() => signOut()}>Logout</Button>
            </div>
        </div>
    );
};

export default Footer;
