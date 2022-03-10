import React from "react";
import { Link } from "react-router-dom";


const structuredDate = (date) => {
    const dayOfWeek = {
        0: "Sun", 
        1: "Mon", 
        2: "Tue", 
        3: "Wed", 
        4: "Thu", 
        5: "Fri", 
        6: "Sat"
    }
    const newDate = new Date(date); 
    const weekDay = dayOfWeek[newDate.getDay()];
    const [year, month, day] = date.split("-");
    return `${weekDay}, ${month}/${day}/${year}`;
}

const UserActivityIndexItem = ({ activity, deleteActivity }) => {
    return (
        <tr>
            <td>{activity.activity_type}</td>
            <td>{structuredDate(activity.date)}</td>
            <Link to={`/activities/${activity.id}`} className="user-activity-link"><td>{activity.title}</td></Link>
            <td>{`${activity.hours}:${activity.minutes}`}</td>
            <td>{`${activity.distance} mi`}</td>
            <td><Link className="user-activity-link">Edit</Link></td>
            <td onClick={() => deleteActivity(activity.id)} className="user-activity-link">Delete</td>
        </tr>
    )
}


export default UserActivityIndexItem;