class PrivateControllerController < ApplicationController
	before_action :authenticate_user!
  		
  		def index
  			@user= Users.all	
  		end


end
