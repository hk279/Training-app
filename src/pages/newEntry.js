import React, { useState } from "react";
import "antd/dist/antd.css";
import Navigation from "../components/navigation";
import { Button, Select, InputNumber, Typography, Checkbox } from "antd";

import "../App.css";
import Footer from "../components/footer";

const { OptGroup, Option } = Select;

const NewEntry = () => {
    /* const [favorites, setFavorites] = useState([]); */
    const [weightDisabled, setWeightDisabled] = useState(false);

    return (
        <>
            <Navigation />
            <div className="entry-input-container">
                <Select style={{ width: 200 }} placeholder="Select an Exercise">
                    <OptGroup key="arms" label="Arms">
                        <Option value="Curls">Curls</Option>
                    </OptGroup>
                    <OptGroup key="chest" label="Chest">
                        <Option value="Bench">Bench</Option>
                        <Option value="Cable Fly">Cable Fly</Option>
                    </OptGroup>
                    <OptGroup key="legs" label="Legs">
                        <Option value="Squat">Squat</Option>
                        <Option value="Deadlift">Deadlift</Option>
                    </OptGroup>
                </Select>
                <Typography.Text style={{ color: "white" }}>Sets:</Typography.Text>
                <InputNumber min={1} max={10} defaultValue={3}></InputNumber>
                <Typography.Text style={{ color: "white" }}>Reps Per Set:</Typography.Text>
                <InputNumber min={1} max={50} defaultValue={10}></InputNumber>
                <Typography.Text style={{ color: "white" }}>Weight:</Typography.Text>
                <InputNumber
                    disabled={weightDisabled}
                    min={1}
                    max={500}
                    defaultValue={50}
                    formatter={(value) => `${value} kg`}
                    parser={(value) => value.replace(" kg", "")}
                ></InputNumber>
                <Typography.Text style={{ color: "white" }}>Bodyweight:</Typography.Text>
                <Checkbox onChange={() => setWeightDisabled(!weightDisabled)}></Checkbox>
                <Button type="primary">Save</Button>
            </div>

            <Footer />
        </>
    );
};

export default NewEntry;
