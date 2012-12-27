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
		// {
		// 	ref: 'list',
		// 	selector: 'salesorderlist'
		// },
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
		
		this.callParent( arguments );
		
		// console.log("Additional logic on selection change");
		
		var selected = selections[0];
		
		
		
		// console.log("THe selected code is : " + selected.get("code"));
		// 	console.log("THe selected id is : " + selected.get("id"));
		// 	console.log("Gonna load the sales item for this sales order");
		// 	
		// 	
		// 	console.log("Total refs:" + this.refs.length ) ;
		//  
		// 
		// 	
		// 	for( var i =0; i < this.refs.length; i++){
		// 		var output = ''
		// 		var obj = this.refs[i];
		// 		for (property in obj) {
		// 	      output += property + ': ' + obj[property]+'; ';
		// 	    }
		// 	    console.log(output);
		// 	}
		// 	
		// 
	
		// this.getList().setTitle( this.composeChildListTitle(selected) );
		
		// this.getList().getSelectionModel().selectRow(0);
		// if( selected === undefined ){
		// 	console.log("selected is undefined");
		// }else{
		// 	console.log("It is not undefined");
		// 	var selectedRowIndex = this.getList().store.indexOf(selected); 
		// }
		// 
		// // fuck.. the selected is undefined.. the update hasn't propagated?
		// if(	selectedRowIndex !== undefined  ){
		// 	this.getList().getView().select(selectedRowIndex);
		// }else{
		// 	console.log(" it is UNDEFINED");
		// }
		
		
		
		// see this answer: xxxCreateValidate
		// http://stackoverflow.com/questions/6919131/extjs-4-grid-how-to-select-a-newly-created-record
		
		if( selected !== undefined ){
			this.getChildList().setTitle( this.composeChildListTitle(selected) );
		}
		
		
		// var grid = this.getList();
		// 
		// if (selections.length > 0) {
		// 	grid.enableRecordButtons();
		// } else {
		// 	grid.disableRecordButtons();
		// }
		
		// grid.getStore().data.filter(propertyKey, valueToSearchFor);
		
		// grid.getStore().data.items
		
		
		
	},
	
	composeChildListTitle	: function(selected){
		return '[' + selected.get("code") + ']' + " Sales Items ";
	},
	
	updateObject: function(button) {
		// update the title of the child 
		var win = button.up('window');
		var form = win.down('form');
		
	
		
		
		var record = form.getRecord();
		
		this.callParent(arguments);
		
		
		
		if( record !== undefined ){
			this.getChildList().setTitle( this.composeChildListTitle(record) );
			// this.getList().getSelectionModel.select( record );
					// 	
					// // this.getList().getSelectionModel().select(record,[false],[false]);
					// // Ext.getCmp('grid').getSelectionModel().selectRow(0);
					// var selectedRowIndex = this.getList().store.indexOf(record); 
					// console.log( "The selectedRowIndex: " + selectedRowIndex);
					// if( selectedRowIndex !== undefined ){
					// 	// this.getList().getSelectionModel.selectRow( selectedRowIndex );
				// this.getList().getView().select(record, true, true);
				// this.getList().getView().select(0);
			// }
			// console.log("Gonna execute");
			// var rowIndex = this.getSalesOrdersStore().find('id', record.getId()); 
			// 	        this.getList().getView().select(rowIndex);
	
			
			// http://stackoverflow.com/questions/9111084/remember-after-refresh-selected-row-in-extjs-grid
			
			
			// last one
			// http://www.sencha.com/forum/showthread.php?141718-programmatically-select-grid-panel-row-with-ExtJS4
			
			
			// store.load({
			//     scope: this,
			//     callback: function(records, operation, success) {
			//         // the operation object
			//         // contains all of the details of the load operation
			//         console.log(records);
			//     }
			// });
			// 
			// minified version
			// store.load(function(records, operation, success) {
			//     console.log('loaded records');
			// });
			
			// recommended usage
			// store.load({
			//     callback: function (records, operation, success) {        
			//         var rowIndex = this.find('id', record.getId());  //where 'id': the id field of your model, record.getId() is the method automatically created by Extjs. You can replace 'id' with your unique field.. And 'this' is your store.
			//         grid.getView().select(rowIndex);
			//     }
			// })
			
		}
		
	}

 

});
