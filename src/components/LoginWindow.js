import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginToServer } from '../actions';

class LoginWindow extends React.Component {

  renderError = ({error, submitFailed}) => {
    if(submitFailed && error){
      return(
          <ErrorMessages>{error}</ErrorMessages>
      );
    }
  };

  renderInput = ({input, placeholder, inputType, className, meta}) => {
    return(
      <FormDiv className={className}>
        <LoginFormInput {...input} type={inputType} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </FormDiv>
    );
  };

  onSubmit = (formValues) => {
    this.props.loginToServer(formValues);
  };

  render(){
    return(
      <LoginBody>
        <LoginFormWrap>
        <UserIcon />
          <h1>User Log in</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="username" component={this.renderInput} placeholder="Username" className="username" inputType="input" />
            <Field name="password" component={this.renderInput} placeholder="Password" className="password" inputType="password" />
            <FormDiv>
              <LoginFormButton className="button submit">Login</LoginFormButton>
            </FormDiv>
            <ForgotPassWrap>
              <a href="/">Forgot Password?</a>
            </ForgotPassWrap>
          </form>
        </LoginFormWrap>
      </LoginBody>
    )
  };
};

const validate = (formValues) => {
  const errors = {};

  if(!formValues.username){
    errors.username = 'You must enter a login';
  } else if(formValues.username !== 'luke'){
    errors.username = 'Ussername is incorrect';
  }
  if(!formValues.password){
    errors.password = 'You must enter a password';
  } else if(formValues.password !== 'skywalker'){
    errors.password = 'Password is incorrect';
  }

  return errors;
};

//Styled components
const borderRadius = '6px';
const loginBodyBg = '#e9e9e9';
const loginWrapBg = '#fff';
const mainBlueBg = '#397fc1';
const globalFontColor = '#7e7e78';
const errorColor = 'red';

const LoginBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${loginBodyBg};
  padding: 0px 12px;
`;
const LoginFormWrap = styled.div`
  padding: 75px 35px 42px;
  width: 100%;
  max-width: 350px;
  background: ${loginWrapBg};
  border-radius: ${borderRadius};
  position: relative;
`;
const LoginFormButton = styled.button`
  width: 100%;
  background: ${mainBlueBg};
  color: ${loginWrapBg};
  border: none;
  border-radius: ${borderRadius};
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 7px;
  line-height: 125%;
  &:hover {
    opacity: 0.7;
  }
`;
const UserIcon = styled.div`
  width: 99px;
  height: 99px;
  border-radius: 100px;
  background: ${mainBlueBg};
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  &:before{
    content: "";
    background: url("img/icon-user.png") no-repeat center;
    width: 43px;
    height: 48px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ForgotPassWrap = styled.div`
  text-align: center;
`;
const LoginFormInput = styled.input`
  background: ${loginBodyBg};
  color: ${globalFontColor};
  width: 100%;
  border: none;
  border-radius: ${borderRadius};
  padding: 10px 50px 10px 16px;
  font-size: 16px;
  line-height: 115%;
  margin: 0px;
  position: relative;
  &::-webkit-input-placeholder {
    color: ${globalFontColor};
  }
`;
const FormDiv = styled.div`
  position: relative;
  width:100%;
  margin-bottom: 20px;
  &:before, &:after{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 14px;
    z-index: 1;
  }
  &.username{
    &:before{
      background: url("img/user-l.png") no-repeat center;
      width: 9px;
      height: 13px;
    }
  }
  &.password{
    &:before{
      content: "";
      background: url("img/key-l.png") no-repeat center;
      width: 13px;
      height: 7px;
    }
  }
`;
const ErrorMessages = styled.div`
  color: ${errorColor};
  position: absolute;
  bottom: -16px;
  font-size: 12px;
`;
//END Styled components

const formWrapped = reduxForm({
  form: 'LoginForm',
  validate: validate
})(LoginWindow);

export default connect(null, {
  loginToServer
})(formWrapped);
