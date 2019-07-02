import React from 'react';
import App from './App';

import { mount } from 'enzyme'

describe('Evercraft', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  describe('when attacker is created', () => {
    beforeEach(() => {
      wrapper.find('#new-character-name-attacker').simulate('change', { target: { value: 'stranger' } })
      wrapper.find('#button-create-character-attacker').simulate('click')
    })

    it('displays the character with the provided name', () => {
      expect(wrapper.find('#character-name-attacker').text()).toBe('stranger')
    })

    it('displays armor default value', () => {
      expect(wrapper.find('#character-armor-attacker').text()).toBe('Armor Class: 10')
    })

    it('displays hp default value', () => {
      expect(wrapper.find('#character-hp-attacker').text()).toBe('Hit Points: 5')
    })

    it('does not create character without name', () => {
      wrapper = mount(<App />)
      wrapper.find('#new-character-name-attacker').simulate('change', { target: { value: '' } })
      wrapper.find('#button-create-character-attacker').simulate('click')
  
      expect(wrapper.find('#character-name-attacker').length).toBe(0)
    })
  })

  describe('when defender is created', () => {
    beforeEach(() => {
      wrapper.find('#new-character-name-defender').simulate('change', { target: { value: 'danger' } })
      wrapper.find('#button-create-character-defender').simulate('click')
    })

    it('displays the character with the provided name', () => {
      expect(wrapper.find('#character-name-defender').text()).toBe('danger')
    })

    it('displays armor default value', () => {
      expect(wrapper.find('#character-armor-defender').text()).toBe('Armor Class: 10')
    })

    it('displays hp default value', () => {
      expect(wrapper.find('#character-hp-defender').text()).toBe('Hit Points: 5')
    })

    it('does not create character without name', () => {
      wrapper = mount(<App />)
      wrapper.find('#new-character-name-defender').simulate('change', { target: { value: '' } })
      wrapper.find('#button-create-character-defender').simulate('click')
  
      expect(wrapper.find('#character-name-defender').length).toBe(0)
    })
  })
});
