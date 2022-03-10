import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
// import maps_dummy_img from "../../../app/assets/images/maps_dummy_img.jpg";


const calcPace = ( h, m, d ) => {
    m = (h*60) + m;
    let pace = m / d;
    pace = pace.toFixed(2);
    return pace.split(".").join(":")
}

const structuredDate = (date, time) => {
    const months = {
        "01": "Janurary",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June", 
        "07": 'July', 
        "08": 'August', 
        "09": 'September', 
        "10": 'October', 
        "11": 'November', 
        "12": 'December'
    }
    const [year, month, day] = date.split("-");
    let [hour, minute, second] = time.split("T")[1].split(".")[0].split(":");
    let dayOrNight; 
    if (Number(hour) > 12) {
        dayOrNight = "pm"
        hour = Number(hour) - 12; 
    } else if (hour === "12") {
        dayOrNight = "pm"
    } else {
        if (hour === "00") hour = 12;
        dayOrNight = "am"
    }
    return `${months[month]} ${day}, ${year} at ${hour}:${minute}${dayOrNight}`;
}

const DashIndexItem = ({ activity, users}) => {

    
    // debugger
    console.log(users)
    console.log(activity)
    return (
        <div className="index-item">
            <div className="information">
                <div className="top-dash-index">
                    <div className="top-left-dash-index">
                        <div className="profile-pic-container">
                            <div id="profile-pic"></div>
                        </div>
                    </div>
                    <div className="top-right-dash-index">
                            <div>{users[activity.user_id].name}</div>
                            <div>{structuredDate(activity.date, activity.time)}</div>
                    </div>
                </div>
                <div className="right-side-information">
                    <div className="person-running"><FontAwesomeIcon icon={faPersonRunning}/></div>
                    <div className="left-of-right-side-information">
                        <div id="title">
                            <Link to={`/activities/${activity.id}`} className="title-link"><div>{activity.title}</div></Link>
                        </div>
                        <div className="remaining-info">
                            <div id="distance">
                                <label>Distance</label>
                                <div>{activity.distance} mi</div>
                            </div>
                            <div id="pace">
                                <label>Pace</label>
                                <div>{`${calcPace(activity.hours, activity.minutes, activity.distance)} /mi`}</div>
                            </div>
                            <div id="time">
                                <label>Time</label>
                                <div>{`${activity.hours}h ${activity.minutes}m`}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img"><img src={window.maps_dummy_imgURL}/></div>
        </div>
    )
}


export default DashIndexItem;