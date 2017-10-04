import React, { Component } from 'react';



class Listindex extends Component{
    constructor(props){
      super(props);
    }

    handleDelete(){
      //this.props.onDelete();
    }

    render() {
          console.log(this.props);
       return(

           <li className="pet-item media">
           <div className="media-left">
            <button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete()}>
            <span className="glyphicon glyphicon-remove"></span></button>
           </div>
            <div className = " pet-info media-body">
               <div className="pet-head">
                 <span className="pet-name">{this.props.data.petName}</span>
                 <span className="apt-data pull-right">{this.props.data.aptDate }</span>
               </div>
               <div className="owner-name"><span className="label-item">Owner:</span>
               {this.props.data.ownerName}</div>
               <div className="apt-notes">{this.props.data.aptNotes}</div>
            </div>
         </li>
       )
    }
}

export default Listindex;
