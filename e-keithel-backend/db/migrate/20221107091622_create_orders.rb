class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :product_id
      t.decimal :price
      t.integer :quantity
      t.integer :buyer_id
      t.integer :seller_id

      t.timestamps
    end
  end
end
