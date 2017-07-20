import React, { PropTypes } from 'react';
import Stand from './Stand';
import './Stadium.css';

const directions = ['north', 'south', 'east', 'west'];

const Stadium = ({ submitStand }) => {
    const stands = directions.map(direction => (
        <Stand key={direction} direction={direction} />
    ));

    return (
        <div className="stadium">
            <form
              onSubmit={(event) => {
                  event.preventDefault();
                  submitStand();
              }}
            >
                {stands}

                <button type="submit" className="select-stand">
                    Select stand
                </button>
            </form>
        </div>
    );
};

Stadium.propTypes = {
    submitStand: PropTypes.func.isRequired,
};

export default Stadium;
