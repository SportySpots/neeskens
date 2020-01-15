// import '../.next/static/css/styles.chunk.css';
import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
// configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
configure(require.context('../', true, /\.stories\.tsx?$/), module);

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../.next/static/css', true, /\.css$/));
