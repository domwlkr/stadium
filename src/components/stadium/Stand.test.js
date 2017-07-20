/* global it, describe, expect, beforeEach */

import React from 'react';
import { shallow } from 'enzyme';
import Stand from './Stand';

describe('Stand component', () => {
    let component;
    const direction = 'north';

    beforeEach(() => {
        component = shallow(
            <Stand
              direction={direction}
            />,
        );
    });

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    it('Should render the correct direction', () => {
        expect(component.find('.north label').text()).toEqual('north Stand');
    });
});
