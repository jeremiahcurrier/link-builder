(function() {

  return {

    // defaultState: 'spinner',

    events: {
      'app.activated' : 'doSomething'
      // 'ticket.custom_field_{{reference_field_id}}.changed' : function(data) {
      //   var propertyName = data.propertyName;
      //   var newValue = data.newValue;
      //   console.log(propertyName);
      // }
    },

    doSomething: function() {
      this.switchTo('spinner');

      var ticket = this.ticket();
      console.log(ticket.customField("custom_field_22634584"));

      var x = 1;

      var y = ticket.customField("custom_field_22634584");
      console.log(y + "   < ---  this is y");
      
      var z = this.setting('id');
      console.log(z);

      var t = ticket.customField("custom_field_" + z);
      console.log(t + "   < ---  this is t");

      var a = 'api',
          b = 'apps',
          c = 'sso';

      if (x === 1) {
        this.switchTo('results', {
          flowchart: a,
          answer: 'google'
        });
      } else if (x > 1) {
        this.switchTo('results', {
          flowchart: b,
          answer: 'bing'
        });
      } else if (x < 1) {
        this.switchTo('results', {
          flowchart: c,
          answer: 'yahoo'
        });
      }

    }
  };

}());
