class PagesController < ApplicationController
	before_action :authenticate_user!
  def index
  	if user_signed_in?
  		render 'private_controller/index'
  	else 
  		render 'pages'
  end 
end
end
