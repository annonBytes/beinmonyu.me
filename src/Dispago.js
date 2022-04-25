import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import LMDCover from '../src/Components/Assets/Img/pago.png';
import Graph1 from '../src/Components/Assets/Img/Graph1.jpg';
import iPhoneCamera from '../src/Components/Assets/Img/iPhoneCamera.jpg';
import DeliveryResults from '../src/Components/Assets/Img/DeliveryResults.gif';
import DeliveriesPerHour from '../src/Components/Assets/Img/DeliveriesPerHour.gif';
import LMDHeader from '../src/Components/Assets/Img/DPHeader.jpg'
import LMDMultiModal from '../src/Components/Assets/Img/MultiModal.png'
import LMDPersona from '../src/Components/Assets/Img/DDP.png'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {LinkContainer} from 'react-router-bootstrap';
import Userresearch from '../src/Components/Assets/Img/design_process.png';
import URD from '../src/Components/Assets/Img/ridehailing.png';


const Styles = styled.div `
@media only screen and (max-width: 768px) {
  .tagHeader {
    font-size: 34px !important;
  }
  .tagStyling {
    margin-top: 12px;
  }
}
.headerJumbotronImage {
  max-width: 100%; 
  height: auto;
  margin-bottom: 20px;
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
.projectPicture {
    max-width: 100%;
    max-height: 500px;
}
.headerCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.9rem;
  font-weight: bold;
  line-height: 140%;
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
  font-size: 1.06rem;
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
  font-size: 1.9rem;
  font-weight: bold;
  color: white;
  line-height: 140%;
  
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
.projectBackgroundHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;
}
.projectBackgroundSubHeader {
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 140%;
/* or 140% */
}
.projectBackgroundBody {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.06rem;
  line-height: 140%;
  /* or 120% */
  color: #202020;
  }
  
  .metricPicture {
    max-width: 100%;
    max-height: 300px;
  }
.fieldResearchHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;
}
.fieldResearchSubHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 150%;
  /* identical to box height, or 33px */
  letter-spacing: 0.01em;
  color: #000000;
}
.fieldResearchBodyCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.06rem;;
  line-height: 24px;
}
.fieldResearchList {
  font-family: Open Sans, sans-serif;
  font-size: 1.06rem;
  color: black;
  list-style-type: disc;
  padding-left: 15px;
  
}
.prototypeHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;
}
.usabilityHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 140%;
  color: black;
}
.usabilitySubHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 150%;
  /* identical to box height, or 33px */
  letter-spacing: 0.01em;
  color: #000000;
}
.usabilityBodyCopy{
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.06rem;
  line-height: 24px;
}
.usabilityList {
  font-family: Open Sans, sans-serif;
  font-size: 1.06rem;
  color: black;
  list-style-type: disc;
  padding-left: 15px;
  
}
.personaHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 28px;
  color: black;
}
.finalSoloutionImage {
  height:auto !important;
  max-width:100% !important;
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
  line-height: 140%;
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
  font-size: 1.08rem;
  line-height: 150%;
  letter-spacing: 0.015em;
  color: #000000;
}
.impactCopy {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.15rem;
  line-height: 140%;
  /* or 120% */
  color: #202020;
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

    .userResearchPicture {
        height:auto;
        max-width:100% !important;
        border-readius:4px;
      
       }
`;

