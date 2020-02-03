import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { signOut } from '../actions';
import history from './history';

class Header extends React.Component{

  onSignOutClick = () => {
    this.props.signOut();
    history.push('/');
  };

  render(){
    return(
      <HeaderContainer className="header">
        <LogOutButton onClick={this.onSignOutClick}>Logout</LogOutButton>
      </HeaderContainer>
    );
  };
};

//Styled components
const buttonColor = '#2f3254';

const HeaderContainer = styled.div`
  padding: 20px;
  text-align: right;
`;
const LogOutButton = styled.button`
  border: none;
  text-decoration: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: ${buttonColor};
  line-height: 30px;
  &:hover{
    opacity: 0.7;
  }
`;
//END Styled components

const mapStateToProps = (state) => {
  return({
    isSignedIn: state.auth.isSignedIn,
    credentials: state.auth.credentials
  });
}

export default connect( mapStateToProps, {
    signOut: signOut
})(Header);
