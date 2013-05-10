var PostList = Backbone.Collection.extend({
  model: Post,
  url: "/posts"
});