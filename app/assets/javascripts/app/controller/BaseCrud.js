Ext.define('AM.controller.BaseCrud', {
  extend: 'Ext.app.Controller',

/*
	AM.controller.BaseCrud makes live a breeze for you guys that 
	wants to create master data: typical standard CRUD operation 
	
	Steps:
	1. your controller should extends AM.controller.BaseCrud
	2. specify these properties to your controller. Over here, your REST is User... 
	 	stores	: ['Users'],
		models	: ["User"],
		views	: [
			'user.List',
			'user.Form'
		],
		
		refs	: [
			{
				ref	: 'list',
				selector	: 'userlist'
			}
		],
		
		formSelector	: 'userform',
		listSelector	: 'userlist',
		backingStore	: 'Users',
		backingModel	: 'User'
		
	3. create The list 
		It must Extends util.CrudList.js  >> ensure you have the correct alias 
		
		alias		: 'widget.objectlist'
		store		: 'Objects'
		
		
	4. Create the Form
		It must extends util.CrudForm.js >> ensure that you have correct alias 
		
		objectform
		
		set title
		set items ( the fieds ) 
*/
  // 
  // stores: ['Users'],
  // models: ['User'],

	// views: [
	// 	'object.List',
	// 	'object.Form' 
	// ],

	// refs: [
	// 	{
	// 		ref: 'list',
	// 		selector: 'objectlist'
	// 	} 
	// ],
	
	formSelector	: undefined	,
	listSelector	: undefined	,
	backingStore	: undefined  ,
	backingModel	: undefined  ,
	
	constructor		: function(config){
		var me	= this; 
		var newRefs = [
			{
				ref			: 'list',
				selector	:  me.listSelector 
			}
		];
		
		me.refs	= me.refs? Ext.Array.merge( me.refs, newRefs)	: newRefs; 
		me.callParent( arguments ); 
	},
	


	init: function() {
		var me	= this ; 
		me.callParent( arguments);  
		
		var ctrlParams= {};
		
		
		ctrlParams[ me.listSelector ] = {
			selectionchange: me.selectionChange,
			itemdblclick: me.editObject
		};
		
		// ctrlParams[ me.listSelector ] = {
		// 	itemdblclick: me.editObject
		// };
		 
		ctrlParams[ me.formSelector + ' ' + 'button[action=create]' ] = {
			click: me.createObject
		};
		
		ctrlParams[ me.formSelector + ' ' + 'button[action=update]' ] = {
			click: me.updateObject
		};
		
		
		
		// userlist 
		// itemdblclick: this.editUser,
		//         selectionchange: this.selectionchange
		
		ctrlParams[me.listSelector	+ ' ' + 'button[action=addObject]'] = {
			click: me.addObject
		};
		 
		ctrlParams[me.listSelector	+ ' ' +  ' button[action=editObject]'] = {
			click: me.editObject
		};
		
		ctrlParams[ me.listSelector	+ ' ' + ' button[action=deleteObject]' ] = {
			click: me.deleteObject
		};
		
		me.control(ctrlParams );
		
		
		
		// this.control({
		// 	this.formSelector	+ ' ' + 'button[action=save]': {
		// 		click: this.updateObject
		// 	},
		// 	
		// 	this.listSelector : {
		// 		itemdblclick: this.editObject,
		// 		selectionchange: this.selectionChange
		// 	},
		// 	this.listSelector	+ ' ' + 'button[action=addObject]': {
		// 		click: this.addObject
		// 	},
		// 	this.listSelector	+ ' ' +  ' button[action=editObject]': {
		// 		click: this.editObject
		// 	},
		// 	this.listSelector	+ ' ' + ' button[action=deleteObject]': {
		// 		click: this.deleteObject
		// 	} 
		// 
		// });
	},
 

	addObject: function() {
		console.log("calling addObject from BaseCrud");
		var view = Ext.widget( this.formSelector  ); 
		view.show();
		
		view.setCreateMode();
		view.setTitle("Create Store");
		
		
		console.log("finished addObject from BaseCrud");
	},
	
	createObject	: function(button){
		console.log("GONNA CREATE NEW OBJECT");
		var win = button.up('window');
		var form = win.down('form');

		// var store = this.getUsersStore();
		// var store = this.getStore("Objects");
		var store = this.getStore( this.backingStore  );
		var record = form.getRecord();
		var values = form.getValues();
		var newObject = Ext.create( this.backingModel  ,  values );
		if( newObject.isValid() ){
			store.add( newObject);
			
			store.sync();
			this.getList().query('pagingtoolbar')[0].doRefresh(); 
			win.close(); 
		}else{
			var errors = newObject.validate();
			form.getForm().markInvalid(errors);
		} 
	},

	editObject: function() {
		console.log("Edit object cuuy");
		var record = this.getList().getSelectedObject(); 
		var view   = Ext.widget(	this.formSelector  ); 
		view.down('form').loadRecord(record);
		view.setUpdateMode(); 
		view.setTitle("Update Store");
	},

	
	
	
	updateObject: function(button) {
		console.log("GONNA UPDATE PAST OBJECT");
		var win = button.up('window');
		var form = win.down('form');

		// var store = this.getUsersStore();
		// var store = this.getStore("Objects");
		var store = this.getStore( this.backingStore  );
		var record = form.getRecord();
		var values = form.getValues(); 

 
		record.beginEdit(); 
		// if there is record present in the form, this must be an update
		record.set( values );
		// just by setting the values, the gridPanel is changed!!! FUCK!

		if( record.isValid() ) {
			// record.save(); 
			record.endEdit(); 
			// console.log("Gonna sync");
			store.sync(); 

			win.close(); 
		}else{ 
			// record is not valid 
			// record.endEdit(); 
			var errors = record.validate(); 
			form.getForm().markInvalid(errors);
			record.cancelEdit();
		} 
	},

	deleteObject: function() {
		// console.log("Delete bject from base crud");
		var record = this.getList().getSelectedObject();
		// get selected object always refers to the same id, despite deleted 
		// console.log("from the BaseCRUD:");
		console.log("BaseCrud#deleteObject => The selected record id is : " + record.get("id"));

		if (record) {
			// var store = this.getUsersStore();
			var store = this.getStore( this.backingStore ) ;
			console.log("Gonna remove record with id " + record.getId() );
			store.remove(record);
			store.sync();
			// to do refresh programmatically
			this.getList().query('pagingtoolbar')[0].doRefresh();
		}

	},

	selectionChange: function(selectionModel, selections) {
		// console.log("Shite man. in selectionChange");
		var grid = this.getList();

		if (selections.length > 0) {
			grid.enableRecordButtons();
		} else {
			grid.disableRecordButtons();
		}
	}

});
