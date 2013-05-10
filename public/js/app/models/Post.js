var Post = Backbone.Model.extend({
  urlRoot: '/posts',
  renderReady: function() {
    return {id: this.get("id"),
            title: this.get("title"),
            content: this.get("content")};
  }
});