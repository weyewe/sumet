// problem: after create or update: will query for the new shite
// how can the paging toolbar embed the sales_order_id?
Ext.define('AM.view.salesitem.Form', {
	extend: 'AM.view.util.CrudForm',
  // extend: 'Ext.window.Window',
  alias : 'widget.salesitemform',

  	title : 'Add / Edit Sales Item',
  	layout: 'fit',
	width	: 500,
  	autoShow: true,  // does it need to be called?
// win.show() 
// if autoShow == true.. on instantiation, will automatically be called 
	
  initComponent: function() {
    this.items = [{
     	xtype: 'form',
		msgTarget	: 'side',
      	items: 	[
			{
				xtype: 'hidden',
				name : 'id',
				fieldLabel: 'id'
			}, 
			// {
			// 		xtype: 'hidden',
			// 		name : 'sales_order_id',
			// 		fieldLabel: 'sales_order_id'
			// 	},
			{
				xtype: 'textfield',
				name : 'code',
				fieldLabel: 'Code'
			}
 		]
    }];

    this.buttons = [
		{
			text: 'Save',
			action: 'save'
		}, {
			text: 'Cancel',
			scope: this,
			handler: this.close
		}
	];

    this.callParent(arguments);
  }
});