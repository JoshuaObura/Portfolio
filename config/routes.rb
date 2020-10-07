Rails.application.routes.draw do
  root to: 'pages#home'
 get '/resume', to: 'pages#resume', as: :resume
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
