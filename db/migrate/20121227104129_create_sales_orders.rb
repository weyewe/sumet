class CreateSalesOrders < ActiveRecord::Migration
  def change
    create_table :sales_orders do |t|
      t.string :code 
      
      t.integer :customer_id 
      t.string  :code 

      t.timestamps
    end
  end
end
