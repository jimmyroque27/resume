import React from 'react';
 
import '../../App.css';
import ViewSection from '../ViewSection';

function Portfolio() {
 
  return (
    <>
      <ViewSection 
        src='/videos/video-5.mp4'
        title='PORTFOLIO OF'
        caption = 'JIMMY R. SANTOS'
        btn1 = {true}
        btn1name = 'FREELANCE JOB'
        btn1link = '/portfolio'
        btn2 = {false}
        btn2name = 'Request for Quotation'
        btn2link = '/contactus'
        listtitle ='Portfolio'
        listall= {[{id:1,title:
            
            <><a href ='http://itsinventory.herokuapp.com/' target='_blank' rel='noopener noreferrer'>POS - Inventory Management System </a>
                <br/>Git Source: <a href ='https://github.com/jimmyroque27/inventory2/tree/master' target='_blank' rel='noopener noreferrer'>https://github.com/jimmyroque27/inventory2</a>
                
            </>}, 
          {id:2,title:
            <> <br/>
            </>},
          {id:2,title:
            <> <br/>
            </>}
           
        ]}
         
         
      />
      {/* <Cards /> */}
      
    </>
  );
}

export default Portfolio;
