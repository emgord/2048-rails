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

  def save
    raise
  end

  def create
    raise
    redirect_to root_path
  end

  def update
  end
end
