/* global it, expect, describe, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
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

    // describe('Select stand input', () => {
    //     it('Should call the submitStand function when clicked', () => {
    //         const submitMock = jest.fn();
    //         const component = mount(<Stadium submitStand={submitMock} />);

    //         expect(submitMock.mock.calls.length).toEqual(0);
    //         component.find('.north > input').simulate('click');
    //         expect(submitMock.mock.calls.length).toEqual(1);
    //     });
    // });
});
