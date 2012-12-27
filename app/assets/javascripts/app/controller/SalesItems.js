/*
	We are trying to extend a base controller.
	But we haven't extended the view 
*/
Ext.define('AM.controller.SalesItems', {
	extend: 'AM.controller.BaseCrud',

	stores: ['SalesItems'],
	models: ['SalesItem'],


	views: [ 
		'salesitem.List',
		'salesitem.Form'
	],

  	refs: [
		{
			ref: 'list',
			selector: 'salesitemlist'
		} 
	],
	
	formSelector	: 'salesitemform'	,
	listSelector	: 'salesitemlist'	,
	backingStore	: 'SalesItems'  ,
	backingModel	: 'AM.model.SalesItem'  ,
	
	selectionChange: function(selectionModel, selections) {
		
		this.callParent( arguments );
		
		console.log("Additional logic on selection change");
		
		var selected = selections[0];
		
		console.log("SALESITEM: THe selected code is : " + selected.get("code"));
		console.log("THe selected id is : " + selected.get("id"));
		console.log("Gonna load the sales item for this sales order");
		
		this.getList().setTitle(selected.get("code") );
		
		
		// var grid = this.getList();
		// 
		// if (selections.length > 0) {
		// 	grid.enableRecordButtons();
		// } else {
		// 	grid.disableRecordButtons();
		// }
		
		// grid.getStore().data.filter(propertyKey, valueToSearchFor);
		
		// grid.getStore().data.items
		
		
		
	}

 

});
