import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import query from 'ct-poc/gql/queries/projects.gql';

export default class ProjectsIndexRoute extends Route {
  @service
  apollo;

  model(params = {}) {
    return this.apollo.query({ query }, 'project_list');
  }
}
