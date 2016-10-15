import React from 'react';

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
  render: function(){
    return (
      <tr >
      {/* TODO */}
      </tr>

    ) ;
  }
});

var ContactList = React.createClass({
  render: function(){
    var contactRows = null ;  // TODO
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
    <ContactList contacts={this.props.contacts}  />
    </table>
    );
  }
});

var ContactsApp = React.createClass({
  render: function(){
    return (
      <div>
      <h1>Contact List.</h1>
    <ContactsTable contacts={this.props.contacts}  />
    </div>
    );
  }
});

export default ContactsApp;