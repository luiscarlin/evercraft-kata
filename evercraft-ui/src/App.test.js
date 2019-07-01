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

    describe('and second player is created', () => {
      it('displays their info when they are expanded', () => {
        wrapper.find('#new-character-name').simulate('change', { target: { value: 'danger' } })
        wrapper.find('#button-create-character').simulate('click')
        wrapper.find('#show-character-info').simulate('click')

        expect(wrapper.find('#character-name-stranger').text()).toBe('stranger')
        expect(wrapper.find('#character-name-danger').text()).toBe('danger')
        expect(wrapper.find('#character-armor-stranger')).toHaveLength(1)
        expect(wrapper.find('#character-name-danger')).toHaveLength(1)
        expect(wrapper.find('#character-hp-stranger')).toHaveLength(1)
        expect(wrapper.find('#character-hp-danger')).toHaveLength(1)
      })
    })
  })
});
