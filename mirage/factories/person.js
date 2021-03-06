import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  firstName(i) {
    return `Tomster ${i}`;
  },
  lastName(i) {
    return `Ember ${i}`;
  },
  image: 'https://www.emberjs.com/images/tomsters/original-72df3a45.png',
});
