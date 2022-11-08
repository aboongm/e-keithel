class Order < ApplicationRecord
  belongs_to :product
  belongs_to :buyer, class_name: 'User'
  belongs_to :seller, class_name: 'User'

  validates :product_id, presence: true
  validates :price, presence: true
  validates :quantity, presence: true
  validates :buyer_id, presence: true
  validates :seller_id, presence: true  
end
