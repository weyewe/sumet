Ext.define('AM.view.salesorder.List' ,{
	extend		: 'AM.view.util.CrudList', 
  	// extend: 'Ext.grid.Panel',
  	alias : 'widget.salesorderlist',

	title : 'Sales Order',
	
  	store: 'SalesOrders', 

	// defaultTitle	: 'Sales Order',
	
 	columns	: [
		{ header: 'Code',  dataIndex: 'code',  flex: 1 , sortable: false} 
	],

	initComponent: function() { 
 

		this.callParent(arguments);
		
		this.addObjectButton.setText("Add");
		this.editObjectButton.setText("Edit");
		this.deleteObjectButton.setText("Delete");		
 	},

	// viewready		: function( grid, options ) {
	//  
	// },
	// 
	// cleanSlate		: function(){
	// 	this.callParent(arguments);
	// 	
	// 	this.setTitle( this.defaultTitle );
	//  
	// }
});