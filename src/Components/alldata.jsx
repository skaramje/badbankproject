import React, { useState } from 'react';
import UserContext from './usercontext';

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h1>All Data in store</h1>
      {JSON.stringify(ctx)}<br/>
      </>
    );
}

export default AllData;