import { createGraphQLHandler } from '@miragejs/graphql';
import graphQLSchema from 'ct-poc/gql/schema.gql';

export default function () {
  const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema);
  this.post('/graphql', graphQLHandler);
}
