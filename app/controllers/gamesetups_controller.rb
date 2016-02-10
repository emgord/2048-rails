class GamesetupsController < ApplicationController

  def index
    @games = @current_user.gamesetups
  end

  def show
    game = Gamesetup.find(params[:id])
    render :json => game.as_json,
    :status => :ok
  end

  def create
    raise
  end
end
