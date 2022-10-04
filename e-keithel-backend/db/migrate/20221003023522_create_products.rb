class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price
      t.integer :rating
      t.string :image

      t.timestamps
    end
  end
end
