import React, { PropTypes } from 'react';
import Stand from './Stand';
import './Stadium.css';

const directions = ['north', 'south', 'east', 'west'];

const Stadium = ({ selectedStand }) => {
    const submitStand = (e) => {
        console.log(e);
    };

    const stands = directions.map(direction => (
        <Stand key={direction} submitStand={submitStand} direction={direction} />
    ));

    return (
        <div className="stadium">
            <form>
                {stands}
                <span className="selected-stand">{selectedStand}</span>
            </form>
        </div>
    );
};

Stadium.propTypes = {
    selectedStand: PropTypes.string.isRequired,
};

export default Stadium;
