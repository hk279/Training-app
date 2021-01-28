import React, { useState } from "react";
import { Button, Input, Form } from "antd";
import app from "../Firebase.js";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const handleSignUp = () => {
        app.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };

    return (
        <>
            <Form>
                <Form.Item name="email" required>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item name="password" required>
                    <Input.Password placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => handleSignUp} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Signup;
