class SiteController < ApplicationController

  def index
  end

  def load
    @game_id = params[:id]
  end

end
