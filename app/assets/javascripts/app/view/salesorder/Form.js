
Ext.define('AM.view.salesorder.Form', {
  extend: 'Ext.window.Window',
  alias : 'widget.salesorderform',

  	title : 'Add / Edit Sales Order',
  	layout: 'fit',
	width	: 500,
  	autoShow: true,  // does it need to be called?
// win.show() 
// if autoShow == true.. on instantiation, will automatically be called 
	
  initComponent: function() {
    this.items = [{
      xtype: 'form',
			msgTarget	: 'side',
      items: [{
        xtype: 'hidden',
        name : 'id',
        fieldLabel: 'id'
      }, {
        xtype: 'textfield',
        name : 'code',
        fieldLabel: 'Code'
      } ]
    }];

    this.buttons = [{
      text: 'Save',
      action: 'save'
    }, {
      text: 'Cancel',
      scope: this,
      handler: this.close
    }];

    this.callParent(arguments);
  }
});