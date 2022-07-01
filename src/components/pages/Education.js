import React from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';
// import Cards from '../Cards';
import ViewSection from '../ViewSection';

function Education() {
 
  return (
    <>
      <ViewSection 
        src='/videos/video-3.mp4'
        title='EDUCATION OF'
        caption = 'JIMMY R. SANTOS'
        btn1 = {true}
        btn1name = 'FREELANCE JOB'
        btn1link = '/contactus'
        btn2 = {false}
        btn2name = 'Request for Quotation'
        btn2link = '/contactus'
        listtitle ='Education'
        listall= {[{id:1,title:
            <>ASSOCIATE IN COMPUTER SCIENCE 
                <br/>Systems Technology Institute Cubao 
                <br/>June 1995 - March 1997
            </>}, 
          {id:2,title:
            <>SAN MIGUEL HIGH SCHOOL 
                <br/>SAN JUAN, SAN MIGUEL, BULACAN
                <br/>June 1991 - March 1995
            </>},
          {id:2,title:
            <>PINAMBARAN ELEMENTARY SCHOOL 
                <br/>PINAMBARAN, SAN MIGUEL, BULACAN
                <br/>June 1985 - March 1991
            </>}
           
        ]}
         
         
      />
     
      
    </>
  );
}

export default Education;
