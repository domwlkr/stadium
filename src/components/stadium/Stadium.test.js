/* global it, expect, describe, jest, beforeEach */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Stadium from './Stadium';

describe('Stadium component', () => {
    let component;
    const submitMock = jest.fn();

    beforeEach(() => {
        component = shallow(
            <Stadium
              submitStand={submitMock}
            />,
        );
    });

    it('Should render successfully', () => {
        expect(component.exists()).toEqual(true);
    });

    describe('Select stand button', () => {
        it('Should exist', () => {
            expect(component.find('.select-stand').length).toEqual(1);
        });

        it('Should call the submitStand function when clicked', () => {
            component = mount(<Stadium submitStand={submitMock} />);

            expect(submitMock.mock.calls.length).toEqual(0);
            component.find('form').simulate('submit');
            expect(submitMock.mock.calls.length).toEqual(1);
        });
    });
});
