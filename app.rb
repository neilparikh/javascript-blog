require "bundler/setup"
require 'sinatra'
require 'json'

posts = {1 => {:title => "Hi People", :content => "This is my first post.", :id => 1},
         2 => {:title => "Hello World", :content => "This is my second post.", :id => 2}}

get '/' do
  @final = []
  posts.each do |key, value|
    @final << value
  end
  erb :index
end

# get '/posts' do
  # content_type :json
  # final = []
  # posts.each do |key, value|
    # final << value
  # end
  # final.to_json
# end

# get '/posts/:id' do
  # content_type :json
  # posts[params['id'].to_i].to_json
# end
