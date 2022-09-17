Rails.application.routes.draw do
  resources :products
  resource :users, only: [:create]

  post '/login', to: 'users#login'
end
