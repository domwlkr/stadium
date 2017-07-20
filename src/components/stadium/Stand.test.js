/* global it, describe, expect, jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Stand from './Stadium';

describe('Stand component', () => {
    const direction = 'north';

    it('Should render successfully', () => {
        const component = shallow(<Stand />);
        expect(component.exists()).toEqual(true);
    });

    it('Should render the correct direction', () => {
        const component = mount(<Stand direction={direction} />);
        expect(component.find('.north label').text()).toEqual('north Stand');
    });

    it('Should call the submitStand function when clicked', () => {
        const submitMock = jest.fn();
        const component = mount(<Stand direction={direction} submitStand={submitMock} />);

        expect(submitMock.mock.calls.length).toEqual(0);
        component.find('.north').simulate('click');
        expect(submitMock.mock.calls.length).toEqual(1);
    });
});
