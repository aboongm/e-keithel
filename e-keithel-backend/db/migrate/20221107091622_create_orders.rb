class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.decimal :amount
      t.integer :buyer_id

      t.timestamps
    end
  end
end
