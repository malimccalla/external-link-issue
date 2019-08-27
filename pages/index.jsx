import Tippy from '@tippy.js/react';
import Head from 'next/head';

export default () => (
  <>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
    </Head>
    <Tippy content="Hello">
      <button>Hover over me!</button>
    </Tippy>
  </>
);
