import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import LMDCover from '../src/Components/Assets/Img/commentHub.png';
import Graph1 from '../src/Components/Assets/Img/Insight.png';
import LMDHeader from '../src/Components/Assets/Img/TEHeader.jpg'
import LMDJourney from '../src/Components/Assets/Img/JourneyMap.png'
import LMDPersona from '../src/Components/Assets/Img/Persona.png'
import LMDIteration from '../src/Components/Assets/Img/iteration1.png'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {LinkContainer} from 'react-router-bootstrap';


const Styles = styled.div`

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

`;

export const TeamEcho = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="last mile delivery in action" src={LMDHeader} />
        <div className="mb-5"> </div>
</Container-fluid>

<Container>
       <Row>
       <div className="col-xl-12">
         <h1 className="tagHeader">TeamEcho Comment Hub</h1>
        </div>
       <div className="col-xl-12">
       <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Impact</Button>
       <Button href="#background" className = "tagStyling shadow-none" variant="outline-dark">Background</Button>
       <Button href="#research" className = "tagStyling shadow-none" variant="outline-dark">User Research</Button>
       <Button href="#prototype" className = "tagStyling shadow-none" variant="outline-dark">Prototype</Button>
       <Button href="https://www.teamecho.com/"className = "tagStyling shadow-none" variant="outline-dark" target="_blank">TeamEcho Website</Button>

       </div>
       </Row>
       <hr className = "mt-4 solid"></hr>
  </Container>

<Container>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-5 mb-5">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">
            Administrators of companies using the TeamEcho web-app need a way to filter employee feedback, respond to comments, add labels to categorize comments, and get quick insight into the topics that are getting the most attention.
            </p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4">The goal of the project was to design a web application for Administrators. The app allows them to see their filter, add labels and respond to comments.
            </p>
            <h5 className="subHeaderListCopy">Impact</h5>
            <ul className ="subHeaderListBodyCopy">
              <li>Improved the amount of comments by <b>10X</b>.</li>
              <li>Evolved the product <b>efficiency</b>.</li>
              <li>Increased Administrators replies per hour by <b>60%</b>.</li>
              <li>Reduced app congestion by <b>85%</b>.</li>
              <li>Increased employees satisfaction by <b>70%</b>.</li>
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
               <p>I was responsible for designing the app and optimising it throughout the pilot.</p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What I Did</h3>
               <ul className="whatIDidCopy">
                 <li>Lead the visual design for the entire web app. </li>
                 <li>Design System Manager</li>
                 <li>Collaboration with the pPM team for user research and strategy</li>
                 <li>Executive presentations to PM and CEO</li>
                 <li>Establishing and documenting patterns and best practices</li> 
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

<Container>
<a id = "background">
  <Row>
  <div className="col-xl-6">
    <h1 className ="projectBackgroundHeader">TeamEcho Comment Hub Background</h1>
    <h5 className="mt-4 projectBackgroundSubHeader">Feedback Culture Is Getting Worse</h5>
    <p className="projectBackgroundBody">Feedback culture in most organization is getting worse every year. This results in longer decision making period 
    and information dissemination between managers and employees.
    </p>
    <h5 className="mt-4 projectBackgroundSubHeader">A new way of capturing feedback</h5>
    <p className="projectBackgroundBody">TeamEcho GmbH comment hub aims to improve communication within teams and capture different insights on critical business challenges to strengthen business success & employer brand together.</p>
  </div>

  <div className="col-xl-6 mb-5">
  <div class="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8c6AVTJoyig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  </div>
  </Row>
  
