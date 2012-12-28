class SalesItemsController < ApplicationController
  
  
  def index
    # @users = User.limit(2).order("id DESC")
    # @parent_object = SalesOrder.find_by_id(params[:sales_item][:sales_order_id])
    extract_parent_object(params)
    @objects = @parent_object.sales_items.
                  page(params[:page]).
                  per(params[:limit]).order("id DESC")

    respond_to do |format|
      format.json { render :json => { :sales_items => @objects , :total => @parent_object.sales_items.count } }
    end
  end

  def create
    # @parent_object = SalesOrder.find_by_id(params[:sales_item][:sales_order_id])
    extract_parent_object(params)
    @object = @parent_object.sales_items.new(params[:sales_item])

    respond_to do |format|
      if @object.save
        format.json { render :json => { :success => true, :sales_items => [@object] , 
                                        :total => @parent_object.sales_items.count } }
      end
    end
  end

  def update
    # @parent_object = SalesOrder.find_by_id(params[:sales_item][:sales_order_id])
    extract_parent_object(params)
    @object = SalesItem.find(params[:id])
    # sleep 2 
    respond_to do |format|
      if @object.update_attributes(params[:sales_item])
        format.json { render :json => { :success => true, :sales_items => [@object],
                                        :total => @parent_object.sales_items.count  } }
      end
    end
  end

  def destroy
    extract_parent_object(params)
    @object = SalesItem.find(params[:id])
    @object.destroy

    respond_to do |format|
      format.json { render :json => { :success => true, :total => @parent_object.sales_items.count } }
    end
  end
  
=begin
  UTIL method 
=end
  
  def extract_parent_object(params)
    @parent_object = SalesOrder.find_by_id(params[:sales_order_id])
  end
  
  def extract_parent_object_from_submission(params)
    @parent_object = SalesOrder.find_by_id(params[:sales_item][:sales_order_id])
  end
end
