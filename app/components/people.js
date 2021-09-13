import Component from '@glimmer/component';
import query from '../gql/queries/allPeople.gql';
import { queryManager } from 'ember-apollo-client';
import { tracked } from '@glimmer/tracking';

export default class PeopleComponent extends Component {
  @queryManager apollo;

  @tracked people;
  constructor() {
    super(...arguments);
    this.people = this.apollo.watchQuery({ query }, 'people');
  }
}
