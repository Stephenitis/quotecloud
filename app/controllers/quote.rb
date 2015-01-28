get '/quote/new' do
  @categories = Category.all
  erb :'/quote/new'
end

post '/quote/new' do
  quote = Quote.new(params[:quote])
  if quote.save
    "Success"
  else
    "Failed"
  end
end

get '/quote/all' do
  @quotes = Quote.all
  erb :'/quote/all'
end

get '/quote/category' do
  @categories = Category.all
  erb :'/quote/category'
end

get '/quote/category/:id' do |id|
  @category = Category.find(id)
  erb :'/quote/cat_all'
end

get '/quote/:id' do |id|
  @quote = Quote.find(id)
  erb :'/quote/single'
end