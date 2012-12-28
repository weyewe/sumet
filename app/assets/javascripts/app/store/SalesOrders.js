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

	} ,
	onCreateRecords:function (records, operation, success) {
		console.log("onCreateRecords");
		// Ext.widget("salesorderlist").getView().select(records[0], true, true);
	},

	onUpdateRecords:function (records, operation, success) {
		// console.log("onUpdateRecords");
		// 
		// console.log("length of records: " + records.length );
		// var record = records[0];
		// // var salesOrderList = Ext.widget("salesorderlist");
		// var selectedRowIndex = this.indexOf(record); 
		// console.log("the row index: " + selectedRowIndex);
		// console.log("the id: " + record.getId());
		// 
		// // Ext.widget("salesorderlist").getView().select(selectedRowIndex);
		// Ext.widget("salesorderlist").getView().select(record, true, true);
	},

	onDestroyRecords:function (records, operation, success) {
		console.log("onDestroyRecords");
	}


});