export const Dispago = () => (

    <Styles>
    
    <Container-fluid>
            <img className = "headerJumbotronImage" 
            alt ="last mile delivery in action" src={LMDHeader} />
            <div className="mb-5"> </div>
    </Container-fluid>
    
    <Container>
           <Row>
           <div className="col-xl-12">
             <h1 className="tagHeader">Dispago Delivery App</h1>
            </div>
           <div className="col-xl-12">
           <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Impact</Button>
           <Button href="#background" className = "tagStyling shadow-none" variant="outline-dark">Background</Button>
           <Button href="#research" className = "tagStyling shadow-none" variant="outline-dark">User Research</Button>
           <Button href="#prototype" className = "tagStyling shadow-none" variant="outline-dark">Prototype</Button>
           <Button href="https://www.dispago.com/#_"className = "tagStyling shadow-none" variant="outline-dark" target="_blank">Dispago Website</Button>
    
           </div>
           </Row>
           <hr className = "mt-4 solid"></hr>
      </Container>
    
    <Container>
            <Row className="mt-5">
              <div className="col-md-5 col-xl-5 mb-5">
                <h3 className="headerCopy">Project Overview</h3>
                <h5 className="mt-4 subHeaderCopy">Problem</h5>
                <p className="bodyCopy mb-4">Dispatchers who deliver packages around town need a way to know what deliveries and pickups they need to make on the road so they can get their job done.</p> 
                <h5 className="subHeaderCopy"> Solution</h5>
                <p className="bodyCopy mb-4">The goal of the project was to develop a mobile delivery app for dispatchers. The app allows them to see their deliveries and pickups and accept delivery orders for the day.</p>
                <h5 className="subHeaderListCopy">Impact</h5>
                <ul className ="subHeaderListBodyCopy">
                  <li>Scaled the amount of deliveries per day by <b>10X</b>.</li>
                  <li>Evolved the product to <b>profitability</b>.</li>
                  <li>Increased deliveries per hour by <b>60%</b>.</li>
                  <li>Increased customer satisfaction by <b>120%</b>.</li>
                </ul>
              </div>
              <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
              <img className = "projectPicture" alt ="roadside assistance app" src={LMDCover} />
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
                    I'm responsible for User interface design for the project
                   </p>
                   </div>
                  </div>
                  <div className="offset-md-2 col-md-5">
                   <h3 className="myRoleHeaderCopy">Duration</h3>
                   <ul className="whatIDidCopy">
                     <li>1 week.</li>
                   </ul> 
                  </div>
                </Row>
              </Container>
          </Jumbotron>
    
    <Container>
    <a id = "background">
      <Row>
      <div className="col-xl-6">
        <h1 className ="projectBackgroundHeader">Dispago Delivery Background</h1>
        <h5 className="mt-4 projectBackgroundSubHeader">Congestion In Lagos Is Getting Worse</h5>
        <p className="projectBackgroundBody">
            Traffic congestion in megacities is increasing year by year. As a result, travel times are lengthening and air pollution in the city is getting worse. The average delivery time is hampered by traffic gridlock 
            especially during working hours.
        </p>
        <h5 className="mt-4 projectBackgroundSubHeader">A new way of delivering parcels</h5>
        <p className="projectBackgroundBody">Dispago aims to help ease congestion off the roads and save the envionment. We do this by delivering parcels within  <b>close-proximity</b> to riders.
        </p>
      </div>
    
      <div className="col-xl-6 mb-5">
      <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/m05DZxFvQv0" allowfullscreen></iframe>
      </div>
      </div>
      </Row>
    </a>
    </Container>
    
    <Container>
    <a id = "impact">
        <Row className="mb-5 mt-5">
          <div className = "col-md-12 col-lg-7 col-xl-7 ">
             <h3 className="headerCopy mb-3">My Design Process</h3>
            <img className = "mb-4 userResearchPicture" width={600} alt ="My design process" src={Userresearch} />
          </div>
          <div className = "col-lg-5 col-xl-5">
            <h3 className="headerCopy mb-3">Empathize</h3>
            <h5>Understanding the Target Audience</h5>
            <p>
              I began this project by learning more about Dispago target market. My findings stated that the product is targeted at 
              individuals and businesses looking to cover goods from one point to the other.
            </p>
          </div>
        </Row>

        <Row className="mb-5">
        <div className = "col-lg-5 col-xl-5">
            <h3 className="headerCopy mb-3">Competitive Research</h3>
            <p>I studied a few consultancy applications across different industries to identify patterns and understand key offerings.</p>
            <ul className="researchListCopy">
              <li className="mb-3">Locates nearest available courier for speedy pickup.</li>
              <li className="mb-3">Real-time status tracking for reliable delivery..</li>
              <li className="mb-3">Cashless payment for convenience.</li>
              <li className="mb-3">Most secured delivery and payment system.</li>
              <li className="mb-3">24/7 help provided in a case on an emergency.</li>
            </ul>
          </div>

          <div className = "col-md-12 col-lg-7 col-xl-7 ">
            <img className = "mb-4 userResearchPicture" alt ="My design process" src={URD} />
          </div>
        </Row>

        <Row>
        <div className="col-12 mt-5">
        <h2 className="personaHeader">Persona For Our Porters</h2>
        </div>
        <div className="col-12">
        <img className = "mt-3 headerJumbotronImage" alt ="last mile delivery in action" src={LMDPersona} />
        </div>
      </Row>
      </a>
      </Container> 
    
    <Container>
    <a id="prototype">
    <Row>
      <div className="col-12 mt-3">
      <h1 className="prototypeHeader">Prototype</h1>
      </div>
      </Row>
      <Row>
        <div className="col-12 mt-3 mb-4">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXDBR2GMvPAUuTM4IBVoU0v%2FDispago-new%3Fnode-id%3D2%253A457%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A457" allowFullScreen />
        </div>
        </div>
      </Row>
      </a>
      </Container>
    
      <Jumbotron className="takeawayJumbotron">
            <Container>
                <Row>
                <div className="col-lg-6 md-12">
                  <h3 className ="takeawayHeaderCopy">Key Challenges Faced</h3>
                  </div>
                </Row>
                    <Row>
                      <div className="col-lg-4 col-md-4">
                         <hr className="takeawayLine mt-2 mb-4"></hr>
                      </div>
                    </Row>
                    <Row>
                    <div className="col-lg-8 col-12">
                      <ul className="takeawayListStyle">
                        <li className="takeawayListText mt-2">Route planning for deliveries was not optimal, and dispatchers often had to fall back on themselves.
                        </li>
                        <li className="takeawayListText mt-3">Route tracking gave users more satisfaction as they could estimate likely delivery period and be available.
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
                        <p className="nextProjectSubHeaderCopy">Digital page turning</p>
                    </div>
                    </Row> 
                    <Row>
                    <div className="col-12">
                        <LinkContainer to = "/page-turning"> 
                        <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                        </LinkContainer>
                    </div>
                    </Row>
            </Container>
            </Jumbotron>
    
          
          
    </Styles>
    )