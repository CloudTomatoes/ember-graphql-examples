import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import createPerson from '../gql/mutations/createPerson.gql';
import updatePerson from '../gql/mutations/updatePerson.gql';
import { inject as service } from '@ember/service';
import omit from 'lodash/omit';

export default class PersonComponent extends Component {
  @service
  apollo;

  @service
  router;

  @tracked
  person;

  constructor() {
    super(...arguments);
    if (this.args.model && this.args.model.id)
      //omit 'id', '__typename' from the person variable to passed to updatePerson
      this.person = { ...omit(this.args.model, 'id', '__typename') };
    // initialize for a new person
    else this.person = {};
  }

  @action
  save(event) {
    event.preventDefault();
    // edit person
    if (this.args.model && this.args.model.id) {
      let variables = { id: this.args.model.id, input: this.person };
      this.apollo
        .mutate({ mutation: updatePerson, variables })
        .then((result) => {
          this.router.transitionTo('people.person', result.updatePerson);
        });
    } else {
      //new person
      let variables = { input: this.person };
      this.apollo
        .mutate({ mutation: createPerson, variables })
        .then((result) => {
          this.router.transitionTo('people.person', result.createPerson);
        });
    }
  }
}
