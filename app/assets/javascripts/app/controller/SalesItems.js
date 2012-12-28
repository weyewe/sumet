/*
	We are trying to extend a base controller.
	But we haven't extended the view 
*/
Ext.define('AM.controller.SalesItems', {
	extend: 'AM.controller.ChildBaseCrud',

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
		
		console.log("SALESITEM: THe selected code is : " + selected.get("code"));
		console.log("THe selected id is : " + selected.get("id"));
		console.log("Gonna load the sales item for this sales order");
		
		this.getList().setTitle(selected.get("code") ); 
	},
	
	addObject		: function(){
		this.callParent(arguments); 
		var hiddenFields = Ext.ComponentQuery.query('salesitemform hidden');
		console.log("The length of hiddenfield: " + hiddenFields.length);
		console.log("THe first field classname: " + Ext.getClassName( hiddenFields[0] ) );
		
		console.log("Tryign with Ext.widget");
		var hiddenFields = Ext.widget( this.formSelector ).query('hidden');
		console.log("the length of 2nd hiddenfields: " + hiddenFields.length);
		console.log("THe 2nd field classname: " + Ext.getClassName( hiddenFields[0] ) );
		
		
		var hiddenField = Ext.widget( this.formSelector ).query('hidden[name="sales_order_id"]');
		// hiddenField is an array
		console.log(" the length of hiddenField: " + hiddenField.length );
		hiddenField = hiddenField.pop();
		console.log("THe hidden field classname: " + Ext.getClassName( hiddenField ) );
		// add the sales order id to the hidden field 
		
		var selections = this.getParentList().getSelectionModel().getSelection();
		var selected = selections[0];
		console.log("The selected code is : " + selected.get("code"));
		
		
		
		hiddenField.setValue(selected.get('id') );
		
	},
	
	editObject		: function(){
		
	}

 

});
