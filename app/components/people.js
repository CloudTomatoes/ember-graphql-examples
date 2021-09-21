import Component from '@glimmer/component';
import peopleQuery from '../gql/queries/people.gql';
import deletePerson from '../gql/mutations/deletePerson.gql';
import { queryManager } from 'ember-apollo-client';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { action } from '@ember/object';

export default class PeopleComponent extends Component {
  @queryManager apollo;

  @tracked people;

  constructor() {
    super(...arguments);
    // let result = this.apollo.query({query: peopleQuery}, 'people');
    // console.log(result, 'results');
    // this.people = getObservable(result);
    // console.log(this.people);
    this.setupTable.perform();
  }

  get isLoading() {
    return this.setupTable.isRunning;
  }

  @task
  *setupTable() {
    this.people = yield this.apollo.query({ query: peopleQuery }, 'people');
    console.log(this.people);
  }

  @action
  delete(person) {
    console.log(person);
    let variables = {
      id: person.id,
    };

    let result = {};
    this.apollo
      .mutate({ mutate: deletePerson, variables: variables }, result)
      .then((result) => {
        console.log(result);
      });
  }
}
