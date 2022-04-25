import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import {BigCard} from './Components/BigCard';
import dispagoLogo from '../src/Components/Assets/Img/dispago.svg';
import dispagoCover from '../src/Components/Assets/Img/logistiks.png';
import Crawler from '../src/Components/Assets/Img/crawler.png';
import gtc from '../src/Components/Assets/Img/gtbself.png';
import gtLogo from '../src/Components/Assets/Img/gtb.svg';
import crawlLogo from '../src/Components/Assets/Img/Crawl.svg';
import pp from '../src/Components/Assets/Img/extra.svg';
import ppCover from '../src/Components/Assets/Img/piano.png';
import scLogo from '../src/Components/Assets/Img/seamconsult.svg';
import sc from '../src/Components/Assets/Img/sc.png';
import TE from '../src/Components/Assets/Img/TE.png';
import TELogo from '../src/Components/Assets/Img/teamecho.svg'

import './App.css';

const Styles = styled.div`


@media only screen and (max-width: 768px) {
    .headerStyling {
        font-size: 8vw !important;
        line-height: 1.2em !important;
        margin-left: 2rem !important;
        margin-right: 2rem !important;
        padding: 0;

    } 
}


.headerSpacing {
  padding-top: 3.5rem;
        
    }
    .headerStyling {
        color: #202020;
        font-family: 'Playfair Display', sans-serif; 
        font-size:  3rem;
        font-weight: 700;
        line-height: 1.2em;
    }
    `;

export const Home = () => (

<Styles>

<Container className="align-content-center">
<div className = "headerSpacing"/>
 <Row>  
   <Col>
    <h1 className="headerStyling mb-2">
    I’m a digital UI/UX designer, inspired by accessibility, culture and community.
    </h1>
    </Col>
 </Row>

 <Row> 
  <Col className ="mt-5">
  <BigCard 
    imgProjectLogo={TELogo}
    imgCardLarge={TE}
    cardTitleName = {"Creating a working environment that inspires"}
    cardBodyText = {"TeamEcho is the easiest way to create a better work environment for everyone in your organization. Get real-time insights and KPIs on business-critical challenges and strengthen company success. In this project we redesigned the comment hub web application giving it a modern look, and improving users feedback by 75%."}
    cardLink = {"/TeamEcho"}
   />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={crawlLogo}
    imgCardLarge={Crawler}
    cardTitleName = {"Bringing luxirious social experiences to you."}
    cardBodyText = {"Crawl is a simple to use platform that takes away the heavy lifting of trying to get inspired for a day or a night out in the city."}
    cardLink = {"/crawl"}
    />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={scLogo}
    imgCardLarge= {sc}
    cardTitleName = {"Creating a platform for expert consultancy services."}
    cardBodyText = {"Seamconsult is a platform that enables experienced specialists to provide consultation services to individuals, startups or companies."}
    cardLink = {"/seamconsult"}
    />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={gtLogo}
    imgCardLarge= {gtc}
    cardTitleName = {"Reduce the queues at the Banks, Get your ATM cards instantly."}
    cardBodyText = {"Guaranty Trust Holding Company PLC also known as GTCO PLC is a multinational financial services group.They offers retail and investment banking,  payments services etc. The self-service card issuance enables customers to print out their ATM cards without assistance in minutes."}
    cardLink = {"/gt"}
    />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={dispagoLogo}
    imgCardLarge= {dispagoCover}
    cardTitleName = {"Start a world class logistics business with ease."}
    cardBodyText = {"Dispago enables companies to focus on growing their business while building and automating logistics processes. We aim to improve real-time tracking and drive up productivity."}
    cardLink = {"/Dispago"}
    />
   </Col>
 </Row>


 <Row> 
  <Col>
    <BigCard 
    imgProjectLogo={pp}
    imgCardLarge={ppCover}
    cardLink={"/RSA"}
    cardTitleName = {"Digital page-turning while playing the piano."}
    cardBodyText = {"This project is aimed at getting insights on various page-turning methods while playing the piano. Example of such methods are: Wink of the eye, turn of the head, Tap, Swipe and the use of a foot pedal."}
    cardLink = {"/page-turning"}
    />
   </Col>
 </Row>

</Container>
</Styles>

)