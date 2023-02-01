import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { demoschema } from '../schema';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'));

  return (
    <button type="button" style={{ backgroundColor: 'pink' }} onClick={decoratedOnClick}>
      {children}
    </button>
  );
}
function Home() {
  return (
    <div className="container">
      <Header>Welcome to Our Car Selling Shop!!</Header>
      <div className="title">The following is the list</div>
      <div className="car2">
        {demoschema.map((item) => {
          return (
            <>
              <div className="car">
                <Accordion defaultActiveKey="0">
                  <Card
                    css={`
                      max-width: 400px;
                      color: #000 !important;
                    `}>
                    <p className="heading">{item.name}</p>
                    <img src={item.image} alt="" />
                    <Card.Header>
                      <CustomToggle eventKey="1">KNOW MORE</CustomToggle>
                    </Card.Header>
                    <button className="btn btn-danger">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {' '}
                        BUY NOW
                      </a>
                    </button>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>{item.description}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

const Header = styled.div`
  margin-top: 50px;
  padding: 20px;
  font-size: 55px;
  text-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

// const Image=styled.
