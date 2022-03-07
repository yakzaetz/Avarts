class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :activity_type, null: false
      t.float :distance, null: false
      t.string :title, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
