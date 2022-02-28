import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"



class AuthHeader extends React.Component{
    constructor(props){
        super(props)
    }

    

    render(){
        const wantedPaths = ['/', '/signup', '/login']
        if (wantedPaths.includes(this.props.location.pathname)){
            return(
                <div className="header">
                    <Link to='/' className="logo"><h2>AVARTS</h2></Link>
                    {this.props.location.pathname !== '/login' ? <button><Link to='/login' className="login">Login</Link></button> : <button><Link to='/signup' className="signup">Signup</Link></button> }
                </div>
            )
        }else{
            return null;
        }
    }
}



export default withRouter(connect(null)(AuthHeader))