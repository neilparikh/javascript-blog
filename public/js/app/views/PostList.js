var PostListView = Backbone.View.extend({
  initialize: function() {
    this.item_views = [];
  },
  add_item: function(model) {
    var item = new PostItemView();
    this.item_views.push(item.render(model.renderReady()));
  },
  render: function() {
    var len = this.item_views.length;
    for (var i=0;i<len;i++) {
      this.$el.append(this.item_views[i].el);
    }
  }
});