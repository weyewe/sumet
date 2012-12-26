Ext.define('AM.model.Customer', {
  	extend: 'Ext.data.Model',
  	fields: [
    	{ name: 'id', type: 'int' },
    	{ name: 'name', type: 'string' } 
  	],

  	validations: [
    	{ type: 'presence', field: 'name' } 
  	],

  	idProperty: 'id' 
	
  
});
