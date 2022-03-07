class Route < ApplicationRecord

    validates :activity_type, :distance, :title, :user_id, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

end 