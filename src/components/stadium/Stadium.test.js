/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import Stadium from './Stadium';

describe('Stadium component', () => {
    it('Should render successfully', () => {
        const component = shallow(<Stadium />);
        expect(component.exists()).toEqual(true);
    });

    it('Should have 4 stand inputs', () => {
        const component = shallow(<Stadium />);
        expect(component.find('.stand').length).toEqual(4);
    });
});
