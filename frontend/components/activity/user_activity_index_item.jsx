import React from "react";
import { Link } from "react-router-dom";

const UserActivityIndexItem = ({ activity, deleteActivity }) => {
    return (
        <tr>
            <td>{activity.activity_type}</td>
            <td>{activity.date}</td>
            <td>{activity.title}</td>
            <td>{`${activity.hours}:${activity.minutes}`}</td>
            <td>{activity.distance}</td>
            <td><Link>Edit</Link></td>
            <td  onClick={ () => deleteActivity(activity.id)}>Delete</td>
        </tr>
    )
}


export default UserActivityIndexItem;