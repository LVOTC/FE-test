import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { createGlobalStyle } from 'styled-components';

import LoginWindow from './LoginWindow';
import ResultPage from './ResultPage';

const App = () => {
  return(
    <div className="new-app">
      <GlobalStyle />
      <Router history={history}>
        <div>
          <Route path="/" exact component={LoginWindow} />
          <Route path="/result" exact component={ResultPage} />
        </div>
      </Router>
    </div>
  );
};

//Styled components
const globalFontColor = '#7e7e78';

const GlobalStyle = createGlobalStyle`
  *,*:before,*:after{
    box-sizing: border-box;
  }

  *:focus{
    outline: none;
  }

  body{
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600&display=swap');
    font-family: 'Raleway', sans-serif;
    padding: 0;
    margin: 0;
    color: ${globalFontColor};
    font-size: 16px;
  }
  h1{
    font-size: 22px;
    font-weight: 600;
    margin: 0px 0px 20px 0px;
    line-height: 150%;
    text-align: center;
  }
  p{
    line-heigt: 100%;
    font-size: 16px;
  }
  a{
    color: ${globalFontColor};
    text-decoration: none;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export default App;
