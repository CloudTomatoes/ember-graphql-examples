import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginController extends Controller {
  @service session;
  @service router;

  @action
  login() {
    this.session
      .authenticate(
        'authenticator:oauth2',
        'hardcodedUsername',
        'hardcodedPassword'
      )
      .then(() => this.router.transitionTo('application'));
  }
}
