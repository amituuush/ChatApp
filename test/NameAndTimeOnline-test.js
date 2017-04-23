import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NameAndTimeOnline from '../src/components/NameAndTimeOnline/NameAndTimeOnline';

describe('COMPONENT RENDERING', () => {

describe('<NameAndTimeOnline />', () => {
  it('renders a <div>', () => {
    const mockComponent = shallow(<NameAndTimeOnline />);
    expect(mockComponent.find('div').exists()).to.be.ok;
  });

  it('renders a <h2>', () => {
    const mockComponent = shallow(<NameAndTimeOnline />);
    expect(mockComponent.find('h2').exists()).to.be.ok;
  });

  it('renders a <p>', () => {
    const mockComponent = shallow(<NameAndTimeOnline />);
    expect(mockComponent.find('p').exists()).to.be.ok;
  });
});

});