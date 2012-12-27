class SalesOrder < ActiveRecord::Base
  has_many :sales_items 
end
