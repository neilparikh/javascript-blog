var PostView = Backbone.View.extend({
  initialize: function() {
    this.template = Handlebars.compile($("#post-template").html());
  },
  render: function(data) {
    this.$el.html(this.template(data));
  }
});