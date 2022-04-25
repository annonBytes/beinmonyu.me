import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FPPHeader from '../src/Components/Assets/Img/GTHeader.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FPPCover from '../src/Components/Assets/Img/printcard.png';
import Graph1 from '../src/Components/Assets/Img/metric.png';
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

  .metricPicture {
    max-width: 100%;
    max-height: 300px;
  }


  .nextProjectSubHeaderCopy {
    font-size: 1.9rem !Important;
  }

  .nextProjectHeader {
    margin-top: 50px;
    background-color: #46557E;
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




export const GT = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="CV Vehicles" src={FPPHeader} />
        <div className="mb-5"> </div>
</Container-fluid>


<Container>
       <Row>
       <div className="col-xl-12">
         <h1 className="tagHeader">GTBank Instant Card Issuance</h1>
        </div>
       <div className="col-xl-12">
       <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Impact</Button>
       <Button href="#background" className = "tagStyling shadow-none" variant="outline-dark">Background</Button>
       <Button href="#video" className = "tagStyling shadow-none" variant="outline-dark">Video</Button>
       <Button href="https://www.gtbank.com/"className = "tagStyling shadow-none" variant="outline-dark" target="_blank">Product Website</Button>

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
            <p className="bodyCopy mb-4">Most of the people who flock to the banking halls come because of problems with misplaced cards. With the outbreak of the pandemic, it also became increasingly difficult to keep this number of people in the bank branch.</p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4"> We provide a service that will self-issue ATM cards less than 10 minutes without the help of a banking staff or even within the banking building </p>
            <a>
            <h5 className="subHeaderListCopy">Impact</h5>
            <ul className ="subHeaderListBodyCopy">
              <li>Released the application to branches <b>across Nigeria</b>.</li>
              <li>Reduced the queues at the branches <b>by 60%</b>.</li>
              <li>Increase in card issuance <b>by 40%</b>.</li>
            </ul>
          </a>
          </a>
          </div>
          <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="fordpass pro image" src={FPPCover} />
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
                 I worked in a team of two people to develop the web application.
               </p>
               <p> I was responsible for designing the User interface.</p>
               <p> I worked on the color theme.
               </p>
               <p> Designed the assets. </p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What I Did</h3>
               <ul className="whatIDidCopy">
                 <li>UI designer</li>
                 <li>Assets Design</li>
                 <li>Executive presentations to Stakeholders</li> 
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

      <Container>
      <a id = "impact">
        <Row>
            <div className="col-12 mt-5">
            <h2 className = "fieldResearchHeader">Measuring Impact And Success</h2>
            </div>
        </Row>
        <Row>
            <div className="col-xl-6 mb-5 mt-3">
            <h4 className = "fieldResearchSubHeader"> Managing Comments</h4>
            <p className="fieldResearchBodyCopy">
                It was clear from the beginning of the project that we wanted to 
                decrease the number of people in the banking hall by 60%. The web app will play a key role in achieving this goal. Also 
                we strive to minimize the time taken to get the ATM card with our application to less than 10 minutes
            </p>
            <h4 className="fieldResearchSubHeader mt-2">Key Metrics and Targets:</h4>
            <ul className="fieldResearchList">
                <li className="mt-2">Reducing the time to get ATM card to less than 10 minutes.</li>
                <li className="mt-2">Increasing revenue </li>
                <li className="mt-2">Increasing card issuance as people no longer have to worry about queues.</li>
                <li className="mt-2">Reducing the queues in the branches daily.</li>
            </ul>
            </div>
            <div className="col-xl-6 mt-5 mb-5">
                 <img className = "metricPicture" alt ="GT metrics for success" src={Graph1} />
            </div>
        </Row>
        </a>
    
      <a id="video">
       <Row>
        <div className="col-12 mb-5">
        <h1 className="headerCopy">Video Of App in Use</h1>
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="mt-3 embed-responsive-item" src="https://www.youtube.com/embed/FSuYk0CAXmY" allowfullscreen></iframe>
        </div>
        </div>
      </Row>
      </a>
      </Container>

      <Jumbotron className="nextProjectHeader">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="nextProjectHeaderCopy">Next Project</h3>
              </div>
            </Row>
                <Row>
                <div className="col-lg-6 col-12">
                    <p className="nextProjectSubHeaderCopy">Dispago App</p>
                </div>
                </Row> 
                <Row>
                <div className="col-12">
                    <LinkContainer to = "/dispago"> 
                       <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
      </Jumbotron>


 </Styles>


)

  