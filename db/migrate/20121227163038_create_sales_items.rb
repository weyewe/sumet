class CreateSalesItems < ActiveRecord::Migration
  def change
    create_table :sales_items do |t|
      t.integer :sales_order_id 
      t.string  :code 

      t.timestamps
    end
  end
end
