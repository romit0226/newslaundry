import React, { Component, View, Dimensions } from "react"
import './card.sytle.css';
// import AddFavourite from './fav'
import {BsHeartFill, BsHeart} from 'react-icons/bs';

export default class Card extends Component {
    constructor(props) {
        super(props);
         this.state={
            isFav: false,
          };
          this.clickedFav = this.clickedFav.bind(this)
    }
    clickedFav() {
      var id = this.props.id
      localStorage.setItem(id, !this.state.isFav);
      const isStoredAsFav = localStorage.getItem(id) === 'true';
      if (isStoredAsFav) {
        this.setState(prevState => ({
            isFav: !prevState.isFav
          }));
        } else {
          this.setState(prevState => ({
            isFav: false
          }));
          localStorage.removeItem(id)
        }
      }
    render() {
      var id = this.props.id
      var ccc =  localStorage.getItem(id)
      const isStoredAsFav = localStorage.getItem(id) === 'true';
      return(
    <div className='card-container'>
      <img  src= {"https://thumbor-stg.assettype.com/" + this.props.imageUrl} width = "100%" height="250" />
        <button onClick ={this.clickedFav} style = {{marginTop: 20}} > { !(this.state.isFav || isStoredAsFav)? <BsHeart/> : <BsHeartFill/>  } </button>
        <p style = {{marginTop: -30, marginRight: 30, fontWeight: 'bold'}}> {this.props.title}</p>
         <h5 style ={{marginTop: -1}}>Date : {this.props.date}</h5>   
        <p style= {{marginTop: -20}}>{this.props.subheadline}</p>
    </div>)
    }
  }
