import React from "react";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { I18nextProvider } from 'react-i18next';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'data/redux/reducers'
import i18next from './i18n'
import client from 'services/client'
import Routes from "routes";

const store = createStore(rootReducer)
const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <div className="App">
              <Routes />
            </div>         
          </I18nextProvider>
        </Provider>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

export default App;
