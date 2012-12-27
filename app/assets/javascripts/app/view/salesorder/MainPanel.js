
Ext.define('AM.view.salesorder.MainPanel' ,{
	// extend		: 'AM.view.util.CrudList', 
  	extend: 'Ext.panel.Panel',
  	alias : 'widget.salesordermainpanel',

	layout	: 'border',
	// title : 'Sales Order',
	//   	store: 'SalesOrders', 
	//  	columns	: [
	// 	{ header: 'Code',  dataIndex: 'code',  flex: 1 , sortable: false} 
	// ],
	// 
	// initComponent: function() { 
	//  
	// 
	// 	this.callParent(arguments);
	// 	
	// 	this.addObjectButton.setText("Add");
	// 	this.editObjectButton.setText("Edit");
	// 	this.deleteObjectButton.setText("Delete");
	// 	
	// 	// this.store.load();
	// }
	
	initComponent		: function(){
		var salesOrderList = this.buildSalesOrderList();
		var salesItemList	= this.buildSalesItemList();
		var salesItemDetails	= this.buildSalesItemDetails();
		
		var panel_items = [
			salesOrderList,
			salesItemList,
			salesItemDetails 
		];
		Ext.apply(this, {
			items	: panel_items
		})
		console.log("initcomponent of mainpanel");
		
		this.callParent(arguments);
		console.log("Done initcomponent of mainpanel");
		console.log("Total items: " +  this.items.length );
		
	},
	
	// items	: [
	// 	buildSalesOrderList(), 
	// 	buildSalesItemList(),
	// 	buildSalesItemDetails()
	// ],
	// 
	buildSalesOrderList	: function(){
		return {
			xtype	: "salesorderlist",
			region	: 'west',
			title	: "Sales Order",
			flex	: 1,
			
			collapsible	: true
		};
	},
	
	buildSalesItemList	: function(){
		return {
			xtype	: "panel",
			region	: 'center',
			html	: 'hehehhe',
			title	: "Sales Item",
			flex	: 3
		};
	},
	
	buildSalesItemDetails	: function(){
		return {
			xtype	: "panel",
			region	: 'east',
			html	: 'east data',
			title	: "Sales Item Details",
			flex	: 2
		};
	},
	
	cleanSlate	: function(){	
		// console.log("Calling the cleanSlate of mainpanel");
		// console.log("Total items: " + this.items.length);
		// 
		// console.log("This classname: " + Ext.getClassName( this ) );
		// Ext.getCmp('salesorderlist').store.load();
		this.items.each( function(item){
			// console.log("inside the item");
			// console.log("THE classname: " + Ext.getClassName( item ) );
			if(item.cleanSlate){
				// console.log("THE classname with CleanSlate: " + Ext.getClassName( item ) );
				item.cleanSlate();
				// item.store.load();
			}
		});
	}
});