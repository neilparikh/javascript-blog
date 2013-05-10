var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    ":id": "show_post"
  },
  
  home: function() {
    post_view.$el.hide();
    post_list.$el.show();
    if (!this.rendered) {
      list.forEach($.proxy(post_list.add_item, post_list));
      post_list.render();
      this.rendered = true;
    }
  },
  
  show_post: function(id) {
    post_list.$el.hide();
    post_view.$el.show();
    var post = list.get(id);
    if (post) {
      post = post.renderReady();
    } else {
      post = {title: "Post not found", content: "The post you have requested was not found"};
    }
    post_view.render(post);
  }
});