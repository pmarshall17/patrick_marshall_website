Rails.application.routes.draw do

root 'landing_page#index'

  resources :landing_page
  resources :home_page

end
