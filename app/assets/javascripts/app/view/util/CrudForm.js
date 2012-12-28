
Ext.define('AM.view.util.CrudForm', {
  extend: 'Ext.window.Window', 

  title : 'Add / Edit Store',
  layout: 'fit',
	width	: 500,
  autoShow: true,  // does it need to be called?
// win.show() 
// if autoShow == true.. on instantiation, will automatically be called 
	
  initComponent: function() { 
	this.buttons = [
		{
			text: 'Create',
			action: 'create'
		}, 
		{
			text	: "Update",
			action	: 'update'
		},
		{
			text: 'Cancel',
			scope: this,
			handler: this.close
		}
	];

    this.callParent(arguments);
  },

	setCreateMode	: function(){
		var createButton = this.query("button[action='create']").pop();
		var updateButton = this.query("button[action='update]").pop();
		
		createButton.setVisible( true );
		updateButton.setVisible( false ) ;
	},
	
	setUpdateMode	: function(){
		var createButton = this.query("button[action='create']").pop();
		var updateButton = this.query("button[action='update]").pop();
		
		createButton.setVisible( false );
		updateButton.setVisible( true ) ;
	}
});