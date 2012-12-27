/*
	We are trying to extend a base controller.
	But we haven't extended the view 
*/
Ext.define('AM.controller.SalesOrders', {
	extend: 'AM.controller.BaseCrud',

	stores: ['SalesOrders'],
	models: ['SalesOrder'],


	views: [
		'salesorder.List',
		'salesorder.Form' ,
		'salesorder.MainPanel'
	],

  	refs: [
		{
			ref: 'list',
			selector: 'salesorderlist'
		} 
	],
	
	formSelector	: 'salesorderform'	,
	listSelector	: 'salesorderlist'	,
	backingStore	: 'SalesOrders'  ,
	backingModel	: 'AM.model.SalesOrder'  ,
	
	selectionChange: function(selectionModel, selections) {
		
		this.callParent( arguments );
		
		console.log("Additional logic on selection change");
		// var grid = this.getList();
		// 
		// if (selections.length > 0) {
		// 	grid.enableRecordButtons();
		// } else {
		// 	grid.disableRecordButtons();
		// }
		
		
	}

 

});
