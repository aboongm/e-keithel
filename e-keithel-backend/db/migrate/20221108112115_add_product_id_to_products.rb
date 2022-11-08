class AddProductIdToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :productId, :integer
  end
end
