import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://otherhost:2300'
});
