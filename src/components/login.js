import React, { useContext, useState } from "react";
import { Button, Divider, Input, Form } from "antd";
import { Redirect } from "react-router";
import app from "../Firebase.js";
import { AuthContext } from "../Authentication.js";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const handleLogin = async () => {
        try {
            await app.auth().signInWithEmailAndPassword(email, password);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    };

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className="login">
            <Form>
                <Form.Item name="email" required>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item name="password" required>
                    <Input.Password placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => handleLogin()} htmlType="submit">
                        Login with Email
                    </Button>
                </Form.Item>

                <Divider />

                <Button type="primary" onClick={() => {}}>
                    Login with Google
                </Button>
            </Form>
        </div>
    );
};

export default Login;
