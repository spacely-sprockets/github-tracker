import React from 'react';
import logo from './logo.svg';
import './App.css';

import {gql, useQuery} from '@apollo/client';
import {BaseStyles} from '@primer/components';

const sample_query = gql`query { viewer { login bio } }`

interface QueryData {
  viewer: Viewer
}
interface Viewer {
  login: string,
  bio: string
}

function App() {
  const {data} = useQuery<QueryData>(sample_query)
  console.log(data);
  return (
    <BaseStyles>
      <p>Hello {data?.viewer.login}</p>
    </BaseStyles>
  );
}

export default App;
