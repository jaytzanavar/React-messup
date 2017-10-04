import React, { Component } from 'react';
//import logo from './logo.svg';
import './styles/App.css';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import Contents from './comps/content';
import Listindex from './comps/listindex';
import myData from './data.json';
import _ from 'lodash';


var state=this;
var MainInterface = React.createClass({


  getInitialState :() => {
      return {
        title: 'Appointments',
        notifications: true,
        data: []
      }
  },

  componentDidMount: function(){

      this.setState({data:myData})


  },

deleteMEssage: function (item){
  var allApts = this.state.myAppointments;
  var newApts = _.without(allApts, item);
  this.setState({
      data:newApts
  })
},
  render: function ()  {

    var filteredApts= this.state.data;
  //  console.log(filteredApts);
    filteredApts = filteredApts.map(function (item ,index){
          return(
                <Listindex key={index} data={item} whichItem={item} onDelete={ index }/>
          )
    })

    var displayList = {
       display : this.state.notifications ? 'block' : 'none',
       color:'red',
       backgroundColor:'#32c324'
    }

    var dataToShow ;

    const scale = this.props.scale;
    return (
      <div id='hanghere'>
        <h1>The Main Interface starts Here</h1>
        <h4>{this.state.notifications ? 'New': null } {this.state.title }</h4>
         <ul style={displayList}><li>Bluffy 11;30 pM</li>
         <li>Glasten 12:12</li>
         <li>Gloin 13:13</li>
         </ul>
         <div className="item-list media-list">

            <ul className = "item-list media-list">
              {filteredApts}
            {/*{<li className="pet-item media">
               <div className = " pet-info media-body">
                  <div className="pet-head">
                    <span className="pet-name">{this.state.data[0].petName}</span>
                    <span className="apt-data pull-right">{this.state.data[0].aptDate }</span>
                  </div>
                  <div className="owner-name"><span className="label-item">Owner:</span>
                  {this.state.data[0].ownerName}</div>
                  <div className="apt-notes">{this.state.data[0].aptNotes}</div>
               </div>
              </li>*/}

            </ul>
         </div>
      </div>

    )
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      ContentIsVisible : true
    }
  }

  onClick1(){
    console.log("click");
    this.setState({ContentIsVisible: !this.state.ContentIsVisible});
  }

  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
            <div className="initial">
              <img src={logo} className="App-logo" alt="logo" />
              </div>
            <div className="App-title">Welcome to the site</div>
        </div>*/}
        <div   onClick={() => this.onClick1()}>
          {
            this.state.ContentIsVisible ? <Contents />:null
          }
        </div>
        </div>




    );
  }


}

ReactDOM.render(<App/> , document.getElementById('navhead'));
registerServiceWorker();

ReactDOM.render( <MainInterface />, document.getElementById('petAppointments'));
