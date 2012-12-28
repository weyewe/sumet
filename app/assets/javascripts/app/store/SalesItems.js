// Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('AM.store.SalesItems', {
  	extend: 'Ext.data.Store',

  	model: 'AM.model.SalesItem',
  	// autoLoad: {start: 0, limit: this.pageSize},
	autoLoad	: false , 
  	autoSync: false,
	pageSize : 10, 
	
	proxy: {
		url: '/sales_items',
		type: 'rest',
		format: 'json',
	
		reader: {
			root: 'sales_items',
			record: 'sales_item',
			successProperty: 'success',
			totalProperty : 'total'
		},
	
			
		writer: {
			getRecordData: function(record) {
				return { sales_item : record.data };
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
