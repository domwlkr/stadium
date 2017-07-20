import React, { PropTypes } from 'react';
import './Stand.css';

const Stand = ({ direction }) => (
    <div className={`stand ${direction}`}>
        <input id={`${direction}-stand`} type="radio" name="stand" />
        <label htmlFor={`${direction}-stand`}>{direction} Stand</label>
    </div>
);

Stand.propTypes = {
    direction: PropTypes.string.isRequired,
};

export default Stand;
