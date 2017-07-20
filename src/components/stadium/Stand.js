import React, { PropTypes } from 'react';
import './Stand.css';

const Stand = ({ direction, submitStand }) => (
    <div className={`stand ${direction}`}>
        <input id={`${direction}-stand`} type="radio" name="stand" />
        <label htmlFor={`${direction}-stand`} onClick={submitStand}>{direction} Stand</label>
    </div>
);

Stand.propTypes = {
    direction: PropTypes.string.isRequired,
    submitStand: PropTypes.func.isRequired,
};

export default Stand;
