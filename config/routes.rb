Rails.application.routes.draw do
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #rails views can also be used seperately
  namespace :api do 
    namespace :v1 do 
      resources :questions, only: [:index,:create,:destroy] do
        member do
          put :update_counter
        end
      end
    end
  end
end
