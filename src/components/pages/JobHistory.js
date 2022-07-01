import React from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';
// import Cards from '../Cards';
import ViewSection from '../ViewSection';

function JobHistory() {
 
  return (
    <>
      <ViewSection 
        src='/videos/video-4.mp4'
        title='JOB HISTORY OF'
        caption = 'JIMMY R. SANTOS'
        btn1 = {true}
        btn1name = 'FREELANCE JOB'
        btn1link = '/jobhistory'
        btn2 = {false}
        btn2name = 'Request for Quotation'
        btn2link = '/contactus'
        listtitle ='Job History'
        listall= {[{id:1,title:
            <>FREELANCER / GRAB OPERATOR / SMALL BUSINESS 
                 
                <br/>MAY 2016 - PRESENT
            </>}, 
          {id:2,title:
            <>IT ASSOCIATE MANAGER  
            <br/>TRI7 SOLUTIONS INC. (SPORTS BETTING)
            <br/>APR 2014 MAY 2016
            </>}, 
          {id:2,title:
            <>ADMIN DIRECTOR / IT MANAGER 
                <br/>NUTRITECH ALLIANCE CORPORATION
                <br/>MAY 2003 - JUNE 2013

            </>},
          {id:3,title:
            <>WEB ADMINISTRATOR 
                <br/>PHILKRAFT MARKETING CORPORATION
                <br/>JAN 2002 - APR 2003


            </>},
          {id:4,title:
          <>JUNIOR TO SENIOR PROGRAMMER
              <br/>BUSINESSTOOLS SOFTWARE INC.
              <br/>AUG 2013 - MAY 2016

          </>}
        ]}
         
         
      />
      {/* <Cards /> */}
      
    </>
  );
}

export default JobHistory;
