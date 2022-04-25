import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';
import RSAHeader from '../src/Components/Assets/Img/CRHeader.jpg';
import Craw from '../src/Components/Assets/Img/craw.png';
import UXFlow from '../src/Components/Assets/Img/RSAflow.png'
import CallingRSA1 from '../src/Components/Assets/Img/CallingRSA1.jpg';
import CallingRSA2 from '../src/Components/Assets/Img/CallingRSA2.jpg';
import CallingRSA3 from '../src/Components/Assets/Img/CallingRSA3.jpg';
import RecoveryRSAMap1 from '../src/Components/Assets/Img/RecoveryRSAMap1.jpg';
import RecoveryRSAMap2 from '../src/Components/Assets/Img/RecoveryRSAMap2.jpg';
import RecoveryRSAMap3 from '../src/Components/Assets/Img/RecoveryRSAMap3.jpg';
import Userresearch from '../src/Components/Assets/Img/design_process.png';
import FinalMockup1 from '../src/Components/Assets/Img/DigitalRSA.png';
import FinalMockup2 from  '../src/Components/Assets/Img/RSAHand.png';
import FinalMockup3 from  '../src/Components/Assets/Img/RSAGoldIphone.png';
import DigitalRSAUsers from  '../src/Components/Assets/Img/DigitalRSAUsers.gif';
import Swot from '../src/Components/Assets/Img/swot.png'
import EM from '../src/Components/Assets/Img/Empathy_Map.png'


const Styles = styled.div`

@media only screen and (max-width: 768px) {

  .tagHeader {
    font-size: 34px !important;
  }

  .tagStyling {
    margin-top: 12px;
  }
  
  .headerCopy {
    font-size: 1.7rem !Important;
  }

  
  .headerCopy {
    font-size: 1.5rem !important;
    
  }

  .subHeaderCopy{
    font-size: 1rem !important;
  }

  .bodyCopy {
    font-size: 0.98rem !important;
  }
    


 .myRoleHeaderCopy {
   font-size: 1.5rem !important;
 }

 .myRoleBodyCopy {
   font-size: 0.98rem !Important;
 }

 .whatIDidCopy {
  font-size: 0.98rem !Important;
 }

 .researchCopy {
  font-size: 0.98rem !Important;
 }

 .researchListCopy {
  font-size: 0.98rem!Important;
 }

 .uxFlowBodyCopy {
  font-size: 0.98rem !Important;w
 }

 .legalBodyCopy {
  font-size: 0.98rem!Important;
 }

 .takeawayHeaderCopy {
  font-size: 1.5rem !Important;
 }

 .headerJumbotronImage{
  height: auto !Important;
  margin-bottom: 0px!important;
}

 .userResearchPicture {
  height:auto;
  max-width:100% !important;
  border-readius:4px;

 }

 .myRoleHeader {
   margin-bottom: 50px!Important;
 }

 .projectPicture{
  height:auto !important;
  width:100% !important;
  border-radius: 4px;
}

 .flowProjectPicture {
  max-height:50vh !important;
  max-width:82vw !important;

 }

 .callingRSAImage {
  height:auto !important;
  width:100% !important;
  border-radius: 4px;

}

 .finalSoloutionImage {
  height:auto !important;
  max-width:100% !important;

 }

 .nextProjectSubHeaderCopy {
   font-size: 1.9rem !Important;
 }

}




.headerJumbotronImage {
  max-width: 100%; 
  height: auto;
  margin-bottom: 20px;
}

  .projectPicture{
     max-height: 340px;
     max-width:100%;
     border-radius: 4px;
  }

  .tagHeader{
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 150%;
    margin-bottom: 12px;
    color: black;
  }

  .tagStyling {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: black;
    margin-right: 12px;
    border-color: black;
    border-width: 1.5px;
  }

  .tagStyling:hover {
    background-color: white;
    font-weight: 600;
    color:#5D12FF;
    border-color: #5D12FF;
    transition: 0.2s ease-in;
  }

  .tagStyling:focus {
    color: white !important;
    background-color: #5D12FF!important;
    border-color: none !important;
    border-width: 1.5px !important;
    font-weight: 600;
  }



  .flowProjectPicture {
     height:auto;
     max-width:100%;
     border-radius: 4px;

  }

  .userResearchPicture {
    height:auto;
    max-width:100%;
    border-radius: 4px;

  }

 

  .headerCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.9rem;
    font-weight: bold;
    color: black;
    
  }

  .subHeaderCopy{
    font-family: Open Sans, sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: black;
    text-transform: uppercase;
  }

  .subHeaderListBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.06rem;
    color: black;
    list-style-type: disc;
    line-height: 2rem;
    padding-left: 15px;
  }

  .bodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.06rem;
    line-height: 26px;
    color: #202020;
  }

  .myRoleHeader {
    background-color: #7A56FF;
    margin-top: 50px;
    margin-bottom: 100px;

  }

   .myRoleHeaderCopy {
    font-family: Open Sans, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    
  }

  .myRoleBodyCopy {
    text-decoration:none;
    font-size: 1.1rem;
    font-family: Open Sans, sans-serif;
    color: white;
    list-style-type: none;
  }

  .whatIDidCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: white;
    list-style-type: disc;
    line-height: 2rem;
    padding-left: 15px;

  }
  
  .researchCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.05rem;
    color: #202020;

  }

  .researchListCopy {
    font-family: Open Sans, sans-serif;
    font-size: 0.95rem;
    color: #202020;
    list-style-type: disc;
    padding-left: 15px;

  }

  .uxFlowBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;

  }

  .uxFlowListStyle {
    padding-left: 15px;
  }

  .callingRSAImage {
    height: auto;
    width: 100%;
    border-radius: 4px;

  }

  .explorationImage {

    max-height:100vh;
    max-width:70vw;
    border-radius: 4px;

  }

  .legalBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;
  }

  .legalListStyle {
    padding-left: 15px;
  }

  .finalSoloutionImage {
    height: auto;
    max-width:100%;
    border-radius: 4px;
  }

  .takeawayJumbotron {
    background-color: #F7F7F7;
    margin-top: 50px;
  }

  .takeawayHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 150%;
  
  }

  .takeawayLine {
    border-top: 2px solid;
    color: black;
  }

  .takeawayListStyle {
    padding-left: 15px;
  }

  .takeawayListText {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 0.015em;
    color: #000000;

  }

  .nextProjectHeader {
    margin-top: 50px;
    background-color: #7A56FF;
    margin-bottom: 0px;
  }

  .nextProjectHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .nextProjectSubHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.55rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    }

    .mt-6 {
      margin-top: 60px;
    }
    .mt-8 {
      margin-top: 80px;
    }

}

 
    `;


