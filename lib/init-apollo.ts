import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

import fetch from 'isomorphic-unfetch'

const IS_SERVER = typeof window === 'undefined'

import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'

let apolloClient: ApolloClient<{}> | null = null

export const addErrorHandlers = (link: ApolloLink) =>
    ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.forEach(({ message, locations, path }) => {
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                })
            }
            if (networkError) {
                console.log(`[Network error]: ${networkError}`)
                console.log(networkError)
            }
        }),
        link,
    ])

const create = (initialState: {}) => {
    return new ApolloClient({
        connectToDevTools: !IS_SERVER,
        ssrMode: IS_SERVER,
        link: addErrorHandlers(
            createHttpLink({
                uri: process.env.seedorfGraphQLUrl,
                credentials: 'same-origin',
                fetch: (!IS_SERVER && fetch) as any,
            })
        ),
        cache: new InMemoryCache({
            dataIdFromObject: object => (object as any).uuid || null,
        }).restore(initialState || {}),
    })
}

export default (initialState: {}) => {
    if (!process.browser) {
        return create(initialState)
    }
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}
