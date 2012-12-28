Ext.define('AM.view.salesitem.List' ,{
	extend		: 'AM.view.util.CrudList', 
  	// extend: 'Ext.grid.Panel',
  	alias : 'widget.salesitemlist',

	title : 'Sales Item',
	defaultTitle	: "Sales Item",
	
  	store: 'SalesItems', 
 	columns	: [
		{ header: 'Code',  dataIndex: 'code',  flex: 1 , sortable: false} 
	],

	initComponent: function() { 
 

		this.callParent(arguments);
		
		this.addObjectButton.setText("Add");
		this.editObjectButton.setText("Edit");
		this.deleteObjectButton.setText("Delete");	
		this.addObjectButton.setDisabled( true ) ;
 	},
	
	

	cleanSlate	: function(){
		// overriding the parent's method
		// this.store.removeAll();
		this.setTitle( this.defaultTitle );
		this.disableAddObjectButton(); 
		// console.log("Called cleanSlate from CRUDLIST");
	},
	
	enableAddObjectButton		: function(){
		this.addObjectButton.setDisabled( false ); 
	},
	
	disableAddObjectButton		: function(){
		this.addObjectButton.setDisabled( true ) ;
	}
	
});