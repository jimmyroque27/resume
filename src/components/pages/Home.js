import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import ViewSection from '../ViewSection';

function Home() {
  return (
    <>
      <ViewSection 
        src='/videos/video-2.mp4'
        title='JIMMY R. SANTOS'
        caption = 'WEB DEVELOPER / PROGRAMMER'
        btn1 = {true}
        btn1name = 'FREELANCE JOB'
        btn1link = '/contactus'
        btn2 = {false}
        btn2name = 'Request for Quotation'
        btn2link = '/contactus'
        listtitle ='SKILLS SUMMARY'
        listall= {[{id:1,title:'Web Application/Design (PHP/Laravel/CSS/HTML/JavaScript/Ajax/React JS/J2SE/MySQL)'}, 
          {id:2,title:'Windows Application (Foxpro / Visual Basic)'},
          {id:3,title:'Graphic Design (Photoshop / Illustrator / Corel Draw / Canva)'},
          {id:4,title:'Video Editing  (Sony Vegas)'},
          {id:5,title:"Computer & Network Setup/Troubleshooting"},
          {id:6,title:'OS (Windows / Windows Server / Centos )'},
          {id:7,title:'MS Office'},
          {id:8,title:'Github/Trello'},
          {id:9,title:'Administrative Task (Accounting/Bookkeeping/Inventory/Customer Service/Sales Analysis)'}
        ]}
       
      />
      {/* <Cards /> */}
      
    </>
  );
}

export default Home;
