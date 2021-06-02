import React, { Component } from "react"
import './card-list.css';
import Card from '../card/card.component';

export default class ComponentList extends Component {
    constructor(props) {
        super(props);
         this.state={
            storyArray:[],
          };
    }

   
    
    render() {
        const storyArrray = [];
    
        for (let i = 0; i < this.props.array.length; i++) {
            let story = this.props.array[i]["story"]
            let timestamp = story["updated-at"]
            
            var todate=new Date(timestamp).getDate();
            var tomonth=new Date(timestamp).getMonth()+1;
            var toyear=new Date(timestamp).getFullYear();
            var original_date= tomonth+'-'+todate+'-'+toyear;
            storyArrray.push({
                title: story["headline"],
                imgUrl:  story["hero-image-s3-key"],
                date:  original_date,
                subheadline: story["subheadline"],
                id: story["id"]
                // description: chance.country({ full: true })

            });
        }
    
        // this.setState({
        //     storyArray: storyArrray 
        //   })
 
        // var array1 = dict["story"]
        return (
          <div className='card-list'>
            {storyArrray.map((story, index) => ( 
             <Card title = {story.title} imageUrl = {story.imgUrl} date ={story.date} subheadline = {story.subheadline} id = {story.id}/>
         ))}
          </div>
        );
      }
}