import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    jqXHR.setRequestHeader('AuthorizationCode', 'code');
    jqXHR.setRequestHeader('AuthorizationProvider', 'provider');
  }
});
