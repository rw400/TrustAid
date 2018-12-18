import React from 'react';

import Header from '../components/header/header';

const Fallback = () => {
  return (
    <div>
      <Header title="Page not found!" />
      <h1>404 Error Page</h1>
      <h1>Something went wrong!</h1>

    </div>
  )
}

export default Fallback;
