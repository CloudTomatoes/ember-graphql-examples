import EmberRouter from '@ember/routing/router';
import config from 'ct-poc/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('people', function () {
    this.route('person', { path: '/:person_id' }, function () {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('projects', function () {
    this.route('project', { path: '/:project_id' }, function () {
      this.route('edit');
    });
    this.route('new');
  });
});