export const Crawl = () => (

    
<Styles>

      <Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="roadside assistance app" src={RSAHeader} />
        <div className="mb-5"> </div>
      </Container-fluid>
    

     <Container>
       <Row>
       <div className="col-xl-12">
         <h1 className="tagHeader">Crawl Luxury App</h1>
        </div>
       <div className="col-xl-12">
       <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Impact</Button>
       <Button href="#wireframes" className = "tagStyling shadow-none" variant="outline-dark">Wireframes</Button>
       <Button href="#research" className = "tagStyling shadow-none" variant="outline-dark">User Research</Button>
       <Button href="#finalsolution"className = "tagStyling shadow-none" variant="outline-dark">Final Solution</Button>
       <Button href="https://www.novugrid.com/crawl"className = "tagStyling shadow-none" variant="outline-dark" target="_blank">Crawl Website</Button>

       </div>
       </Row>
       <hr className = "mt-4 solid"></hr>
     </Container>

      <Container>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-6 mb-5">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">Anyone that has ever tried finding a good cocktail bar, exhibition or night out in any city knows that it can be time-consuming and is painfully fragmented. The city has so much going on each day but trying to get away from the usual suspects isn’t always easy, especially for peeps who have lived for as long as they can remember in the city in question.
            </p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4"> Crawl is a simple to use platform that takes away the heavy lifting of trying to get inspired for a day or a night out in the city. It does this by offering a handful of location-based suggestions for what to do or where to go during the morning, daytime, evening, and night, or letting you browse by venue and event type to gain access to the top rate events and venues ensuring an exclusive and personal experience for YOU. </p>
            <h5 className="subHeaderCopy">Impact</h5>
            <ul className ="subHeaderListBodyCopy">
              <li>Crawl has helped with recommendation of places to over <b>2000+ customers</b>. </li>
              <li>Customer satisfaction for luxurious experience increased by <b>1.2X</b>.</li>
              <li>Crawl is increasing thc chances of visting over <b>200 restaurants and bars</b>.</li>
              <li>Crawl expands to location <b>outside Lagos, Nigeria</b>.</li>
            </ul>
          </div>
          <div className = "offset-xl-1 col-xl-5 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="Crawl app" src={Craw} />
          </div>
        </Row>
      </Container>

      <Jumbotron className = "myRoleHeader">
          <Container>
            <Row>
              <div className="col-md-5">
               <h3 className="myRoleHeaderCopy">My Role</h3>
               <div className="myRoleBodyCopy">
               <p>
                 I worked on the design of the interface znd experience design for version 2.0 on iOS and Android. 
               </p>
               <p> Tools: Figma; Duration: 1 month</p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What I Did</h3>
               <ul className="whatIDidCopy">
                 <li>UI/UX design for iOS and Android</li>
                 <li>Map out the UX flows</li>
                 <li>Research coordination</li>
                 <li>Executive presentations</li>
                 <li>Fostering relationships and understanding requirements with partners</li>
                 <li>QA support</li>
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

      <Container>
        <a id = "research">
        <Row className="mb-5">
          <div className = "col-md-12 col-lg-7 col-xl-7 ">
             <h3 className="headerCopy mb-3">My Design Process</h3>
            <img className = "mb-4 userResearchPicture" alt ="My design process" src={Userresearch} />
          </div>
          <div className = "col-lg-5 col-xl-5">
            <h3 className="headerCopy mb-3">Research</h3>
            <h5>The Problem</h5>
            <p> Good experiences makes people happy, improves mental health and reduces anxiety and so on.. Additionally, according to my observations, people are less likely to find new experiences, while others do not have enough time.</p>
            <ul className="researchListCopy">
            <li className="mb-3">They do not have enough time.</li>
            <li className="mb-3">People are too lazy to find new experiences.</li>
            </ul>

            <h5>Product Goals</h5>
            <ul className="researchListCopy">
              <li className="mb-3">Recommend the best places, experiences to customers.</li>
              <li className="mb-3">Get accurate and verified information about a plcae or an event.</li>
              <li className="mb-3">Get exclusive invites to events and places all within the Crawl app.</li>
              <li className="mb-3">Update your social calendar with the most exciting events happening around you.</li>
            </ul>
          </div>
        </Row>
      </a>

        <Row>
        <div className="col">
          <h3 className="mt-3 headerCopy mb-3">Competitive Analysis</h3>
          <div className="uxFlowBodyCopy">
          <p>I did a SWOT analysis with one of the best brands relevant to social experience which is InList.</p>
          <img className = "mb-4 userResearchPicture" alt ="My design process" src={Swot} />
          <p>InList app was used as a Benchmark to indicate the level our app needs to be at in terms of defining what a good user interface and experience design is.</p>
          </div>
          </div>
         </Row>

         <Row>
        <div className="col">
          <h3 className="mt-3 headerCopy mb-3">Empathy Mapping</h3>
          <div className="uxFlowBodyCopy">
          <p>Following the research done, I created an empathy map to put myself in the shoes of a customer looking to get some social experience. This was done to gain insight into their behavior and feelings.</p>
          <img className = "mb-4 userResearchPicture" alt ="My design process" src={EM} />
          </div>
          </div>
         </Row>

        
      <a id ="finalsolution">
            <Row>
            <div className="col-12 mt-3">
            <h1 className="prototypeHeader">Prototype</h1>
            </div>
            </Row>
            <Row>
                <div className="col-12 mt-3 mb-4">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnTJoPtT2NSQFfyec9kbiln%2FCrawl%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2" allowFullScreen />
                </div>
                </div>
            </Row>
        </a>
      </Container>

      <Jumbotron className="takeawayJumbotron">
        <Container>
            <Row>
            <div className="col-lg-6 md-12">
              <h3 className ="takeawayHeaderCopy">My Key Takeaways</h3>
              </div>
            </Row>
                <Row>
                  <div className="col-lg-4 col-md-4">
                     <hr className="takeawayLine mt-2 mb-0"></hr>
                  </div>
                </Row>
                <Row>
                <div className="col-lg-8 col-12">
                  <ul className="takeawayListStyle">
                    <li className="takeawayListText mt-2">Adding a This week feature to address the weekly events and places experience worked out really well.
                    </li>
                    <li className="takeawayListText mt-3">I would like to make data driven design decisions to understand how customers are engaging with events and their course of action.
                    </li>
                    <li className="takeawayListText mt-3">Working closely with the development team from the start of the project helped me understand what we could acheive to design a good social experience application.
                    </li>
                  </ul>
                </div>
                </Row> 
        </Container>
        </Jumbotron>

      <Jumbotron className="nextProjectHeader">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="nextProjectHeaderCopy">Next Project</h3>
              </div>
            </Row>
                <Row>
                <div className="col-lg-6 col-12">
                    <p className="nextProjectSubHeaderCopy">Seamconsult App</p>
                </div>
                </Row> 
                <Row>
                <div className="col-12">
                    <LinkContainer to = "/seamconsult"> 
                    <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
        </Jumbotron>


     
</Styles>

)