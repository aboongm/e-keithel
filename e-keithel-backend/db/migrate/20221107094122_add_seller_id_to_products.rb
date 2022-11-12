class AddSellerIdToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :seller_id, :integer
  end
end
