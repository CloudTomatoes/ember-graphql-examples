# Ember GraphQL examples

The repository is meant as a proof-of-concept for integrating EmberJs with GraphQL and our intention to use this combination.

## Goals

All API calls should be handles with a miragejs backend.

**Phase 1:** All API calls should be handles with a miragejs backend. The setup should be testable with ember test.

- [ ] Query a list
- [ ] Query a single record
- [ ] Query a single record with relationships

**Phase 2:** All API calls should be handles with a miragejs backend. The setup should be testable with ember test.
- [ ] Mutate a single record
- [ ] Mutate a single record with relationship
- [ ] Subscribe to a single record
- [ ] Subscribe to multiple records

**Phase 3:** Mercure implementation mutating the backend and subscribing to changes in the frontend.  The setup should be testable with ember test.

- [ ] Mutate a single record in the backend and see changes in the frontend 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ct-poc`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
