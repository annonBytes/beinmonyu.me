import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FPPHeader from '../src/Components/Assets/Img/SCHeader.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Userresearch from '../src/Components/Assets/Img/design_process.png';
import URD from '../src/Components/Assets/Img/Research_guides.png';
import filter from '../src/Components/Assets/Img/filter-options.png';
import SCM from '../src/Components/Assets/Img/Scm.png'
import session from '../src/Components/Assets/Img/session.png'
import dash from '../src/Components/Assets/Img/dashb.png'
import LMDPersona from '../src/Components/Assets/Img/persona3.png'
import {LinkContainer} from 'react-router-bootstrap';


const Styles = styled.div`


@media only screen and (max-width: 768px) {

  .tagHeader {
    font-size: 34px !important;
  }

  .tagStyling {
    margin-top: 12px;
  }

  .projectTitle {
    font-family: Open Sans, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: black;
  }

  .playlistCopy{
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    font-weight: black;
    color: black;
  }

}




.projectTitle {
  font-family: Open Sans, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
}


.tagHeader{
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
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


.playlistCopy{
  font-family: Open Sans, sans-serif;
  font-size: 1.4rem;
  font-weight: 550;
  color: black;
}

.headerJumbotronImage {
    max-width: 100%; 
    height: auto;
    margin-bottom: 20px;
  }

  .projectPicture {
      max-width: 100%;
      height:
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
  
  .subHeaderListCopy {
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
    font-size: 1.05rem;
    line-height: 26px;
    color: #202020;
  }

  .myRoleHeader {
    background-color: #2E2E2E;
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

  .FPPIcons {
    max-width: 100%;
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

  .nextProjectHeader {
    margin-top: 50px;
    background-color: #D94F00;
    margin-bottom: 0px;
  }

  .nextProjectHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 140%;
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

`;




export const Seamconsult = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="CV Vehicles" src={FPPHeader} />
        <div className="mb-5"> </div>
</Container-fluid>


<Container>
       <Row>
       <div className="col-xl-12">
         <h1 className="tagHeader">Seamconsult App</h1>
        </div>
       <div className="col-xl-12">
       <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Overview</Button>
       <Button href="#process" className = "tagStyling shadow-none" variant="outline-dark">Process</Button>
       <Button href="#prototype" className = "tagStyling shadow-none" variant="outline-dark">Prototype</Button>

       </div>
       </Row>
       <hr className = "mt-4 solid"></hr>
  </Container>

