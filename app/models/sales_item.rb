class SalesItem < ActiveRecord::Base
  belongs_to :sales_order
  
end
