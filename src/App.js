import logo from './logo.svg';
import './App.css';
import Seachbox from './comp/Searchbox'
import Searchbox from './comp/Searchbox.js';
//import Card from './comp/Card.js'
import React, { Component, useState } from 'react';
import { render } from '@testing-library/react';
import CardList from './comp/card-list/componentList';

import {SearchBox} from './comp/search-box/search-box-component';


class App extends Component{
  constructor(){
    super();
    this.state={
      array:[],
      isLoaded: false,
      searchText: "",
      filterArray: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this) 
    this.handleChange = this.handleChange.bind(this) 
  }

  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/ace.qtstage.io/api/v1/collections/entertainment')
    .then(res => res.json())
    .then (json =>{
        this.setState(
          {
            isLoaded: true,
            array:json["items"] ,
            filterArray:json["items"],

          }
        )
    });
  }

  handleChange = e => {
    var arrTexts = this.state.array
    var arr = [];
    for (let index = 0; index < arrTexts.length; index++) {
      let headline = arrTexts[index]["story"]["headline"]
      if(headline.toLowerCase().includes(e.toLowerCase())) {
        arr.push(arrTexts[index])
      }
      
    }
    var finallength = this.state.array.length
    var ccc = arr.length
    if (ccc < finallength) {
      this.setState({filterArray:arr})

    }
  }



render() {
 
  // var array1 = dict["story"]
  return (
    <div className="App">
      
      <h3>Stories</h3>
      <SearchBox
       placeholder='Search Headline!'
       handlechange={e => this.handleChange(e.target.value)}
       />
      <CardList array={this.state.filterArray} />
     
      
     
    </div>
  );
}
}

export default App
