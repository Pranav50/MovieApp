import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component  {
    state = {
        value: '' 
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value);
        }, 500)
    }

    render() {
        return (
            <div className="topnav">
            <Link to="/">
            <img className="rmdb-logo" src="https://image.flaticon.com/icons/png/512/83/83519.png" />
            <span className="movie-text">MoviesNow</span>
            </Link>
                 
            </div>    
        )
    }
}

export default Header