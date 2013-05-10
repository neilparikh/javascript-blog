var PostItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.template = Handlebars.compile($("#post-item-template").html());
  },
  render: function(data) {
    this.$el.html(this.template(data));
    return this;
  }
});
