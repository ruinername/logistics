import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {
  BlueBack,
  CheckShield,
  DocumentOrange,
  IconWithBackground,
  Laptop,
  Question,
  Timeline,
  TruckBig
} from "../assets/icons";
import {useTimelineMobileLayout} from "../utils";

function Landing() {

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    }
  }, []);

  const timelineMobileLayout = useTimelineMobileLayout();

  function renderTimelineLayout(layout: boolean) {
    if (layout) {
      return (
        <div className="timeline d-flex flex-row">
          <Timeline viewBox={60} mobile={true} />
          <div>
            <div className="timeline-card">
              <IconWithBackground backgroundColor="#FEF7EC" size={48}>
                <Laptop />
              </IconWithBackground>
              <div className="text">A consolidated platform for real time document management</div>
            </div>
            <div className="timeline-card">
              <IconWithBackground backgroundColor="#FEF7EC" size={48}>
                <DocumentOrange />
              </IconWithBackground>
              <div className="text">Services start including auto-renewal for documents such as insurance, permits, etc</div>
            </div>
            <div className="timeline-card">
              <IconWithBackground backgroundColor="#FEF7EC" size={48}>
                <CheckShield />
              </IconWithBackground>
              <div className="text">Launch an encrypted space whereby government officials can verify documents through our platform</div>
            </div>
            <div className="timeline-card">
              <IconWithBackground backgroundColor="#FEF7EC" size={48}>
                <Question />
              </IconWithBackground>
              <div className="text">Delve into other compliance related issues in the logistics industry</div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="timeline d-flex flex-row">
        <div className="timeline-left">
          <div className="timeline-card t-first">
            <IconWithBackground backgroundColor="#FEF7EC" size={48}>
              <Laptop />
            </IconWithBackground>
            <div className="text">A consolidated platform for real time document management</div>
          </div>
          <div className="timeline-card">
            <IconWithBackground backgroundColor="#FEF7EC" size={48}>
              <CheckShield />
            </IconWithBackground>
            <div className="text">Launch an encrypted space whereby government officials can verify documents through our platform</div>
          </div>
        </div>
        <Timeline />
        <div className="timeline-right">
          <div className="timeline-card t-first">
            <IconWithBackground backgroundColor="#FEF7EC" size={48}>
              <DocumentOrange />
            </IconWithBackground>
            <div className="text">Services start including auto-renewal for documents such as insurance, permits, etc</div>
          </div>
          <div className="timeline-card">
            <IconWithBackground backgroundColor="#FEF7EC" size={48}>
              <Question />
            </IconWithBackground>
            <div className="text">Delve into other compliance related issues in the logistics industry</div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <Container className="overflow-hidden" style={{ marginTop: 120 }}>
      <div className="block-with-truck">
        <div className="landing-title-and-desc">
          <h1>Just Drag & Drop  and Dock will handle the rest</h1>
          <p>Dock eliminates costs and tedious human labor by combining and consolidating all your trucking documents in an easy to access platform. Dock will also notify you when your documents are about to expire. </p>
          <div className="platform-info-card">
            <h3>One platform for your company workers and drivers</h3>
          </div>
        </div>
        <div className="truck-logo">
          <img
            src={TruckBig}
            className="truck-big"
          />
        </div>
        {!timelineMobileLayout && (<img
          src={BlueBack}
          className="vector-bg"
        />)}
        <div className="truck-logo-margin" />
      </div>
      {renderTimelineLayout(timelineMobileLayout)}
      <h2 style={{ marginBottom: 48 }} className="text-center">Our partners</h2>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <div className="partners-card">
          <img className="partners-logo" src={require('../assets/images/1.png')} alt=""/>
        </div>
        <div className="partners-card">
          <img className="partners-logo" src={require('../assets/images/2.png')} alt=""/>
        </div>
        <div className="partners-card">
          <img className="partners-logo" src={require('../assets/images/3.png')} alt=""/>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <div className="partners-card">
          <img className="partners-logo" src={require('../assets/images/4.png')} alt=""/>
        </div>
        <div className="partners-card">
          <img className="partners-logo" src={require('../assets/images/5.png')} alt=""/>
        </div>
      </div>
      <div className="contact-us">
        <Row>
          <Col md={2}></Col>
          <Col md={5}>
            <h2 className="heading">Contact us</h2>
            <p className="mb-0 body-l fw-500">Corporate headquarters:</p>
            <p className="mb-0 body-l fw-500">
              11 Merry Lane NP0000000000
              New Jersey, East Hanover, 00000
            </p>
          </Col>
          <Col md={5}></Col>
        </Row>
      </div>
    </Container>
  );
}

export default Landing;