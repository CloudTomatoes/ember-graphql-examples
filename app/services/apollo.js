import ApolloBaseService from 'ember-apollo-client/services/apollo';
import { inject as service } from '@ember/service';
import { setContext } from '@apollo/client/link/context';
import { Promise } from 'rsvp';

export default class ApolloService extends ApolloBaseService {
  @service
  session;

  link() {
    let httpLink = super.link();

    let authLink = setContext((request, context) => {
      return this._runAuthorize(request, context);
    });
    return authLink.concat(httpLink);
  }
  _runAuthorize() {
    if (!this.session.isAuthenticated) {
      return {};
    }
    return new Promise((success) => {
      let headers = {};
      let token = this.session.get('data.authenticated.token');
      headers['Authorization'] = `Bearer ${token}`;

      success({ headers });
    });
  }
}
