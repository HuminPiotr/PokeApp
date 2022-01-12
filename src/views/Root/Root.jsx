import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from 'store';
import StartView from 'views/StartView/StartView.jsx';
import FormView from 'views/FormView/FormView.jsx';
import MainTemplate from 'templates/MainTemplate';


const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
            <Route exact path='/' component={StartView}/>
            <Route path='/form' component={FormView} />
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
