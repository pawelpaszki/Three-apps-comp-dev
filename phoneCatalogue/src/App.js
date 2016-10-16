 import React from 'react';

    var SelectBox = React.createClass({
      render: function(){
           return (
             <div className="col-md-10">
            <input type="text" placeholder="Search" />
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
             </div>
            );
          }
       });


        // TODO (missing component)

    var FilteredPhoneList = React.createClass({
		render: function(){
			var displayedPhones = this.props.phones.map(function(phone) {
			  return <PhoneItem key={phone.id} phone={phone} /> ;
			}) ;
			return (
					<div className="col-md-10">
					  <ul className="phones">
						  {displayedPhones}
					  </ul>
					</div>
			  ) ;
		}
	});

    var PhoneCatalogueApp = React.createClass({
      render: function(){
          return (
              <div className="view-container">
              <div className="view-frame">
                 <div className="container-fluid">
                   <div className="row">
                       <SelectBox />
                       {/* TODO */}
                  </div> 
                  </div>                   
                </div>
              </div>
          );
      }
    });

    export default PhoneCatalogueApp;
