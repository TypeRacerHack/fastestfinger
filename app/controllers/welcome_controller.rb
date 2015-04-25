class WelcomeController < ApplicationController
  before_action :authenticate_user!
  def index
  	if user_signed_in?
  		render 'private_controller/index'
  	else 
  		render 'welcome_controller/index'
  end 
end
end
