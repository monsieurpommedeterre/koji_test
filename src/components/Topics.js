import { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function Topics() {
  // On component load, I fetch the jsonplaceholder API to get posts array
  const [topics, setTopics] = useState([]);
  useEffect(()=> {
    ( async () => {
        const topicsArray = [];
        const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await rawResponse.json();
        for(let i=0; i<10; i++) {
          // I only keep the 10 first results
          topicsArray.push(response[i])
        }
        setTopics([...topicsArray])
      } 
    )()
  });
  const topicsDisplay = topics.map((value) =>
    <ListGroupItem>
      <Link to={`/topic/${value.id}`}>{value.title}</Link>
    </ListGroupItem>
  )
  return (
    <Container>
      <Row>
        <Col>
          <h1>Topics</h1>
          <ListGroup>
            {topicsDisplay}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Topics;
