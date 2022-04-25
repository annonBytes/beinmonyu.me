import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import profileRounded from '../src/Components/Assets/Img/bigbytes.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeedsAtHome from '../src/Components/Assets/Img/DeedsAtHome.png';
import Covid19 from '../src/Components/Assets/Img/Covid19.png';
import Yuumi from '../src/Components/Assets/Img/Yuumi.png';






const Styles = styled.div`


@media only screen and (max-width: 768px) {

    .headerStyle {
        font-size: 2.15rem !important;
    }

    .profilePicture {
        border-radius: 99em !Important;
        max-width: 135px !important;
        max-height: 135px !important;
    }

}


.headerJumbotron {

    background-color: #F7F7F7;

}
.headerStyle {
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 150%;
    color: black;
}

.subHeaderText {
    font-family: Open-Sans, sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;
    color: black;
    margin-bottom: 0.8rem !important;
}

.bodyHeaderText {
    font-family: Open-Sans, sans-serif;
    font-size: 1.02rem;
    line-height: 26px;
    color: #202020;
}

 .profilePicture {
     border-radius: 99em !Important;
     max-width: 250px;
     max-height: 250px;
 }



 .fancy-line {
     background: #9665FF;
     border-radius: 10px;
     height: 2px;
 }


 .TLDRHeader {
     font-family: Open Sans, sans-serif;
     font-weight: bold;
     font-size: 2.5rem;
     color: black;
 }

 .TLDRSubHeader {
     font-family: Roboto Mono, sans-serif;
     font-size: 1.75rem;
     line-height: 150%;
     color: black;
 }

 .TLDRBodyText {

    font-family: Open Sans, sans-serif;
    font-size: 1rem;
    line-height: 150%;
    color: black;
 }

 .seperator {
     background: #C4C4C4;
     height: 0.5px;
 }

 .sideProjectHeader {
     font-family: Open Sans, sans-serif;
     font-weight: bold;
     font-size: 2rem;
     letter-spacing: 0.015em;
     color: black;
     text-transform: uppercase;
 }

 .sideProjectSubHeader {
     font-family: Open Sans, sans-serif;
     font-weight: 600;
     font-size: 1.25rem;
     color: black;
 }


 .cardTitle {

    font-family: Roboto Mono, sans-serif; 
    color: #5100FF;
    text-transform: uppercase;
    font-size: 1.25rem;
    margin-bottom: 1rem;
 }


 .cardTitle:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.5em;
 }

 .cardBody {

    font-family:Open Sans, sans-serif; 
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    margin-top: 16px;

 }

 .contactJumbotron {
    margin-top: 100px;
    background-color: #9665FF;
    margin-bottom: 0px;

 }
 .contactHeader {
     font-family: Open Sans, sans-serif;
     font-weight: bold;
     font-size: 2.1rem;
     color: white;
 }

 .contactLine {
     height: 2px;
     background-color: white;
     border-radius: 10px;
 }

 .contactText {
     font-family: Open Sans, sans-serif;
     font-size: 1.1rem;
     color: white;
 }
    `;


export const About = () => (

    
<Styles>



<Jumbotron className = "headerJumbotron">
        <div className="intro py-5">
          <Container>
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-12 col-md-7">
              <h1 className = "headerStyle"> Hi, I'm Daniel Ockiya <span aria-label="waving hand" role="img">👋</span></h1>
                <p className="subHeaderText"> I'm a product designer at TeamEcho GmBH.
                </p><div className="row">
                  <div className="col-lg-6 col-6">
                    <hr className="fancy-line mt-2 mb-4" />
                  </div>
                </div>
                <div className ="bodyHeaderText">
                <p>I have over 4+ years experience in the management of the complete design process, from conceptualization to the delivery of web and mobile applications user interface and experience.</p>
                <p>Catch me outside from work you will find me playing football with the local club in Vienna, Austria..</p>
               </div>
              </div>
              <div className="col-6 col-sm-3 col-md-4 offset-md-1 col-lg-3 offset-lg-3 mb-3 mb-sm-0 text-right order-first order-sm-last">
                  <img className = "profilePicture" alt ="Daniel Ockiya" src={profileRounded} />
              </div>
            </div>
          </Container>
        </div>
      </Jumbotron>
      <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 mb-4">
            <h3 className = "TLDRHeader">TL;DR</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4">
            <h5 className="TLDRSubHeader">What</h5>
            <div className="TLDRBodyText">
            <p>I've been designing and developing global mobility soloutions for over 3 years at Appzone group. </p>
            <p>I have a Bachelors degree in Computer science and management and a Masters in Interactive media. </p>
            </div>
            </div>
            <div className="col-md-4 col-lg-4">
            <h5 className="TLDRSubHeader">Where</h5>
            <div className = "TLDRBodyText">
            <p>I live in Vienna, Austria.</p>
            <p>I grew up in Lagos, Nigeria. The home of idealist.</p>
            </div>
            </div>
            <div className="col-md-4 col-lg-4">
            <h5 className="TLDRSubHeader">Things for Fun</h5>
            <div className = "TLDRBodyText">
            <p> I love playing video games. I'm currently playing lots of GTA V</p>
            <p> I play soccer by the weekend. </p>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 my-5">
            <hr className="seperator"/>
            </div>
        </div>
        </div>

      

        <Jumbotron className="contactJumbotron">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="contactHeader">Say hello.</h3>
              </div>
            </Row>
                <Row>
                  <div className="col-lg-4 col-md-4">
                     <hr className="contactLine mt-2 mb-4"></hr>
                  </div>
                </Row>
                <Row>
                <div className="col-lg-6 col-12">
                    <p className="contactText">I'm always interested in new ideas, opportunities or hearing what you're working on, so drop us a message and say hello.</p>
                </div>
                </Row> 
                <Row>
                <div className="col-lg-6 col-12">
                    <Button href="mailto:furquan101@gmail.com" className = "buttonStyling" variant="outline-light">Say hello</Button>
                </div>
                </Row>
        </Container>
        </Jumbotron>
</Styles>

)