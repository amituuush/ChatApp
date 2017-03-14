import React from 'react';
import NameAndTimeOnline from '../src/components/NameAndTimeOnline/NameAndTimeOnline';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';


describe('<NameAndTimeOnline />', () => {
  it('renders a <div>', () => {
    const mockComponent = shallow(<NameAndTimeOnline />);
    expect(
      mockComponent.find('div').node
    ).toExist();
  });

  it('renders a <h2>', () => {
    const mockComponent = shallow(<NameAndTimeOnline />);
    expect(
      mockComponent.find('h2').node
    ).toExist();
  });

  it('renders a <p>', () => {
    const mockComponent = shallow(<NameAndTimeOnline />);
    expect(
      mockComponent.find('p').node
    ).toExist();
  });
});