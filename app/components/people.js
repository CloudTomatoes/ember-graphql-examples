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
    let variables = {
      id: person.id,
    };
    this.apollo
      .mutate({ mutation: deletePerson, variables: variables })
      .then((result) => {
        this.people= this.people.filter(item=>item.id!=person.id)
        console.log(result);
      });
  }
}
