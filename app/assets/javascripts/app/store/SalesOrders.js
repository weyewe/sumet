// Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('AM.store.SalesOrders', {
  	extend: 'Ext.data.Store',

  	model: 'AM.model.SalesOrder',
  	// autoLoad: {start: 0, limit: this.pageSize},
	autoLoad	: false , 
  	autoSync: false,
	pageSize : 10, 
	
	proxy: {
		url: '/sales_orders',
		type: 'rest',
		format: 'json',
	
		reader: {
			root: 'sales_orders',
			record: 'sales_order',
			successProperty: 'success',
			totalProperty : 'total'
		},
			
		writer: {
			getRecordData: function(record) {
				return { sales_order : record.data };
			}
		}
	},
		
		
	sorters : [
		{
			property	: 'id',
			direction	: 'DESC'
		}
	], 

	listeners: {

	} 
});
