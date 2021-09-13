import EmberRouter from '@ember/routing/router';
import config from 'ct-poc/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('person', { path: '/:human_id' });
});
