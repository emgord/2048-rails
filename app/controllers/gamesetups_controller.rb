class GamesetupsController < ApplicationController

  def index
    games = Gamesetup.all
    render :json => games.as_json,
    :status => :ok
  end
end
