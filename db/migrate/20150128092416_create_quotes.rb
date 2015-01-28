class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.integer :submitter_id
      t.integer :category_id
      t.integer :like_id
      t.text :content
      t.string :author
      t.timestamps
    end
  end
end
