class Gamesetup < ActiveRecord::Base

  def as_json(options = {})
    super(
      except: [:created_at, :updated_at, :json_cells]
    ).merge({cells: JSON.parse(json_cells)})
  end
end
