class AddMobileToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :mobileNo, :decimal
  end
end
