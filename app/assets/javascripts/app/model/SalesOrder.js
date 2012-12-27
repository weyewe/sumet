Ext.define('AM.model.SalesOrder', {
  	extend: 'Ext.data.Model',
  	fields: [
    	{ name: 'id', type: 'int' },
    	{ name: 'code', type: 'string' } 
  	],

  	validations: [
    	{ type: 'presence', field: 'code' } 
  	],

  	idProperty: 'id' 
	
  
});
