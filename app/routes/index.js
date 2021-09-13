import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from '../gql/queries/allPeople.gql';

export default class IndexRoute extends Route {
  @service apollo

  model() {
    return this.apollo.watchQuery({ query }, 'people');
  }
}
