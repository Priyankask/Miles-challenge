import React, { Fragment } from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UndoRedoControl from './UndoRedoControl';

configure({adapter: new Adapter()});

describe('<UndoRedoControl />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UndoRedoControl />);
    });

    it('should an exact Redo button', () => {
        expect(wrapper.contains(<button type='button'>
        Redo
      </button>));
    });

    it('should an exact Save button', () => {
        expect(wrapper.contains(<button type='button' >
        Save
      </button>));
    });

    it('should an exact Undo button', () => {
        expect(wrapper.contains(<button type='button'>
        Undo
      </button>));
    });

});