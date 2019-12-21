import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './SearchBar.css'

class SearchBar extends Component { 
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
            <div className="topnav2">
            <div className="search-container left-addon">
                
                <FontAwesome className="rmdb-fa-search circle-icon"
                name="search" size="1x" />
                    <input type="text" 
                    placeholder="Search Movies"
                    onFocus={(e) => e.target.placeholder = " "} 
                    onBlur={(e) => e.target.placeholder = "Search Movies..."}
                    onChange={this.doSearch}
                    value={this.state.value}
                    className="search-text-input"
                    name="search" />
                </div>
            </div>
            
        )
    }
}

export default SearchBar