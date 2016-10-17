import _ from 'lodash';

var contacts = [
	{
		"name": "Contact 1",
		"address": "123 Test St",
		"phone_number": "132-3212"
	},

	{
		"name": "Contact 2",
		"address": "23 Main St",
		"phone_number": "934-4329"
	},

	{
		"name": "Contact 3",
		"address": "4 Lower St",
		"phone_number": "432-5832"
	},

	{
		"name": "Contact 4",
		"address": "49 Upper Street",
		"phone_number": "934-4290"
	}
  ] ; 

var stubAPI = {
	 delete : function(k) {
	   var elements = _.remove(contacts, 
		   function(contact) {
				 return contact.phone_number === k;
			  });
	   return elements; 
	 },
	 getAll : function() {
		 return contacts ;
	 },
	 add : function(n,a,p) {
	  var len = contacts.length ;
	  var newL_len = contacts.push({
		 name: n, address : a, phone_number: p }) ;
	  return newL_len > len ;
	 },
	 update : function(key,n,a,p) {
		var index = _.findIndex(contacts, function(contact) {
			 return contact.phone_number === key;
		  } );      
		if (index !== -1) {
		   contacts.splice(index, 1, {name: n, address: a, phone_number: p});
		   return true ;
		  }
	  return false ;
	 }
  }

export default stubAPI;