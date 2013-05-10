// Main app
$(function() {
  window.post_list = new PostListView({el: "#post_list"});
  window.post_view = new PostView({el: "#post_container"});
  window.blog_router = new Router();
  Backbone.history.start();
});