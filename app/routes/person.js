import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from '../gql/queries/person.gql';

export default class PersonRoute extends Route {
  @service apollo;

  model(params) {
    let variables = { id: params.human_id };
    return this.apollo.watchQuery({ query, variables }, 'person');
  }
}
