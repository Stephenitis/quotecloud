class Like < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :liker, foreign_key: :liker_id, class_name: "User"
  belongs_to :quotes
end