</a>
</Container>

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
      <p className="fieldResearchBodyCopy">It was clear from the beginning of the project that we wanted to increase the number of comments from administrators to up to 80% in order to respond and react to employee comments and concerns. The web app will play a key role in achieving this goal, as administrators will be able to comment, flag and filter comments.
      </p>
      <h4 className="fieldResearchSubHeader mt-2">Key Metrics and Targets:</h4>
      <ul className="fieldResearchList">
        <li>Getting administrators to reply to 100+ comments per day.</li>
        <li className="mt-2">Labeling the comments based on actions.</li>
        <li className="mt-2">Adding new comments on replying existing comments successfully.</li>
        <li className="mt-2">Allowing administrators to filter comment hub.</li>
        <li className="mt-2">Allowing administrators to identify trending topics.</li>
      </ul>
    </div>
    <div className="col-xl-6 mt-5 mb-5">
    <img className = "metricPicture" alt ="LMD metrics for success" src={Graph1} />
    </div>
    </Row>
    <Row>
    <div className="col-12 mt-5">
    <h2 className="personaHeader">Persona For Our Administrators</h2>
    </div>
    <div className="col-12">
    <img className = "mt-3 headerJumbotronImage" alt ="last mile delivery in action" src={LMDPersona} />
    </div>
  </Row>
  </a>
  </Container>


<Container>
  <a id="research">
  <Row>
    <div className="col-12 mt-5">
    <h2 className = "fieldResearchHeader">Administrators journey</h2>
    </div>
    </Row>
    <Row>
    <div className="col-xl-6 mb-5 mt-3">
      <h4 className = "fieldResearchSubHeader"> Mapping users journey</h4>
      <p className="fieldResearchBodyCopy">I mapped out the users’ steps to see how I could simplify their journey to help them reach their most important goals with the product. 
      </p>
      <h4 className="fieldResearchSubHeader mt-2">Key Points:</h4>
      <ul className="fieldResearchList">
        <li>Diverse comments gives the business insight</li>
        <li className="mt-2">Administrators want to respond to pending comments and follow up with progress</li>
        <li className="mt-2">Filtering the comments currently is not user friendly </li>
        <li className="mt-2">Unattended comments gives employees a bad feeling </li>
      </ul>
    </div>
    <div className="col-xl-6 mb-5">
    <div>
             <img className = "projectPicture" alt ="roadside assistance app" src={LMDJourney} />
    </div>
    </div>
    </Row>
  </a>
  </Container>

  <Container>
  <Row>
    <div className="col-12 mt-5">
    <h2 className="usabilityHeader">Visual Design</h2>
    </div>
    </Row>
    <Row>
    <div className="col-xl-6 mb-5 mt-3">
      <h4 className="usabilitySubHeader">User Testing</h4>
      <p className="usabilityBodyCopy">We tested multiple versions with some administrators within the organization to get insight on the version that works best for them. Getting key insights without stating anything possible changes.
      </p>
      <h4 className="usabilitySubHeader">Key Findings</h4>
      <ul className="usabilityList">
        <li>Aesthetically pleasing user-interfaces were perceived as more useable </li>
        <li>Copy of the app can be misleading and confusing to administrators.</li>
        <li>The rating scores are very important to the admins.</li>
        
      </ul>
    </div>
    <div className="col-xl-6 mb-5">
        <div>
            <img className = "projectPicture" alt ="roadside assistance app" src={LMDIteration} />
        </div>
    </div>
    </Row>
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
        <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6cT5DgcNW8fRnxlmkd85aS%2FComments-Hub-Design-(Copy)%3Fnode-id%3D47%253A247%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D47%253A247" allowFullScreen />
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
                    <li className="takeawayListText mt-2">Comments feedback trail notification and keeping up with trail of comments.
                    </li>
                    <li className="takeawayListText mt-3">Adapting the filtering options to familiar actions by administrators.
                    </li>
                    <li className="takeawayListText mt-3">Defining the labels and its functions.
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
                    <p className="nextProjectSubHeaderCopy">Crawl</p>
                </div>
                </Row> 
                <Row>
                <div className="col-12">
                    <LinkContainer to = "/Crawl"> 
                    <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
        </Jumbotron>

      
      
</Styles>
)