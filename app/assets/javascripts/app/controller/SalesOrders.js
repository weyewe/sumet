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
		'salesorder.MainPanel',
		'salesitem.List'
	],

  	refs: [ 
		{
			ref :'childList',
			selector	: 'salesitemlist'
		}
	],
	
	formSelector	: 'salesorderform'	,
	listSelector	: 'salesorderlist'	,
	backingStore	: 'SalesOrders'  ,
	backingModel	: 'AM.model.SalesOrder'  ,
	
	selectionChange: function(selectionModel, selections) {



		// see this answer: xxxCreateValidate
		// http://stackoverflow.com/questions/6919131/extjs-4-grid-how-to-select-a-newly-created-record
		var selected = selections[0];
		if( selected !== undefined ){
			this.showChildList( selected ); 
		}

		this.callParent( arguments );

	},

	showChildList			: function( selected  ){
		var childList = this.getChildList();

		childList.setTitle( this.composeChildListTitle(selected) );
		childList.enableAddObjectButton(); 

		childList.store.proxy.extraParams.sales_order_id = selected.get("id"); 

		childList.store.load({
			params : {
				sales_order_id : selected.get("id")
			}
		});
	},

	composeChildListTitle	: function(selected){
		return '[' + selected.get("code") + ']' + " Sales Items ";
	},
	
	updateObject: function(button) {
		// update the title of the child 
		// var win = button.up('window');
		// var form = win.down('form');
		//  
		// var record = form.getRecord(); 
		this.callParent(arguments); 

		var record = this.getList().getSelectedObject();

		if( record !== undefined ){
			this.getChildList().setTitle( this.composeChildListTitle(record) ); 
		}

	},

	deleteObject: function() {

		var record = this.getList().getSelectedObject();
		if( record ) {
			console.log("SalesOrders#deleteObject => The selected record id is : " + record.get("id"));
		}else{
			console.log("SalesOrders#deleteObject => The record is undefined");
		}


		this.callParent(arguments);

		var childList = this.getChildList(); 
		childList.cleanSlate();
		// this.getList().getView().select(0); 
	},

 

});
