import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
// import Cards from '../Cards';
import ViewSection from '../ViewSection';

function Profile() {
 
  return (
    <>
      <ViewSection 
        src= '/videos/video-1.mp4'
        title='PROFILE OF'
        caption = 'JIMMY R. SANTOS'
        btn1 = {true}
        btn1name = 'FREELANCE JOB'
        btn1link = '/contactus'
        btn2 = {false}
        btn2name = 'Request for Quotation'
        btn2link = '/contactus'
        listtitle ='Name: Jimmy Roque Santos'
        listall= {[{id:1,title:'Birth Date: September 27, 2978'}, 
          {id:2,title:'Contact Nos.: +63 906 533 6016'},
          {id:3,title:<span>Email: <Link to='../contactus' >jimmy.roque27@gmail.com</Link></span>},
          {id:4,title:'Address: Unit 305 Esla Urban Villa, Esla Homes, Sto. Domingo, Cainta, Rizal'},
          {id:5,title:"Height: 5'5 Weight: 70kgs "},
          {id:6,title:'Spouse Name: Rosemarie Santos'},
          {id:7,title:'Edest Son: Mark Jeremy Santos'},
          {id:8,title:'Daughter: Lady Jaimee Santos'},
          {id:9,title:'Youngest: Aaron James Santos'}
        ]}
         
         
      />
      {/* <Cards /> */}
      
    </>
  );
}

export default Profile;
