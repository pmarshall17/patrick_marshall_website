Rails.application.routes.draw do

root 'landing_page#index'

  resources :landing_page do
  	resources :home_page
  end
end
