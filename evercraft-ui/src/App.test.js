import React from 'react';
import App from './App';

import { mount } from 'enzyme'

describe('Evercraft', () => {
  describe('when character is created with a name', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<App />)
      wrapper.find('#new-character-name').simulate('change', { target: { value: 'stranger' } })
      wrapper.find('#button-create-character').simulate('click')
    })

    it('displays the provided name', () => {
      expect(wrapper.find('#character-name').text()).toBe('Name: stranger')
    })

    describe('and is expanded', () => {
      beforeEach(() => {
        wrapper.find('#character-name').simulate('click')
      })

      it('displays armor default value', () => {
        expect(wrapper.find('#character-armor').text()).toBe('Armor Class: 10')
      })

      it('displays hp default value', () => {
        expect(wrapper.find('#character-hp').text()).toBe('Hit Points: 5')
      })
    })
  })
});
