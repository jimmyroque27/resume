import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ViewSection.css';


function ViewSection(props) {
  
   const listItems = props.listall? props.listall.map((listitem) =>
    <li className='list-group-item' key={listitem.id}>{listitem.title}</li>
  ):'';
  return (
    <div className='view-container'>
      <video src={window.location.origin +'/resume' + props.src} autoPlay loop muted />
        <div className='row profile-row'>
        <div className="col-sm-3 profile-col">
          <img className='profile-pic' src={props.pic ? window.location.origin+'/resume' + props.pic : window.location.origin+"/resume/images/jimmy.png"} alt =''/>
        </div>
        <div className="text-col col-sm-4">
          <h1>{props.title} </h1>
          <p>{props.caption}</p>
        
          <div className='view-btns'>
           
            {props.btn1 && <Button 
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              linkto={props.btn1link}
            >
              {props.btn1name}
            </Button>}
            {props.btn2 && <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
              linkto={props.btn2link}
            >
              {props.btn2name}
            </Button>}
          </div>
        </div>
        {props.listtitle ?<div className="col-sm-5 list-details">
          <ul className="list-group">
            <li className="list-group-item bg-warning">
              <h5>{props.listtitle}</h5>
            </li>
            {listItems}
          </ul>
          
        </div>: ''}
        </div>
    </div>
  );
}

export default ViewSection;
