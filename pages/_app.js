import App from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { FilterProvider } from '../context/filters';
import { ApolloProvider } from 'react-apollo'
import Router from 'next/router';

import '../scss/style.scss';

class MyApp extends App {
  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      try {
        window.gtag('config', process.env.googleAnalyticsID, {
          page_location: url
        });
      } catch (error) {
        // do nothing (happens e.g. in dev mode, since window.gtag won't be avail.)
      }
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props);
  //   return state
  // }


  render() {
    const {Component, pageProps, apolloClient} = this.props

    return (
        <ApolloProvider client={apolloClient}>
          <FilterProvider>
            <Component {...pageProps} />
          </FilterProvider>
        </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)
