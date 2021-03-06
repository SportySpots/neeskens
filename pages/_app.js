import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import Router from 'next/router';

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

  render() {
    const {Component, pageProps, apolloClient} = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
