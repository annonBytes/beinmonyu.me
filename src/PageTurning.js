import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FPPHeader from '../src/Components/Assets/Img/PTHeader.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FPPCover from '../src/Components/Assets/Img/modality.png';
import Graph1 from '../src/Components/Assets/Img/inapp.png';
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




export const PageTurning = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="CV Vehicles" src={FPPHeader} />
        <div className="mb-5"> </div>
</Container-fluid>


<Container>
       <Row>
       <div className="col-xl-12">
         <h1 className="tagHeader">Digital Page turning while Playing the Piano</h1>
        </div>
       <div className="col-xl-12">
       <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Impact</Button>
       <Button href="#background" className = "tagStyling shadow-none" variant="outline-dark">Background</Button>
       <Button href="#video" className = "tagStyling shadow-none" variant="outline-dark">Video</Button>
       

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
            <p className="bodyCopy mb-4">While playing the paino, musicians often have to take their hands off the piano to interact with a digital sheet in other to turn the page and continue playing.</p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4"> We provide a solution that uses hands-free gestures to turn pages while playing the piano. The use of head movement and the wink of the eyes are perfect gestures.</p>
            <a>
            <h5 className="subHeaderListCopy">Impact</h5>
            <ul className ="subHeaderListBodyCopy">
              <li>Page turning with gestures <b>is seasmless</b>.</li>
              <li>It reduces touching the screen <b>by 100%</b>.</li>
              <li>Likelihood of making mistakes while playing reduces <b>by 20%</b>.</li>
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
                 I designed and developed the iOS User interface for the application.
               </p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">Duration</h3>
               <ul className="whatIDidCopy">
                 <li>1 week</li>
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
                decrease the page turning efforts by limiting the use of the hands while playing the piano.
            </p>
            <h4 className="fieldResearchSubHeader mt-2">Key Metrics and Targets:</h4>
            <ul className="fieldResearchList">
                <li className="mt-2">Reducing the page turning effort.</li>
                <li className="mt-2">Increasing page turning accuracy.</li>
                <li className="mt-2">Reducing page turning errors.</li>
            </ul>
            </div>
            <div className="col-xl-6 mt-5 mb-5">
                 <img className = "metricPicture" alt ="GT metrics for success" src={Graph1} />
            </div>
        </Row>
        </a>
      </Container>

      <Container>
        <a id="video">
            <Row>
            <div className="col-12 mt-3">
            <h1 className="prototypeHeader">Prototype</h1>
            </div>
            </Row>
            <Row>
                <div className="col-12 mt-3 mb-4">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzNTsid93kdwjkPkSd6NPOG%2FIOS-Modality-App%3Fnode-id%3D7%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D7%253A2" allowFullScreen />
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
                    <p className="nextProjectSubHeaderCopy">TeamEcho Comment Hub</p>
                </div>
                </Row> 
                <Row>
                <div className="col-12">
                    <LinkContainer to = "/teamecho"> 
                       <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
      </Jumbotron>


 </Styles>


)

  