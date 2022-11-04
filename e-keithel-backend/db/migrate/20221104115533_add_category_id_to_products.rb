class AddCategoryIdToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :categoryId, :integer
  end
end
