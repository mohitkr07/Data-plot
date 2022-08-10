import { mapKeys } from "lodash";
import React from "react";
import {ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from "recharts";

const pdata=[
    {
        name: "MAK",
        maths: 10,
        physics: 19,
    },
    {
        name: "Arjun",
        maths: 15,
        physics: 18,
    },
    {
        name: "Kumar",
        maths: 16,
        physics: 20,
    },
    {
        name: "Kundan",
        maths: 12,
        physics: 5,
    },
    {
        name: "Sonam",
        maths: 18,
        physics: 20,
    },
    {
        name: "Krushna",
        maths: 14,
        physics: 18,
    },
    {
        name: "Parmar",
        maths: 20,
        physics: 20,
    },

]

function Graph(){
    return (
    <div className="graph">
        <ResponsiveContainer aspect={3}>
            <LineChart  data={pdata} >
                <Line type="monotone" dataKey="maths" stroke="red"></Line>
                <Line type="monotone" dataKey="physics" stroke="green"></Line>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name"></XAxis>
                <YAxis />
                <Legend />
                <Tooltip></Tooltip>
            </LineChart>
        </ResponsiveContainer>
    </div>
    )
}

export default Graph;