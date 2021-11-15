import { Factory, schema } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  id(i) {
    return i;
  },
  ownerId: 1,
  private() {
    return faker.datatype.boolean();
  },
  archived() {
    return faker.datatype.boolean();
  },
  createdAt() {
    return faker.date.past();
  },
  updatedAt() {
    return faker.date.past();
  },
  afterCreate(post, server) {
    post.update({
      information: server.create('project-information', {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        avatarUrl: faker.image.imageUrl(),
      }),
    });
  },
});
