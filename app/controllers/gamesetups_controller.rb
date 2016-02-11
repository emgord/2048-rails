class GamesetupsController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :current_user
  skip_before_action :require_user

  def index
    @games = @current_user.gamesetups
  end

  def show
    game = Gamesetup.find(params[:id])
    render :json => game.as_json,
    :status => :ok
  end

  def create
    binding.pry
    game = Gamesetup.new()
    game.size = game_params[:grid][:size]
    game.score = game_params[:score]
    game.over = game_params[:over]
    game.won = game_params[:won]
    game.keepPlaying = game_params[:keepPlaying]
    game.json_cells = game_params[:grid][:cells]
    game.user_id = @current_user.id
    if game.save
      flash[:notice] = "Game successfully saved!"
    else
      flash[:error] =  "Game unable to save."
    end
    redirect_to root_path
  end

  def update
  end

  def game_params
    params.permit(:grid, :score, :over, :won, :keepPlaying)
  end
end
