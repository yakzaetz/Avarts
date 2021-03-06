Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, except: [:destroy] 
    resources :activities
    resources :routes 
  end 

  root "static_pages#root"
end
