class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :activity_type, null: false
      t.date :date, null: false
      t.integer :hours, null: false
      t.integer :minutes, null: false
      t.integer :seconds, null: false
      t.float :distance, null: false
      t.string :title, null: false
      t.text :description
      t.time :time, null: false
      t.integer :user_id
      t.timestamps
    end
  end
end
