import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import NameAndTimeOnline from '../src/components/NameAndTimeOnline/NameAndTimeOnline';
import App from '../src/components/App/App';
import Login from '../src/components/Login/Login';
import ChatRoom from '../src/components/ChatRoom/ChatRoom';

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

  // describe('<LeftPanel />', () => {
  //   it('should receive currentRoom as a prop', () => {

  //     const wrapper = mount(<LeftPanel currentRoom="baz" />);
  //     expect(wrapper.props().bar).to.equal('baz');
  //   });
  // });

  // describe('<App />', () => {
  //   it('should render the <Login /> component if this.props.name is falsy', () => {
  //     const wrapper = shallow(
  //       <App store={'foo'}>
  //         <Login />
  //       </App>
  //     );
  //     expect(wrapper.contains(<Login />)).to.equal(true);
  //   });
  // });

  describe('<Login />', () => {
    it('simulates click events on button');
  });

  describe('<ChatRoom />', () => {
    it('simulates click events on button', () => {
      const onButtonClick = sinon.spy();
      const wrapper = mount(
        <ChatRoom onButtonClick={onButtonClick} />
      );
      wrapper.find('div').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });
  });

});