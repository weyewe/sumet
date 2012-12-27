Ext.define('AM.view.salesitem.List' ,{
	extend		: 'AM.view.util.CrudList', 
  	// extend: 'Ext.grid.Panel',
  	alias : 'widget.salesitemlist',

	title : 'Sales Item',
	
  	store: 'SalesItems', 
 	columns	: [
		{ header: 'Code',  dataIndex: 'code',  flex: 1 , sortable: false} 
	],

	initComponent: function() { 
 

		this.callParent(arguments);
		
		this.addObjectButton.setText("Add");
		this.editObjectButton.setText("Edit");
		this.deleteObjectButton.setText("Delete");		
 	},
	
	

	cleanSlate	: function(){
		// overriding the parent's method
		this.store.removeAll();
		console.log("Called cleanSlate from CRUDLIST");
	}
});