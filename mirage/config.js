import { createServer } from 'miragejs';
import { createGraphQLHandler } from '@miragejs/graphql';
import graphQLSchema from 'ct-poc/gql/schema.gql';

export default function () {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  return createServer({
    routes() {
      const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema);
      this.post('/graphql', graphQLHandler);
    },
  });
}
