import { createGraphQLHandler } from '@miragejs/graphql';
import graphQLSchema from 'ct-poc/gql/schema.gql';

export default function () {
  this.logging = true;
  const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema);
  this.post('/graphql', graphQLHandler, 200);

  this.post('/api/auth', graphQLHandler, 200);
}
