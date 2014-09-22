(function() {

  return {

    // defaultState: 'spinner',

    events: {
      'app.activated' : 'doSomething'
    },

    doSomething: function() {

      var currentAccount = this.currentAccount(),
          subdomain = currentAccount.subdomain(),
          ticket = this.ticket(),
          z = this.setting('id'), // id of custom drop down field used
          t = ticket.customField("custom_field_" + z), // custom field from settings
          a = 'api', // https://rfc.zendesk.com/hc/en-us/articles/203251130-API-API-API-ALL-DAY
          b = 'apps', // https://rfc.zendesk.com/hc/en-us/articles/203016354-APPS-APPS-APPS-ALL-DAY
          c = 'sso'; // https://rfc.zendesk.com/hc/en-us/articles/203016364-SSO-SSO-SSO-ALL-DAY

      if (t === a) {
        this.switchTo('results', {
          flowchart: a,
          answer: 'foo',
          subdomain: subdomain, 
          article: 203251130
        });
      } else if (t === b) {
        this.switchTo('results', {
          flowchart: b,
          answer: 'foofoo',
          subdomain: subdomain,
          article: 203016354
        });
      } else if (t === c) {
        this.switchTo('results', {
          flowchart: c,
          answer: 'foofoofoo',
          subdomain: subdomain,
          article: 203016364
        });
      }

    }
  };

}());
