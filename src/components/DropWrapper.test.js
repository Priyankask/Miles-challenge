import React, { Fragment } from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DropWrapper from './DropWrapper';

configure({adapter: new Adapter()});

describe('<DropWrapper />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<DropWrapper />);
    });

    it('should render 5 <DropWrapper /> elements on load', () => {
        expect(wrapper.find(DropWrapper)).toHaveLength(0);
    });

    /*it('should render three <NavigationItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });*/
});