<Container>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-5 mb-5">
           <a id="background">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">Businesses and individuals alike need quality consultants to improve. But the cost to get quality consultation is high, 
             with the demand to meeting business and individual needs increasing, the market is left with even wider space to fill with quality experts limited due to geolocation limitations.                   
            </p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4"> We enable experienced specialists to provide consultation services to individuals, startups or companies. Our approach to consultation is unique, bringing value to people globally at the best rates.</p>
            <a id="impact">
            <h5 className="subHeaderListCopy">How it works</h5>
            <ul className ="subHeaderListBodyCopy">
              <li>Find the <b>best expert</b>.</li>
              <li>Schedule a <b>consultation</b>.</li>
              <li>Connect with your consultant through our <b>comprehensive video platform</b>.</li>
              <li>Give some feedback on the consultation. Rate your consultant experience..</li>
            </ul>
          </a>
          </a>
          </div>
          <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="fordpass pro image" src={SCM} />
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
                 I designed the Web, and mobile app on iOS and Android.
               </p>
               <p> I was responsible for creating the design system for the entire project.</p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What I Did</h3>
               <ul className="whatIDidCopy">
                 <li>UI designer</li>
                 <li>UX Research</li>
                 <li>Design System Manager</li>
                 <li>Research coordination</li>
                 <li>iOS and Android Development and QA support</li>
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

      <Container>
      <a id = "process">
      <Row className="mb-5">
          <div className = "col-md-12 col-lg-7 col-xl-7 ">
             <h3 className="headerCopy mb-3">My Design Process</h3>
            <img className = "mb-4 userResearchPicture" width={600} alt ="My design process" src={Userresearch} />
          </div>
          <div className = "col-lg-5 col-xl-5">
            <h3 className="headerCopy mb-3">Empathize</h3>
            <h5>Understanding the Target Audience -User App</h5>
            <p>I began this project by learning more about Seamconsult target market. My findings stated that the product is targeted at Business aged individuals and students seeking extra knowledge
              Seamconsult strives to bring good to people by giving them quality consultancy globally.
            </p>

            <h5>Understanding the Target Audience -Consultant App</h5>
            <p>The consultant app is targeted at experienced individuals with good knowledge in a specific field. The consultants have consultancy experience, or similar experience in the field they want to consult in.
              Seamconsult strives to bring good to people by giving them the platform to reach global impact.
            </p>
          </div>
        </Row>

        <Row className="mb-5">
        <div className = "col-lg-5 col-xl-5">
            <h3 className="headerCopy mb-3">Competitive Research</h3>
            <p>I studied a few consultancy applications across different industries to identify patterns and understand key offerings.</p>
            <ul className="researchListCopy">
              <li className="mb-3">Strong hierarchy and features positioning..</li>
              <li className="mb-3">Strong Branding and Interaction.</li>
              <li className="mb-3">The clarity in terms of features usage.</li>
              <li className="mb-3">Most of the application serviced only one industry.</li>
              <li className="mb-3">Incorporated chat and video call features.</li>
              <li className="mb-3">Mobile first focused and cheap services.</li>
              <li className="mb-3">Lengthy onboarding for consultants.</li>
            </ul>
          </div>

          <div className = "col-md-12 col-lg-7 col-xl-7 ">
            <img className = "mb-4 userResearchPicture" alt ="My design process" src={URD} />
          </div>
        </Row>

        <Row>
          <div className="col-12 mt-5 mb-4">
            <h2 className="personaHeader">User Persona - Meet Jessica & David</h2>
            <p>Based on the research we set up two personas. We referred to them throughout the entire product development process.</p>
          </div>
          <div className="col-12">
           <img className = "mt-3 headerJumbotronImage" alt ="last mile delivery in action" src={LMDPersona} />
          </div>
      </Row>
      </a>
      <a id="prototype">
        <Row className="mb-5 mt-5">
          <div className = "col-lg-5 col-xl-5">
              <h3 className="headerCopy mb-3">Prototype</h3>
              <h5>Experience 1 - Filtering</h5>
              <p>To help users narrow research results and find what they are looking for as quickly as possible, I placed 
                a filter button to the right top corner of the Home screen. I also added a number of sort and filtering options.
              </p>

              <p>
                The like button allows them to quickly favorite the profiles of consultants they are likely to consult with.
              </p>
            </div>

            <div className = "col-md-12 col-lg-7 col-xl-7 ">
              <img className = "mb-4 userResearchPicture" alt ="My design process" src={filter} />
            </div>
          </Row>

          <Row className="mb-5 mt-5">
          <div className = "col-lg-5 col-xl-5">
              <h5>Experience 2 - Schedule</h5>
              <p>On the User-app, customers can view their schedules. They can easily create new schedules with a consultant and
                start a lesson in quick steps with zero hassle.
              </p>

              <p>
                The payment method incorporates the wallet and other card based processing services. This allows customers to be able to 
                easily pay for a consultation.
              </p>
            </div>

            <div className = "col-md-12 col-lg-7 col-xl-7 ">
              <img className = "mb-4 userResearchPicture" alt ="My design process" src={session} />
            </div>
          </Row>

          <Row className="mb-5 mt-5">
          <div className = "col-lg-5 col-xl-5">
              <h3 className="headerCopy mb-3">Usability Test</h3>
              <p>
               To validate my proposed solutions. I asked 5 users to perform the following set of tasks using the prototype:
              </p>
              <ul className="takeawayListStyle">
                    <li className="takeawayListText mt-2">Add a Consultant to your favorite list.</li>
                    <li className="takeawayListText mt-3">Schedule your first lesson with "Jerry Chinonso".</li>
                    <li className="takeawayListText mt-3">Select an appropriate session time and date.</li>
                    <li className="takeawayListText mt-3">Pay with your credit card.</li>
                </ul>
                <p>
                   Surprisingly, all users managed to successfully complete all the task without any assistance. Although, they made some comments on
                   the copy and I considered their comments and made changes from "Begin Consultations" to "Book Consultations"
                </p>
            </div>

            <div className = "col-md-12 col-lg-7 col-xl-7 ">
              <img className = "mb-4 userResearchPicture" alt ="My design process" src={dash} />
            </div>
          </Row>

          <Row>
            <div className="col-12 mt-3">
              <h1 className="prototypeHeader">Prototype</h1>
            </div>
          </Row>

          <Row>
            <div className="col-12 mt-3 mb-4">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWAQnj5qOp6gwTbz6Unliq2%2FSeamconsult-v1.0%3Fnode-id%3D284%253A429%26scaling%3Dscale-down%26page-id%3D271%253A2694%26starting-point-node-id%3D284%253A390" allowFullScreen />
            </div>
            </div>
          </Row>

      </a>
      </Container>
  
      <Jumbotron className="takeawayJumbotron">
        <Container>
            <Row>
            <div className="col-lg-6 md-12">
              <h3 className ="takeawayHeaderCopy">Reflections</h3>
              </div>
            </Row>
                <Row>
                  <div className="col-lg-4 col-md-4">
                     <hr className="takeawayLine mt-2 mb-4"></hr>
                  </div>
                </Row>
                <Row>
                <div className="col-12">
                  <p className='col-md'>
                    I am pleased with the importance of finding out about competitors in the market and using them as a benchmark to design a better product
                    However, I underestimated the time it would take to finish the project. So next time I will set realistic deadlines, I would also love to conduct more
                    usability test to see where additional improvements could be made.

                    Thanks for taking time to read the case study.
                  </p>
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
                    <p className="nextProjectSubHeaderCopy">GTB Self Card Issuance</p>
                </div>
                </Row> 
                <Row>
                <div className="col-12">
                    <LinkContainer to = "/gt"> 
                    <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
      </Jumbotron>

 </Styles>


)

