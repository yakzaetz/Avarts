import React from "react";
import { Link } from "react-router-dom";

const DashIndexItem = props => {
    return (
        <li>
            <p>Sport</p>
            <p>Date</p>
            <p>{props.activity.title}</p>
            <p>Time</p>
            <p>Distance</p>
            <p>Elevation</p>
        </li>
    )
}


export default DashIndexItem;