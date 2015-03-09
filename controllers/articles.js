Bustler.ArticlesController = Ember.Controller.extend({ 
  shareDisplayed: false,
  actions: {
    showShare: function() {
      this.set('shareDisplayed', true);
    },

     hideShare: function() {
      this.set('shareDisplayed', false);
    }
  }
});
