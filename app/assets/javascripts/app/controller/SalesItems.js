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
		'salesitem.Form',
		'salesorder.List'
	],

  	refs: [
		{
			ref: 'list',
			selector: 'salesitemlist'
		},
		{
			ref	: 'form',
			selector	: 'salesitemform'
		},
		{
			ref		: 'parentList',
			selector	: 'salesorderlist'
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
		
		if( selected  ) {
			console.log("SALESITEM: THe selected code is : " + selected.get("code"));
			console.log("THe selected id is : " + selected.get("id"));
			console.log("Gonna load the sales item for this sales order");

			// this.getList().setTitle(selected.get("code") );
		}
		
	}, 
 

});
