class Activity < ApplicationRecord

    validates :activity_type, :date, :hours, :minutes, :seconds, :distance, :title, :time, :user_id, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

end 