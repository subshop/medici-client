import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'

import Layout from '../layouts/main';

const ALL_CREATIONS = gql`
query MyQuery {
  creations {
    title
    creator {
      name
    }
  }
}

`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(ALL_CREATIONS);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <Layout>
      Hello, world.
      <code>
        {JSON.stringify(data, null, 2)}
      </code>
    </Layout>
  )
}

export default IndexPage;