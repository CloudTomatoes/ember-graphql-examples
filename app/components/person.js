import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import createPerson from '../gql/mutations/createPerson.gql';
import updatePerson from '../gql/mutations/updatePerson.gql';
import { inject as service } from '@ember/service';

export default class PersonComponent extends Component {
  @service
  apollo;

  @service
  router;

  @tracked
  person;

  constructor() {
    super(...arguments);
  }

  @action
  save() {
    let variables = this.person;
    console.log(variables);
    this.apollo.mutate(createPerson, variables).then((result) => {
      console.log(result);
      this.router.transitionTo('people.person', result);
    });
    console.log('test');
  }
}
