class ScoresController < ApplicationController
	def index
		@scores = Score.all 
	end

	def show 
	end
	
	def new
		@score = Score.new 
	end	

	def edit
	end

	def create
		@user = User.find(params[:id])
		@score = @user.score.create(score_params)
	end
	
	def update
	end

	private

	def score_params
		params.require(:score).permit(:highscore)		
	end
end
