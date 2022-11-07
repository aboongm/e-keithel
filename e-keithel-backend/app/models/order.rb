class Order < ApplicationRecord
  belongs_to :product
  belongs_to :buyer, class_name: 'User'
  belongs_to :sellar, class_name: 'User'

  validates :product_id, presence: true
  validates :price, presence: true
  validates :quantity, presence: true
  validates :buyer_id, presence: true
  validates :sellar_id, presence: true  
end
