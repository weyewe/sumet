class SalesOrdersController < ApplicationController
  
  
  def index
    # @users = User.limit(2).order("id DESC")
    
    @objects = SalesOrder.page(params[:page]).per(params[:limit]).order("id DESC")

    respond_to do |format|
      format.json { render :json => { :sales_orders => @objects , :total => SalesOrder.all.count } }
    end
  end

  def create
    @object = SalesOrder.new(params[:sales_order])

    respond_to do |format|
      if @object.save
        format.json { render :json => { :success => true, :sales_orders => [@object] , 
                                        :total => SalesOrder.all.count } }
      end
    end
  end

  def update
    @object = SalesOrder.find(params[:id])
    # sleep 2 
    respond_to do |format|
      if @object.update_attributes(params[:sales_order])
        format.json { render :json => { :success => true, :sales_orders => [@object],
                                        :total => SalesOrder.all.count  } }
      end
    end
  end

  def destroy
    @object = SalesOrder.find(params[:id])
    @object.destroy

    respond_to do |format|
      format.json { render :json => { :success => true, :total => SalesOrder.all.count } }
    end
  end
end
