import React from "react";
import { withRouter } from "react-router";


class ActivityForm extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="new-activity-container">
                <div className="new-activity-form">
                    <h3>Create New Activity</h3>

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text"/>
                            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                            <div id="myDropdown" class="dropdown-content">
                                <p>Miles</p>
                                <p>Kilometers</p>
                                <p>Meters</p>
                                <p>Yards</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ActivityForm;