
Ext.define('AM.view.store.Form', {
  extend: 'AM.view.util.CrudForm',
  alias : 'widget.storeform',

  title : 'Add / Edit Store',
  layout: 'fit',
	width	: 500,
  autoShow: true,  // does it need to be called?
// win.show() 
// if autoShow == true.. on instantiation, will automatically be called 
	
  initComponent: function() {
	this.items = [
		{
			xtype: 'form',
			msgTarget	: 'side',
			items: [
				{
					xtype: 'hidden',
					name : 'id',
					fieldLabel: 'id'
				}, 
				{
					xtype: 'textfield',
					name : 'name',
					fieldLabel: ' Name'
				} 
			]
		}
	];

 
    this.callParent(arguments);
  } 
});