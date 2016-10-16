 import React from 'react';

var Form = React.createClass({
  render : function() {
	return (
	   <form style={{marginTop: '30px'}}>
		  <h3>Add a new post</h3>

		  <div className="form-group">
			<input type="text"
			  className="form-control"
			  placeholder="Title"></input>
		  </div>
		  <div className="form-group">
			<input type="text"
			className="form-control"
			placeholder="Link"></input>
		  </div>
		  <button type="submit" className="btn btn-primary">Post</button>
		</form>
		);
	}
 });

var NewsItem = React.createClass({
  render : function() {
	  var divStyle = {
		   fontSize: '20px', 
		   marginLeft: '10px' 
		  };
	  var cursor = { cursor: 'pointer' } ;
	  var line ;
	  if (this.props.post.link ) {
		 line = <a href={this.props.post.link} >
		{            this.props.post.title} </a> ;
	  } else {
		 line = <span>{this.props.post.title} </span> ;
	  }
	return (
		<div >
		  <span className="glyphicon glyphicon-thumbs-up"
				style={cursor} />
		  {this.props.post.upvotes}
		  <span style={divStyle}>{line}
			  <span>
			  <a href={'#/posts/' + this.props.post.id }>Comments</a>
			</span>
		  </span>
		</div>  
		);
  }
 }) ;

// TODO (missing component)

 var HackerApp = React.createClass({
   render: function(){
	return (
		<div className="container">
		  <div className="row">
			<div className="col-md-6 col-md-offset-3">
		 <div className="page-header">
		 <Form />
				 {/* TODO */}
		 </div>
		   </div>
		  </div>
		</div>
	);
  }
});

export default HackerApp;
