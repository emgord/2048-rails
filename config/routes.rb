Rails.application.routes.draw do
  root "site#index"
  get '/login' => 'sessions#new'
  get '/logout' => 'sessions#destroy'
  get "/auth/:provider/callback", to:"sessions#create"
  resources :gamesetups
  post '/gamesetups/save' => 'gamesetups#save'
end
