import React from 'react';

import SpotCardSmall from ".";

// import { Button } from '@storybook/react/demo';
// import { action } from "@storybook/addon-actions";
import { ApolloProvider } from "@apollo/react-common";
import createApolloClient from 'lib/init-apollo';

const client = createApolloClient({});

export default {
    title: 'SpotCardSmall',
    component: SpotCardSmall,
    decorators: [(story: any) => (<ApolloProvider client={client}>{story()}</ApolloProvider>)]
};

export const Example1 = () => <SpotCardSmall uuid={"036ed46e-86a0-4aeb-8887-1048a2dd531b"} />
export const Example2 = () => <SpotCardSmall uuid={"a0b5c3ed-65be-4dce-b392-11d7010ae691"} />

// export const Emoji = () => (
//     <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     </Button>
// );
//
// Emoji.story = {
//     name: 'with emoji',
// };
