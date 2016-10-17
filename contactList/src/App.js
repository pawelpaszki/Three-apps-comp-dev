import React from 'react';
import api from './test/stubAPI';
import buttons from './config/buttonsConfig';

var ContactForm = React.createClass({
  render: function(){
    return (
      <tr>
      <td>
      <input type="text" className="form-control" />
      </td>
      <td>
      <input type="text" className="form-control"/>
      </td>
      <td>
      <input type="text" className="form-control" />
      </td>
      <td>
      <input type="button" className="btn btn-primary" value="Add"/>
      </td>
      </tr>
    )
  }
});

var Contact = React.createClass({
  getInitialState : function() {
	return {
		status : '',
		name: this.props.contact.name,
		address: this.props.contact.address,
		phone_number: this.props.contact.phone_number
	   } ;
	},
	handleEdit : function() {
		 this.setState({ status : 'edit'} )
	},    
	handleCancel : function() {
		 this.setState({ status : '', 
				 name: this.props.contact.name,
				 address: this.props.contact.address,
				 phone_number: this.props.contact.phone_number} ) ;
	}, 
	handleSave : function(e) {
		e.preventDefault();
		var name = this.state.name.trim();
		var address = this.state.address.trim();
		var phone_number = this.state.phone_number.trim();
		if (!name || !address || !phone_number) {
		  return;
		}
		this.props.updateHandler(
				this.props.contact.phone_number,
				name,address,phone_number);
		this.setState({status : ''} )
	}, 
	handleNameChange: function(e) {
		this.setState({name: e.target.value});
	},
	handleAddressChange: function(e) {
	   this.setState({address: e.target.value});
	},
	handlePhoneNumChange: function(e) {
	   this.setState({phone_number: e.target.value});
	},
  render: function(){
   var activeButtons = buttons.normal ;
   var leftButtonHandler = this.handleEdit ;
   var rightButtonHandler = null ;
   var fields = [
		 <td key={'name'} >{this.state.name}</td>,
		  <td key={'address'}>{this.state.address}</td>,
		  <td key={'phone_number'}>{this.state.phone_number}</td>
	   ] ;
	   if (this.state.status === 'edit' ) {
		   activeButtons = buttons.edit ;
		   leftButtonHandler = this.handleSave;
		   rightButtonHandler = this.handleCancel ;
		   fields = [
			  <td key={'name'}><input type="text" className="form-control"
				 value={this.state.name}
				 onChange={this.handleNameChange} /> </td>,
			  <td key={'address'}><input type="text" className="form-control"
				 value={this.state.address}
				 onChange={this.handleAddressChange} /> </td>,
			  <td key={'phone_number'}><input type="text" className="form-control"
				 value={this.state.phone_number}
				 onChange={this.handlePhoneNumChange} /> </td>,
		   ] ;
	   }
  return (
		<tr >
		  {fields}
		  <td>
			  <input type="button" className={'btn ' + activeButtons.leftButtonColor} 
					 value={activeButtons.leftButtonVal}
					 onClick={leftButtonHandler} />
		  </td>
		  <td>
			 <input type="button" className={'btn ' + activeButtons.rightButtonColor} 
				   value={activeButtons.rightButtonVal} 
				   onClick={rightButtonHandler} />
		  </td>
		  </tr>
	   ) ;
	}
});

var ContactList = React.createClass({
  render: function(){
	   var contactRows = this.props.contacts.map(function(contact){
			return (
			 <Contact key={contact.phone_number}  contact={contact} 
				updateHandler={this.props.updateHandler} />
			  ) ;
		  }.bind(this) );
	   return (
      <tbody >
    {contactRows}
    <ContactForm />
    </tbody>
    ) ;
  }
});

var ContactsTable = React.createClass({
  render: function(){
    return (
      <table className="table table-bordered">
      <thead>
      <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Phone Number</th>
    <th></th>
    <th></th>
    </tr>
    </thead>
    <ContactList contacts={this.props.contacts} 
                    updateHandler={this.props.updateHandler}  />
    </table>
    );
  }
});

var ContactsApp = React.createClass({
  updateContact : function(key,n,a,p) {
	 if (!api.update(key,n,a,p) )  { 
		  this.setState({});  
	  } 
  }, 
  render: function(){
    var contacts = api.getAll();
	  return (
		<div>
		   <h1>Contact List.</h1>
		  <ContactsTable contacts={contacts} 
                    updateHandler={this.updateContact}  /> 
		</div>
	  );
  }
});

export default ContactsApp;