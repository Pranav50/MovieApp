import React from 'react';
import './LoadMoreBtn.css';
import { MDBBtn} from 'mdbreact';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ text, onClick }) => {
    return (
        <MDBBtn style={{height:'50px', borderRadius: '20px', marginTop: '30px'}} className="rmdb-loadmorebtn" onClick={onClick}>
            <p>{text}</p>
        </MDBBtn>
    )
}

LoadMoreBtn.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  }

export default LoadMoreBtn