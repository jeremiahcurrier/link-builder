(function() {

  return {

    // defaultState: 'spinner',

    events: {
      'app.activated' : 'doSomething'
    },

    doSomething: function() {
      // this.switchTo('spinner');

      var currentAccount = this.currentAccount();
      var subdomain = currentAccount.subdomain();

      var ticket = this.ticket();
      console.log(ticket.customField("custom_field_22634584"));

      var y = ticket.customField("custom_field_22634584");
      console.log(y + "   < ---  this is y");
      
      var z = this.setting('id'); // id of custom drop down field used
      console.log(z);

      var t = ticket.customField("custom_field_" + z); // custom field from settings
      console.log(t + "   < ---  this is t");

      console.log(currentAccount.subdomain());

      var a = 'api', // https://rfc.zendesk.com/hc/en-us/articles/203251130-API-API-API-ALL-DAY
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
