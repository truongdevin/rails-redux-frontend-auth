Rails.application.routes.draw do
  root to: 'static_pages#root'

  # namespace :api, defaults: {format: :json} do
  #   resources :users, only: [:create]
  # end

  post '/api/users', to: 'api/users#create'
  get 'api/sessions', to: 'api/sessions#fetch_session'
  post '/api/sessions', to: 'api/sessions#create'
  delete '/api/sessions', to: 'api/sessions#destroy'
end
